import shopTypes from "./shopTypes";
import { fireStore } from "../../firebase";

export const fetchCollectionData = () => async dispatch => {
  const shopRef = fireStore.collection("shop");
  try {
    dispatch({ type: shopTypes.FETCH_COLLECTION_START });
    const shopSnapshot = await shopRef.get();
    const shopMap = shopSnapshot.docs.reduce((accumulator, currentDoc) => {
      const { title, items } = currentDoc.data();
      const collectionKey = title.toLowerCase();
      return {
        ...accumulator,
        [collectionKey]: {
          id: currentDoc.id,
          routeName: encodeURI(title.toLowerCase()),
          title,
          items
        }
      };
    }, {});
    dispatch({ type: shopTypes.FETCH_COLLECTION_END, payload: shopMap });
  } catch (error) {
    dispatch({
      type: shopTypes.FETCH_COLLECTION_ERROR,
      payload: error.message
    });
  }
};
