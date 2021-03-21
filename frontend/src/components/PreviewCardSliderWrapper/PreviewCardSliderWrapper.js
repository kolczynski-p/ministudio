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
      work: {},
      images: [],
      imagesAmount: 4,
      currentImageIndex: 0
    }
  }
  componentDidMount() {
    let imagesList;

    fetch('http://localhost:5000/works/1')
      .then((response) => { return response.json() })
      .then((json) => { this.setState({ work: json }) });

    fetch(`http://localhost:5000/works/1/photos`)
      .then(response => { return response.json() })
      .then((json) => { this.setState({ images: json.photos }) });


  }


  changeIndex(value) {
    if ((this.state.currentImageIndex + value) === this.state.imagesAmount) {
      this.setState({ currentImageIndex: 0 });
    }

    else if ((this.state.currentImageIndex + value) < 0) {
      this.setState({ currentImageIndex: this.state.imagesAmount - 1 });
    }
    else
      this.setState({ currentImageIndex: this.state.currentImageIndex + value });

  }




  render() {
    const images = this.state.images;
    const currentImageIndex = this.state.currentImageIndex;
    const imagesNumber = this.state.imagesAmount;

    return (
      <div className='PreviewCardSliderWrapper'>

        <PreviewCard
          key={this.state.work.workId} work={this.state.work} previewImage={this.state.images[currentImageIndex]}
        />
        <SliderPanelWrapper
          imagesNumber={imagesNumber}
          index={currentImageIndex}
          onIndexChange={this.changeIndex}
        />

        <div className='PreviewCardSliderWrapper-seeAllBtn'>
          <NavLink to="/gallery" activeClassName="PreviewCardSliderWrapper-seeAllBtn-galleryLink">
            See All
          </NavLink>
        </div>

      </div>
    );
  }

}

export default PreviewCardSliderWrapper;
