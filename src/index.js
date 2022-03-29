import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components";
import "./assets/styles/index.css";

// Workshop Steps
// 1. Show the place around
// 2. Get the Router working
// 3. Get the latest people and show the cards
// 4. Get the modal working
// 5. Get the list of messages from the server
// 6. Send the message data to a specific message screen
const ourContent = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const ourLovelyReactRoot = document.getElementById("root");

ReactDOM.render(ourContent, ourLovelyReactRoot);
