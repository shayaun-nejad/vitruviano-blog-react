import React from 'react';
import { goBack } from 'connected-react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
    unsetBlog,
  } from '../../modules/blog';

import backButton from './back-button.svg';

import './Blogpost.css';
import Rating from '@material-ui/lab/Rating';



const BlogPost = (props) => {
    return (
        <div className="main-container-blog-post">
            <div className="blog-post-container">
                <img src={backButton} onClick={props.goBack} className="back-button"/>
                <h2>{props.currentBlog.title}</h2>
            </div>
            <div className="challenge-card">
                <p>
                    <span>Start Date: {props.currentBlog.date}</span>
                    <br/>
                    <span>Difficulty: <Rating name="read-only" value={props.currentBlog.rating} readOnly/></span> 
                    <br/>
                    <span>Days Left: 52 </span>
                </p>
            </div>
            <div className="blog-post-body"> 
                {props.currentBlog.body && props.currentBlog.body.map(paragraph => <p>&emsp; {paragraph}</p>) } 
            </div>
        </div>
    )
}
const mapStateToProps = ({ blog }) => ({
    currentBlog: blog.currentBlog,
  })
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators(
      {
        unsetBlog,
        goBack: () => goBack(),
      },
      dispatch
    )
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(BlogPost)
  
