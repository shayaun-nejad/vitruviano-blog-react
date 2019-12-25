import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/header/Header';

import Blog from './containers/blog';
import About from './containers/about';

import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <main className="meat">
            <Route exact path="/" component={Blog} />
            <Route exact path="/about-us" component={About} />
        </main>
    </div>
  );
}

export default App;
