import React from "react"
import './Gallery.scss'
import { Route, Router } from "react-router-dom"
import ContentHeader from '../ContentHeader/ContentHeader.js';
import PreviewCard from '../PreviewCard/PreviewCard.js';

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      works: []
    };
  }

  componentDidMount() {

    fetch('http://localhost:5000/works')
      .then((response) => {return response.json()})
      .then((json) => {this.setState({ works: json.works })});
  }



  render() {
    const previewImages = this.state.previewImages;
    
    const worksList = this.state.works.map((work) =>
      <PreviewCard key={work.workId} work={work} className='Gallery-previewCard'/>
      );

    return (
      <section className='Gallery ContentPageSection'>
        <ContentHeader text='Gallery' />
        <div className='Gallery-previewCardsWrapper'>{worksList}</div>

      </section>
    );
  }
}

export default Gallery;
