import React from "react";
import './Home.scss'
import ContentHeader from '../ContentHeader/ContentHeader.js';
import PreviewCard from '../PreviewCard/PreviewCard.js';


function Home() {
    return (
      <div className='Home'>
          <ContentHeader text='Our works:'/>
          <PreviewCard/>
      </div>
    );
  }
  
  export default Home;
  