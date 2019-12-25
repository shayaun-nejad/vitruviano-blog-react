import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/header/Header';

import Blog from './containers/blog';
import BlogPost from './containers/blog-post';
import About from './containers/about';

import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <main className="meat">
            <Route exact path="/" component={Blog} />
            <Route exact path="/about-us" component={About} />
            <Route exact path="/blog-post/:blogId" component={BlogPost} />
        </main>
    </div>
  );
}

export default App;
