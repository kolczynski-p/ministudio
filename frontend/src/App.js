import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Router,
  Redirect
} from "react-router-dom";

import Home from './components/Home/Home.js'
import Gallery from './components/Gallery/Gallery.js'

import Navbar from './components/Navbar/Navbar.js'
import Footer from './components/Footer/Footer.js'
import PreviewCard from './components/PreviewCard/PreviewCard.js'
import Work from './components/Work/Work.js'

import './App.scss'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/gallery/works/:id?" component={Work}>
        </Route>
        <Route exact path="/gallery" component={Gallery}>
        </Route>
      </Switch>
      <Footer/>
    </div>

  );
}

export default App;
