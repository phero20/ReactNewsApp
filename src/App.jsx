import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import "./App.css";

function App() {
  const apikey = import.meta.env.VITE_REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color="#1D4ED8"
          height={3}
          progress={progress}
        />
        <Routes>
          <Route path="/" element={<Navigate to="/general" />} />
          <Route
            exact
            path="/general"
            element={<News setProgress={setProgress} api={apikey} key="general" category="general" />}
          />
          <Route
            exact
            path="/business"
            element={<News setProgress={setProgress} api={apikey} key="business" category="business" />}
          />
          <Route
            exact
            path="/entertainment"
            element={<News setProgress={setProgress} api={apikey} key="entertainment" category="entertainment" />}
          />
          <Route
            exact
            path="/health"
            element={<News setProgress={setProgress} api={apikey} key="health" category="health" />}
          />
          <Route
            exact
            path="/science"
            element={<News setProgress={setProgress} api={apikey} key="science" category="science" />}
          />
          <Route
            exact
            path="/sports"
            element={<News setProgress={setProgress} api={apikey} key="sports" category="sports" />}
          />
          <Route
            exact
            path="/technology"
            element={<News setProgress={setProgress} api={apikey} key="technology" category="technology" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;