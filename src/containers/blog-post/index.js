import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Disqus from 'disqus-react';

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
        this.blogData = this.props.match.params && this.props.getBlog(this.props.match.params.blogId);
    }

    render() {
        let currentBlog = this.blogData || this.props.currentBlog;
        const disqusShortname = "vitruviano-blog" //found in your Disqus.com dashboard
        const disqusConfig = {
          url: 'https://vitruviano.io' || (this.props.match.params && `https://vitruviano.io/blog-post/${this.props.match.params.blogId}`), //this.props.pageUrl
          identifier: `vitruviano:::${this.props.match.params && this.props.match.params.blogId}`, //this.props.uniqueId
          title: `${currentBlog.title}` //this.props.title
        }
    

        return (
            <div className="main-container-blog-post">
            <Helmet>
                <title>{currentBlog.title}</title>
            </Helmet>
            <div className="blog-post-container">
                <img src={backButton} onClick={this.props.goBack} className="back-button"/>
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
                    <h3>Experimental Design</h3>
                    <ul>
                        {
                            currentBlog.materials && currentBlog.materials.map(paragraph => {
                                return <li><p>{paragraph}</p></li>
                            })
                        }                        
                    </ul>
                </div>
                <div className="challenge-card">
                    <h3>Implementation and Changelog</h3>
                    {
                        currentBlog.implementation && currentBlog.implementation.map(paragraph => {
                            return <>
                            <h4>{paragraph.title}</h4>
                            <p>
                                {paragraph.body}
                            </p>
                            </>
                        })
                    }
                </div>
                <Disqus.DiscussionEmbed
                    shortname={disqusShortname}
                    config={disqusConfig}
                />
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
  
