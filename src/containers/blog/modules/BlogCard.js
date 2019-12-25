import React from 'react';
import './BlogCard.css';
import Rating from '@material-ui/lab/Rating';
import Button from '../../../components/common/Button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
    setBlog,
  } from '../../../modules/blog';



const BlogCard = (props) => {
    if (!props.category) return null;
    console.log(props)
    return (
        <div className="card-container">
            <div className="card-title">
                <p>{props.category}
                <br/>
                <span className="title">{props.title}</span>
                <br/>
                <span className="card-description">{props.description}</span>
                </p>
            </div>
            <div className="card-info">
                <div className="card-details">
                <p className="card-details-info">
                    <span> {props.blog.date} </span>
                    <br/>
                    <span> Status: <span className="card-status">{props.status} </span></span>
                </p>
                <div className="rating-container">
                     <p>Difficulty:  <span><Rating name="read-only" value={props.blog.rating} readOnly /></span></p> 
                </div>
                <Button variant="contained" color="secondary" onClick={() => {
                    props.setBlog(props.blog);
                    }}>Read More</Button>
                </div>
                <div className="card-img">
                    <img src={props.blog.imageUrl} alt="hey" />
                </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = ({ blog }) => ({
    currentBlog: blog,
  })
  

  const mapDispatchToProps = dispatch =>
    bindActionCreators(
      {
        setBlog,
      },
      dispatch
    )
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(BlogCard)
  
