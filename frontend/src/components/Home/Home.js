import React from "react";
import './Home.scss'
import ContentHeader from '../ContentHeader/ContentHeader.js';
import PreviewCardSliderWrapper from '../PreviewCardSliderWrapper/PreviewCardSliderWrapper.js';


function Home() {
    return (
      <div className='Home'>
          <ContentHeader text='Our works:'/>
          <PreviewCardSliderWrapper/>
      </div>
    );
  }
  
  export default Home;
  