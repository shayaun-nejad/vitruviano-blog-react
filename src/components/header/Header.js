import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import logo from '../../Vitruviano-logo-transparent-svg.svg';
import './Header.css';

class Header extends Component {
  state = {
    currentSelect: 'Blog'
  }

  changeSelect = (select) => {
    this.setState({
      currentSelect: select
    })
  }

  blogSelect = () => {
    this.changeSelect('Blog');
  }

  hubSelect = () => {
    this.changeSelect('Hub');
  }

  render() {
    let blog = 'unselected';
    let hub = 'unselected';
    let community = 'unselected';
    let products = 'unselected';
    let courses = 'unselected';
    let settings = 'unselected';

    if (this.state.currentSelect === 'Blog') {
      blog = 'selected';
    } else if (this.state.currentSelect === 'Hub') {
      hub = 'selected';
    }

    return (
      <div className="header-container">
      <div className="img-container">
        <img src={logo} alt="logo" className="img" />
      </div>
      <div className="navigation-container">
        <div className="navigation">
              <Link to="/about-us" onClick={this.hubSelect} className={hub}>The Hub</Link>
              <Link to="/" className={community}>Community</Link>
              <Link to="/" className={products}>Products</Link>
              <Link to="/" onClick={this.blogSelect} className={blog}>Blog</Link>
              <Link to="/" className={courses}>Courses</Link>
              <Link to="/" className={settings}>Settings</Link>
        </div>
      </div>
  </div>

    )
  }
}

export default Header;
