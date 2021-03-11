import React from "react"
import './PreviewCard.scss'

function PreviewCard(props) {
  const image = props.image;
  const source ='gallery/'+image;

  return (
    <div className='PreviewCard'>
      <img className='PreviewCard-image' src={source} alt={source} />
      <div className='PreviewCard-courtain'>
        <div><h5>Skitarii Ranger</h5>
          <h6>4 photos</h6></div>

      </div>

    </div>
  );
}

export default PreviewCard;
