import React, {Component} from 'react';

import {Table, Button} from 'semantic-ui-react';

export default class research extends Component {

  render() {

    return (
      <Table celled>
        <Table.Header>
         <Table.Row>
           <Table.HeaderCell>Project Name</Table.HeaderCell>
           <Table.HeaderCell>Departments</Table.HeaderCell>
           <Table.HeaderCell>Working Hours</Table.HeaderCell>
           <Table.HeaderCell>Spots Available</Table.HeaderCell>
         </Table.Row>
       </Table.Header>

       <Table.Body>

          {this.props.Researchs.map(research => (
             <Table.Row key= {research._id}>
               <Table.Cell>{research.title}</Table.Cell>
               <Table.Cell>{research.genre.name}</Table.Cell>
               <Table.Cell>{research.HourpWeek}</Table.Cell>
               <Table.Cell>{research.Number}</Table.Cell>
               <Table.Cell><Button onClick = { () => this.props.onDelete(research)}> Apply </Button></Table.Cell>
             </Table.Row>
           ))}
        </Table.Body>

        </Table>

    );
  }
}
