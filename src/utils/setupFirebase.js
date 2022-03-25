import fb from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const database = fb
  .initializeApp({
    apiKey: "AIzaSyAblt4nKB43R9vwl4d0Fa2mmy09ebt8aPE",
    authDomain: "feedzai-react-workshop-2022.firebaseapp.com",
    projectId: "feedzai-react-workshop-2022",
    storageBucket: "feedzai-react-workshop-2022.appspot.com",
    messagingSenderId: "991015989488",
    appId: "1:991015989488:web:83c37e2ed700b42b465235",
    measurementId: "G-F34J9MZ66H",
  })
  .firestore();

export default database;
