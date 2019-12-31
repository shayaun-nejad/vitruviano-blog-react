import React, { Component } from 'react';
import { goBack } from 'connected-react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
    unsetBlog,
    getBlog,
  } from '../../modules/blog';

import backButton from './back-button.svg';

import './Blogpost.css';
import Rating from '@material-ui/lab/Rating';

class BlogPost extends Component {
    componentDidMount() {
        this.blogData = this.props.match.params && this.props.getBlog(props.match.params.blogId);
    }
    render() {
        let currentBlog = this.blogData || this.props.currentBlog;
    
        return (
            <div className="main-container-blog-post">
                <div className="blog-post-container">
                    <img src={backButton} onClick={props.goBack} className="back-button"/>
                    <h2>{currentBlog.title}</h2>
                </div>
                <div className="challenge-card">
                    <img src={currentBlog.imageUrl}/>
                    <p> 
                        <span>Start Date: {currentBlog.date}</span>
                        <br/>
                        <span>Difficulty: <Rating name="read-only" value={currentBlog.rating} readOnly/></span> 
                        <br/>
                        <span>Days Left: {currentBlog.daysLeft} </span>
                    </p>
                </div>
                <div className="blog-post-body"> 
                    <div className="challenge-card">
                        <h3>Introduction</h3>
                        {currentBlog.body && currentBlog.body.map(paragraph => <p>&emsp; {paragraph}</p>) } 
                    </div>
                    <div className="challenge-card">
                        <h3>Hypothesis</h3>
                        {currentBlog.hypothesis && currentBlog.hypothesis.map(paragraph => <p>&emsp; {paragraph}</p>) } 
                    </div>
                    <div className="challenge-card">
                        <h3>Materials</h3>
                        <ul>
                            {
                                currentBlog.materials && currentBlog.materials.map(paragraph => {
                                    return <li><p>{paragraph}</p></li>
                                })
                            }                        
                        </ul>
                    </div>
                    <div className="challenge-card">
                        <h3>Experiment Design</h3>
                        <ul>
                            {
                                currentBlog.experimentDesign && currentBlog.experimentDesign.map(paragraph => {
                                    return <li><p>{paragraph}</p></li>
                                })
                            }                        
                        </ul>
                    </div>
                </div>
            </div>
        )
    
    }
}

const mapStateToProps = ({ blog }) => ({
    currentBlog: blog.currentBlog,
  })
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators(
      {
        unsetBlog,
        getBlog: (id) => getBlog(id),
        goBack: () => goBack(),
      },
      dispatch
    )
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(BlogPost)
  
