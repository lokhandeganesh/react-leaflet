import React from "react";
import { BrowserRouter as Router, } from "react-router-dom";
import Map from './Components/Map';
import "leaflet/dist/leaflet.css"
import "./App.css"

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Map />
      </Router>
    </div>
  );
}

export default App;
