import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home/Home.js'
import Gallery from './components/Gallery/Gallery.js'

import Navbar from './components/Navbar/Navbar.js'
import Footer from './components/Footer/Footer.js'

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/gallery">
          <Gallery/>
        </Route>
      </Switch>
      <Footer/>
    </div>

  );
}

export default App;
