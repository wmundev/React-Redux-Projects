import React from "react";
import "./CollectionOverview.scss";
import CollectionPreview from "../CollectionPreview";

const CollectionOverview = ({ collectionArray }) => {
  const renderPreview = () => {
    const previewsContent = collectionArray.map(preview => (
      <CollectionPreview key={preview.id} {...preview} />
    ));
    return previewsContent;
  };

  return <div className="collections-overview">{renderPreview()}</div>;
};

export default CollectionOverview;
