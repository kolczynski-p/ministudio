import React from "react"
import './Work.scss'
import { Route, Router } from "react-router-dom"
import ContentHeader from '../ContentHeader/ContentHeader.js';

class Work extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      workId : this.props.match.params.id,
  };
  }





  render() {

    return (
      <div className='Work'>
        <ContentHeader text = {`Gallery - work. ${this.state.workId}`} />
        
      </div>
    );
  }
}

export default Work;
