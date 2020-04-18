import React from 'react';

import './App.css';

// font awesome
import 'font-awesome/css/font-awesome.min.css';


import { Home } from './components'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Home />
      <Footer />
    </div>
  );
}

export default App;
