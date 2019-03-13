import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAxLrJspbNOa-pHsakWXWE_kXMrqAFzgME",
    authDomain: "first-react-app-workshop-f8afd.firebaseapp.com",
    databaseURL: "https://first-react-app-workshop-f8afd.firebaseio.com",
    projectId: "first-react-app-workshop-f8afd",
    storageBucket: "first-react-app-workshop-f8afd.appspot.com",
    messagingSenderId: "791458338660"
});

const db = firebase.database(app);
const base = Rebase.createClass(db);

export default base;
