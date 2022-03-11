import React from "react";
import { Header, TinderCards, SwipeButtons, Chats, ChatScreen } from "../index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/chat/:person"
            element={
              <React.Fragment>
                <Header backButton="/chat" />
                <ChatScreen />
              </React.Fragment>
            }
          />
          <Route
            path="/chat"
            element={
              <React.Fragment>
                <Header backButton="/" />
                <Chats />
              </React.Fragment>
            }
          />
          <Route
            path="/"
            element={
              <React.Fragment>
                <Header />
                <TinderCards />
                <SwipeButtons />
              </React.Fragment>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
