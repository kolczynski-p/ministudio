import React from "react";
import './ContentHeader.scss';

function ContentHeader(props) {
    return (
      <div className='ContentHeader'>
          <h2 className='ContentHeader-header'>{props.text}</h2>
          <div className='ContentHeader-line'></div>
      </div>
    );
  }
  
  export default ContentHeader;
  