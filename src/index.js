// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App.js';


// ReactDOM.render(<App/>,document.getElementById("root"));

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import MovieDetails2 from "./MovieDetails2";

const RootComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movie/:movieName" element={<MovieDetails2/>} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
};

ReactDOM.render(<RootComponent />, document.getElementById("root"));
