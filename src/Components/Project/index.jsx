import React, { Component } from 'react';
import Research from "./Research";
import Paginating from "./Pagination";
import {getResearch} from '../../services/fakeResearchService';

export default class ProjectDisplay extends Component {
  state = {
    researchs: getResearch (),
  };

    handleDelete = research => {
      const researchs= this.state.researchs.filter(m => m._id !== research._id);
      this.setState({researchs:researchs});
    };

  render() {

    return (
      <div>
      <Research Researchs = {this.state.researchs} onDelete= {this.handleDelete}/>
      <Paginating onCount= {this.state.researchs.length} pageSize={5}/>
      </div>
    );
  }
}
