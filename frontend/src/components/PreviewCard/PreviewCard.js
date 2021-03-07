import React from "react";
import './PreviewCard.scss'
import placeholder from '../../assets/gallery/work1_1.jpg'

function PreviewCard() {
    return (
      <div className='PreviewCard'>
        <img className='PreviewCard-image' src={placeholder} alt='previewimg'/>
        <div className='PreviewCard-info'>
          <h4>Skitarii Ranger</h4>
          <h5>4 photos</h5>
        </div>

      </div>
    );
  }
  
  export default PreviewCard;
  