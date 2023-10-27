// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";

// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrIFTOMophQffZTun98FGVmYqc2lX4foI",
  authDomain: "react-2f7af.firebaseapp.com",
  projectId: "react-2f7af",
  storageBucket: "react-2f7af.appspot.com",
  messagingSenderId: "852731477322",
  appId: "1:852731477322:web:72731ba4589034eea595b3",
  measurementId: "G-775G2R0CQF",
};
const getProduct = async () => {
  const db = getFirestore();
  const itemsCollection = collection(db, "Products");
  const snapshot = await getDocs(itemsCollection);
  if (snapshot.exists()) {
    return {
      id: snapshot.id,
      ...snapshot.data(),
    };
  }
  
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const firestore = getfirestore(app);
/* const removeProduct = () => {

} */
export const Products = { getProduct };
