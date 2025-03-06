import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import "./App.css";

function App() {
  const apikey = import.meta.env.VITE_REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);




 const [dark1,setdark] = useState(true);
  const toggle=()=>{
  
    if(dark1){
            document.body.style.backgroundColor="#eaeaeb";
            setdark(false)
    }
    else{
      document.body.style.backgroundColor="#02001a";
      setdark(true)
    }
  }









  return (
    <div>
      <Router>
        <Navbar toggle={toggle} dark1={dark1}/>
        <LoadingBar color="#1D4ED8" height={3} progress={progress} />
        <Routes>
          <Route path="/" element={<Navigate to="/world" />} />
          <Route
            exact
            path="/world"
            element={
              <News toggle={toggle} dark1={dark1}
                setProgress={setProgress}
                api={apikey}
                key="world"
                category="world"
              />
            }
          />
          <Route
            exact
            path="/politics"
            element={
              <News toggle={toggle} dark1={dark1}
                setProgress={setProgress}
                api={apikey}
                key="politics"
                category="politics"
              />
            }
          />
          <Route
            exact
            path="/education"
            element={
              <News toggle={toggle} dark1={dark1}
                setProgress={setProgress}
                api={apikey}
                key="education"
                category="education"
              />
            }
          />
          <Route
            exact
            path="/crime"
            element={
              <News toggle={toggle} dark1={dark1}
                setProgress={setProgress}
                api={apikey}
                key="crime"
                category="crime"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News toggle={toggle} dark1={dark1}
                setProgress={setProgress}
                api={apikey}
                key="business"
                category="business"
              />
            }
          />

          <Route
            exact
            path="/entertainment"
            element={
              <News toggle={toggle} dark1={dark1}
                setProgress={setProgress}
                api={apikey}
                key="entertainment"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News toggle={toggle} dark1={dark1}
                setProgress={setProgress}
                api={apikey}
                key="health"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News toggle={toggle} dark1={dark1}
                setProgress={setProgress}
                api={apikey}
                key="science"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News toggle={toggle} dark1={dark1}
                setProgress={setProgress}
                api={apikey}
                key="sports"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News toggle={toggle} dark1={dark1}
                setProgress={setProgress}
                api={apikey}
                key="technology"
                category="technology"
              />
            }
          />
          <Route
            exact
            path="/environment"
            element={
              <News toggle={toggle} dark1={dark1}
                setProgress={setProgress}
                api={apikey}
                key="environment"
                category="environment"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
