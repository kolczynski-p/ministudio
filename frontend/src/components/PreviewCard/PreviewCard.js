import React from "react"
import './PreviewCard.scss'
import {
  Link
} from "react-router-dom";

class PreviewCard extends React.Component {
  constructor(props) {
    super(props);

  }

  //componentDidMount() {
//
  //  fetch(`http://localhost:5000/works/${this.props.work.workId}/photos/1`)
  //    .then(response => {return response.json()})
  //  .then((json) => {this.setState({ previewImage: json.photoName })});
  //}

  render() {
    const workId= this.props.work.workId;
    const previewImage= this.props.work.previewImage;
    const title= this.props.work.title;
    const description = this.props.work.description;
    let folder ='/works_images/';
    if(this.props.sliderImage!=null)
      folder +=this.props.sliderImage;
    else
      folder +=previewImage;

    return (
      <Link to={`/gallery/works/${workId}`}>
        <div className={`PreviewCard ${this.props.className}`} >
          <img className='PreviewCard-image' src={folder} alt={folder} />
          <div className='PreviewCard-courtain'>
            <div><h3>{title}</h3>
              <h4>4 photos</h4></div>

          </div>

        </div>
      </Link>
    );
  }

}

export default PreviewCard;
