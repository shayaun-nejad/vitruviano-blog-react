import React, { Component } from 'react';

import BlogBlock from './modules/BlogBlock';

import './Blog.css'

class Blog extends Component {
    state = {
        exampleBlogs: [
            {
                category: 'Challenges',
                title: 'Example Title',
                description: '30 days challenge for VR',
                status: 'Ongoing',
                buttonText: 'Read',
                difficulty: 3,
                date: 2141241,
            },
            {
                category: 'Challenges',
                title: 'The Startup Challenge',
                description: '12 Startups in 12 Months',
                status: 'Ongoing',
                buttonText: 'Read',
                difficulty: 5,
                date: 12142414
            },
            {
                category: 'Musings',
                title: 'Why History is Always Right',
                description: 'Ready History',
                status: 'Finished',
                buttonText: 'Read',
                difficulty: 5,
                date: 123123,
            }
        ],
        processedBlogs: [],
        currentCategory: 'All',
    }

    changeSelect = (select) => {
        this.setState({
          currentCategory: select
        })
    }

    allSelect = () => {
        this.changeSelect('All');
    }

    challengesSelect = () => {
        this.changeSelect('Challenges')
    }

    processBlogs = () => {
        let blogs = this.state.exampleBlogs.slice();
        let processedBlogs = [];
        let counter = 0;

        while (blogs.length) {
            let blogBlock = [];
            counter++;

            for (let i = 0; i < 3; i++) {
                let blog = blogs.pop();

                if (blog) {
                    blogBlock.push(blog);
                } else {
                    blogBlock.push({});
                }
            }

            if (counter % 2 === 0) {
                // row
                processedBlogs.push(
                    <BlogBlock blocks={blogBlock}/>
                )
            } else {
                // row - reverse
                processedBlogs.push(
                    <BlogBlock blocks={blogBlock} orientation="reverse" />
                )    
            }

        }

        return processedBlogs;
    }

    render() {
        let all = 'unselected';
        let challenges = 'unselected';
        let musings = 'unselected';
        let miscellaneous = 'unselected';
    
        if (this.state.currentCategory === 'All') {
            all = 'selected';
        } else if (this.state.currentCategory === 'Challenges') {
            challenges = 'selected';
        }

        let processedBlogs = this.processBlogs()
    
    
        return(
            <div className="blog-container">
                <h1> Recent Blog Posts.</h1>
                <div className="blog-categories">
                    <a className={all} onClick={this.allSelect}>All</a>
                    <a className={challenges} onClick={this.challengesSelect}>Challenges</a>
                    <a className={musings}>Musings</a>
                    <a className={miscellaneous}>Miscellaneous</a>
                </div>
                <p className="description-post"> The latest posts on challenges, general musings, and <br/>
                    miscellaneous.
                </p>
                {
                    processedBlogs
                }
            </div>
        )
    }
}

export default Blog;