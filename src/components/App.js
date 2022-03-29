import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, ChatsPage, ConversationPage } from "../pages";

/**
 * STEP 2: Get the router working
 *
 * Top-Level component
 * Defines a list of `Route` components that watch for a specific path
 *
 * @returns {JSX.Element}
 */
function App() {
  return (
    <div role="application" className="app">
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
