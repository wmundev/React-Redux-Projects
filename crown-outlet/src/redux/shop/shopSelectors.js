import { createSelector } from "reselect";

const getShop = state => state.shop;

export const getCollections = createSelector(
  [getShop],
  shop => shop.collectionData
);

export const getCollectionArray = createSelector(
  [getCollections],
  collectionData => Object.keys(collectionData).map(key => collectionData[key])
);

export const getCollectionByKey = collectionKey =>
  createSelector(
    [getCollections],
    collectionData => collectionData[collectionKey]
  );
