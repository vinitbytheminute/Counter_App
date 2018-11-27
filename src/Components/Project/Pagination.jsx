import React, { Component } from 'react';
import { Icon, Pagination } from 'semantic-ui-react';



export default class Paginating extends Component {
state = {
  activePage: 1,
};

  handlePaginationChange = (e, { activePage }) => {
    this.setState({ activePage });
    console.log({activePage});
  };

  render() {
    const {onCount, pageSize} = this.props;
    const paginationtotal= onCount/pageSize;

    return (

      <Pagination
        defaultActivePage={this.activePage}
        ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
        firstItem={{ content: <Icon name='angle double left' />, icon: true }}
        lastItem={{ content: <Icon name='angle double right' />, icon: true }}
        prevItem={{ content: <Icon name='angle left' />, icon: true }}
        nextItem={{ content: <Icon name='angle right' />, icon: true }}
        totalPages={paginationtotal}
        onPageChange={this.handlePaginationChange}
        //onClick= {() => }
        //onClick = {() => this.props.onMove(active)}
      />
    );
  }
}
