import React from "react";
import { withRouter } from "react-router-dom";
import "./CollectionPreview.scss";
import CollectionItem from "../CollectionItem";

const CollectionPreview = ({ title, routeName, items, history }) => {
  const renderItems = () => {
    const itemsContent = items
      .filter((item, index) => index < 4)
      .map(item => <CollectionItem key={item.id} item={item} />);
    return itemsContent;
  };

  return (
    <div className="collection-preview">
      <h1 className="title" onClick={() => history.push(`/shop/${routeName}`)}>
        {title.toUpperCase()}
      </h1>
      <div className="preview">{renderItems()}</div>
    </div>
  );
};

export default withRouter(CollectionPreview);
