import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBevOQ5WL0UNuwvrBkAancDJVhO6W-eR4k",
    authDomain: "first-react-app-workshop.firebaseapp.com",
    databaseURL: "https://first-react-app-workshop.firebaseio.com",
    projectId: "first-react-app-workshop",
    storageBucket: "first-react-app-workshop.appspot.com",
    messagingSenderId: "829584935954"
});

const db = firebase.database(app);
const base = Rebase.createClass(db);

export default base;
