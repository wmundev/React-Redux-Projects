import { connect } from "react-redux";
import { compose } from "redux";
import {
  getCollectionByKey,
  getCollectionIsFetched
} from "../../redux/shop/shopSelectors";
import WithSpinner from "../../components/WithSpinner";
import CollectionPage from "./index";

const mapStateToProps = (state, ownProps) => {
  return {
    isLoading: !getCollectionIsFetched(state),
    collection: getCollectionByKey(ownProps.match.params.collectionKey)(state)
  };
};

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
