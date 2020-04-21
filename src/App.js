import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.css';

// font awesome
import 'font-awesome/css/font-awesome.min.css';


import { Home, CarListView, Nav, Navbar } from './components'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />

        <Route exact path="/" component={Home} />
        <Route path="/cars" component={CarListView} />
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
