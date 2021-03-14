import React from "react"
import './PreviewCardSliderWrapper.scss'
import PreviewCard from '../PreviewCard/PreviewCard.js'
import SliderPanelWrapper from '../SliderPanelWrapper/SliderPanelWrapper.js'
import {
  NavLink,
  Link
} from "react-router-dom"


class PreviewCardSliderWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.changeIndex = this.changeIndex.bind(this);
    this.state = {
      previewImages: ['work1_1.jpg', 'work1_2.jpg', 'work1_3.jpg', 'work1_4.jpg'],
      currentImageIndex: 0
    }
  }
  changeIndex(value) {
    if ((this.state.currentImageIndex + value) === this.state.previewImages.length) {
      this.setState({ currentImageIndex: 0 });
    }

    else if ((this.state.currentImageIndex + value) < 0) {
      this.setState({ currentImageIndex: this.state.previewImages.length - 1 });
    }
    else
      this.setState({ currentImageIndex: this.state.currentImageIndex + value });

  }




  render() {
    const previewImages = this.state.previewImages;
    const currentImageIndex = this.state.currentImageIndex;
    const imagesNumber = this.state.previewImages.length;

    return (
      <div className='PreviewCardSliderWrapper'>
        <Link to={`/gallery/${previewImages[currentImageIndex]}`}>
          <PreviewCard
            image={previewImages[currentImageIndex]}
          />
        </Link>
        <SliderPanelWrapper
          imagesNumber={imagesNumber}
          index={currentImageIndex}
          onIndexChange={this.changeIndex}
        />

        <div className='PreviewCardSliderWrapper-seeAllBtn'>
          <h4>See all</h4>
        </div>

      </div>
    );
  }

}

export default PreviewCardSliderWrapper;
