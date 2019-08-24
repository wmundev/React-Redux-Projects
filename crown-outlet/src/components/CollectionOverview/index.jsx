import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./CollectionOverview.scss";
import CollectionPreview from "../CollectionPreview";
import { getCollectionArray } from "../../redux/shop/shopSelectors";

const CollectionOverview = ({ collectionArray }) => {
  const renderPreview = () => {
    const previewsContent = collectionArray.map(preview => (
      <CollectionPreview key={preview.id} {...preview} />
    ));
    return previewsContent;
  };

  return <div className="collections-overview">{renderPreview()}</div>;
};

const mapStateToProps = createStructuredSelector({
  collectionArray: getCollectionArray
});

export default connect(mapStateToProps)(CollectionOverview);
