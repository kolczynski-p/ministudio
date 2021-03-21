import React from "react"
import './PreviewCard.scss'
import {
  Link
} from "react-router-dom";

class PreviewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewImage: ''

    }


  }

  componentDidMount() {

    fetch(`http://localhost:5000/works/${this.props.work.workId}/photos/1`)
      .then(response => {return response.json()})
    .then((json) => {this.setState({ previewImage: json.photoName })});
  }

  render() {
    const workId= this.props.work.workId;
    const title= this.props.work.title;
    const description = this.props.work.description;
    let folder ='works_images/';
    if(this.props.previewImage!=null)
      folder ='works_images/'+this.props.previewImage;
    else
      folder ='works_images/'+this.state.previewImage;

    return (
      <Link to={`/gallery/works/${workId}`}>
        <div className={`PreviewCard ${this.props.className}`} >
          <img className='PreviewCard-image' src={folder} alt={folder + this.props.previewImage} />
          <div className='PreviewCard-courtain'>
            <div><h5>{title}</h5>
              <h6>4 photos</h6></div>

          </div>

        </div>
      </Link>
    );
  }

}

export default PreviewCard;
