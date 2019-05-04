import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import searchPage from "./components/pages/searchPage";
import savedPage from "./components/pages/savedPage";

function App () {
  return(
    <Router>
      <div>
        <Route exact path="/" component={searchPage} />
        <Route exact path="/saved" component={savedPage} />
      </div>
    </Router>
  )
}







export default App;
