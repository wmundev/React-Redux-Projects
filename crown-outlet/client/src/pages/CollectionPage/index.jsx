import React from "react";
import "./CollectionPage.scss";
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

export default CollectionPage;
