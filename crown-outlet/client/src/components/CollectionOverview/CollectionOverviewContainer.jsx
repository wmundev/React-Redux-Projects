import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import {
  getCollectionIsFetching,
  getCollectionArray
} from "../../redux/shop/shopSelectors";
import CollectionOverview from "./index";
import WithSpinner from "../WithSpinner";

const mapStateToProps = createStructuredSelector({
  isLoading: getCollectionIsFetching,
  collectionArray: getCollectionArray
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
