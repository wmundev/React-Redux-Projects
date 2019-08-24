import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/CollectionOverview";
import CollectionPage from "../CollectionPage";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={match.path} component={CollectionOverview} />
      <Route
        exact
        path={`${match.path}/:collectionKey`}
        component={CollectionPage}
      />
    </div>
  );
};

export default ShopPage;
