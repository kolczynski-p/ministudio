import React from "react"
import './GalleryWorkSliderWrapper.scss'
import PreviewCard from '../PreviewCard/PreviewCard.js'
import SliderPanelWrapper from '../SliderPanelWrapper/SliderPanelWrapper.js'
import {
  NavLink,
  Link
} from "react-router-dom"


class GalleryWorkSliderWrapper extends React.Component {
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
    const workId = this.props.workId;

    fetch(`http://localhost:5000/works/${workId}`)
      .then((response) => { return response.json() })
      .then((json) => { this.setState({ work: json }) });

    fetch(`http://localhost:5000/works/${workId}/photos`)
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
    let folder = '/works_images/' + images[currentImageIndex];

    return (
      <div className='GalleryWorkSliderWrapper'>
        <div className='MainImageWrapper'>
          <img className='SliderImage__current' src={folder} alt={folder} />
        </div>
        <div className="NavigationArrowsBar"></div>
        <div className></div>

        <SliderPanelWrapper
          imagesNumber={imagesNumber}
          index={currentImageIndex}
          onIndexChange={this.changeIndex}
        />
      </div>
    );
  }

}

export default GalleryWorkSliderWrapper;
