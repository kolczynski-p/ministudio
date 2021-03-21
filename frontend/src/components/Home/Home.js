import React from "react";
import './Home.scss'
import ContentHeader from '../ContentHeader/ContentHeader.js';
import PreviewCardSliderWrapper from '../PreviewCardSliderWrapper/PreviewCardSliderWrapper.js';


function Home() {
    return (
      <section className='Home ContentPageSection'>
          <ContentHeader text='Our works:'/>
          <PreviewCardSliderWrapper/>
      </section>
    );
  }
  
  export default Home;
  