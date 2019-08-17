import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
const projectId = process.env.REACT_APP_GOOGLE_PROJECT_ID;
const messagingSenderId = process.env.REACT_APP_GOOGLE_SENDER_ID;
const appId = process.env.REACT_APP_GOOGLE_APP_ID;

const firebaseConfig = {
  apiKey,
  authDomain: `${projectId}.firebaseapp.com`,
  databaseURL: `https://${projectId}.firebaseio.com`,
  projectId,
  storageBucket: "",
  messagingSenderId,
  appId
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const createUserDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = fireStore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdDate,
        ...additionalData
      });
    } catch (error) {
      console.log("Failed to create user document", error.message);
    }
  }
  return userRef;
};

export default firebase;
