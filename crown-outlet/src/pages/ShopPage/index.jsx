import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionData } from "../../redux/shop/shopActions.js";
import CollectionOverviewContainer from "../../components/CollectionOverview/CollectionOverviewContainer";
import CollectionPageContainer from "../CollectionPage/CollectionPageContainer";

class ShopPage extends React.Component {
  componentDidMount = () => {
    this.props.fetchCollectionData();
  };

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={match.path}
          component={CollectionOverviewContainer}
        />
        <Route
          exact
          path={`${match.path}/:collectionKey`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCollectionData: () => dispatch(fetchCollectionData())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
