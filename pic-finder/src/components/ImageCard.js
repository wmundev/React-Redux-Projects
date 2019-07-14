import React, { Component } from "react";

class ImageCard extends Component {
  constructor() {
    super();
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  onImageLoad = () => {
    const spans = Math.ceil(this.imageRef.current.height / 10);
    this.setState({ spans });
  };

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.onImageLoad);
  }

  render() {
    const image = this.props.image;
    return (
      <img
        src={image.urls.regular}
        alt={image.urls.alt_description}
        ref={this.imageRef}
        style={{ gridRowEnd: `span ${this.state.spans}` }}
      />
    );
  }
}

export default ImageCard;
