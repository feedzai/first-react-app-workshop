import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./utils/serviceWorker";
import App from "./app/App";

/* global document */

ReactDOM.render(
    <App />,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
