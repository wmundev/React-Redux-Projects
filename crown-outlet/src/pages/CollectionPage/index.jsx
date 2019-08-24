import React from "react";
import { connect } from "react-redux";
import "./CollectionPage.scss";
import { getCollectionByKey } from "../../redux/shop/shopSelectors";
import CollectionItem from "../../components/CollectionItem";

const CollectionPage = ({ collection }) => {
  const renderCollectionItems = () =>
    collection.items.map(item => <CollectionItem key={item.id} item={item} />);
  return (
    <div className="collection-page">
      <div className="title">{collection.title}</div>
      <div className="items">{renderCollectionItems()}</div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: getCollectionByKey(ownProps.match.params.collectionKey)(state)
  };
};

export default connect(mapStateToProps)(CollectionPage);
