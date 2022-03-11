import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import PhotoDetailsPage from "../routes/PhotoDetailsPage";
import PhotoFeedPage from "../routes/PhotoFeedPage";
import NotFound from "../routes/NotFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Link to="/" className="App-link">
              ZAIstagram
            </Link>
          </header>

          <div className="App-body">
            <Routes>
              <Route path="/" element={PhotoFeedPage} />
              {null /* TODO-3 */}
              <Route element={NotFound} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
