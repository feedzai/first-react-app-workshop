import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, ChatsPage, ConversationPage } from "../../pages";
import "./App.css";

function App() {
  return (
    <div className="app" role="application">
      <Router>
        <Routes>
          <Route path="/chat/:person" element={<ConversationPage />} />
          <Route path="/chat" element={<ChatsPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
