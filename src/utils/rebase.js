import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const app = firebase.initializeApp({
    apiKey: "AIzaSyB1MauDH9sMgzKdH1ISxn5SEF8rTvW1n48",
    authDomain: "my-first-react-app-c702d.firebaseapp.com",
    databaseURL: "https://my-first-react-app-c702d.firebaseio.com",
    projectId: "my-first-react-app-c702d",
    storageBucket: "my-first-react-app-c702d.appspot.com",
    messagingSenderId: "345905942753"
});

const db = firebase.database(app);
const base = Rebase.createClass(db);

export default base;
