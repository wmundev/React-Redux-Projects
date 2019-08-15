import React from "react";
import "./CollectionPreview.scss";
import CollectionItem from "../CollectionItem";

const CollectionPreview = ({ title, items }) => {
  const renderItems = () => {
    const itemsContent = items
      .filter((item, index) => index < 4)
      .map(item => <CollectionItem key={item.id} {...item} />);
    return itemsContent;
  };

  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">{renderItems()}</div>
    </div>
  );
};

export default CollectionPreview;
