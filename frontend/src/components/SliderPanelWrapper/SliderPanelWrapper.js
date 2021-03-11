import React from "react";
import './SliderPanelWrapper.scss'
import arrow from '../../assets/arrow.svg'


class SliderPanelWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeNext = this.handleChangeNext.bind(this);
    this.handleChangePrevious = this.handleChangePrevious.bind(this);
  }

  handleChangeNext() {
    this.props.onIndexChange(1);

  }
  handleChangePrevious() {
    this.props.onIndexChange(-1);
  }
  render() {
    let radiosList = [];
    for (var i = 0; i < this.props.imagesNumber; i++) {
      if (i === this.props.index) {
        radiosList.push(<div className='SliderPanel-radio__current'></div>);
      }
      else {
        radiosList.push(<div className='SliderPanel-radio'></div>);
      }

    }
    return (
      <div className='SliderPanelWrapper'>
        <div className='SliderPanel-nav SliderPanel-nav__left' onClick={this.handleChangePrevious}>
          <img src={arrow} alt='left arrow'></img>
        </div>
        <div className='SliderPanel-radiosWrapper'>
        {radiosList}
        </div>
        <div className='SliderPanel-nav SliderPanel-nav__right' onClick={this.handleChangeNext}>
          <img src={arrow} alt='right arrow'></img>
        </div>

      </div>
    );
  }
}

export default SliderPanelWrapper;
