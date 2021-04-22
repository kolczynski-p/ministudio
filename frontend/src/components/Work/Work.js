import React from "react"
import './Work.scss'
import { Route, Router, Link, useHistory } from "react-router-dom"
import ContentHeader from '../ContentHeader/ContentHeader.js';
import GalleryWorkSliderWrapper from '../GalleryWorkSliderWrapper/GalleryWorkSliderWrapper.js';


function Work(props) {
  const workId=props.match.params.id;
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack()
  };

  return (
    <section className='Work ContentPageSection'>
      <div onClick={handleGoBack}><ContentHeader text='Back' /></div>
      <GalleryWorkSliderWrapper workId={workId}/>
    </section>
  );

}

export default Work;
