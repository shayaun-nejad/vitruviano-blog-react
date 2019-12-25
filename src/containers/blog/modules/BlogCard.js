import React from 'react';

import './BlogCard.css';
import Rating from '@material-ui/lab/Rating';
import Button from '../../../components/common/Button';



const BlogCard = (props) => {
    if (!props.category) return null
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
                    <span> 12/20/1995 </span>
                    <br/>
                    <span> Status: <span className="card-status">{props.status} </span></span>
                </p>
                <div className="rating-container">
                     <p>Difficulty:  <span><Rating name="read-only" value={3} readOnly /></span></p> 
                </div>
                <Button variant="contained" color="secondary">Read More</Button>
                </div>
                <div className="card-img">
                    <img src='./logo192.png' alt="hey" />
                </div>
            </div>
            
        </div>
    )
}

export default BlogCard;

