import React from "react"
import './Gallery.scss'
import { Route, Router } from "react-router-dom"

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params.id);
    this.state = {
      workId : this.props.match.params.id
  };
  }




  render() {

    return (
      <div className='Gallery'>
        <p>Galeria{this.state.workId}</p>
      </div>
    );
  }
}

export default Gallery;
