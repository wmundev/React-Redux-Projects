import React from "react";
import ImageCard from "./ImageCard";
import "../style/images.css";

const ImageList = ({ images }) => {
  const imageArr = images.map(image => {
    return <ImageCard image={image} key={image.id} />;
  });
  return <div className="image-list">{imageArr}</div>;
};

export default ImageList;
