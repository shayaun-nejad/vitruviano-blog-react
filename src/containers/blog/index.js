import React, { Component } from 'react';

import BlogBlock from './modules/BlogBlock';  

import './Blog.css'

class Blog extends Component {
    state = {
        exampleBlogs: [
            {
                category: 'Challenges',
                imageUrl: 'https://vitruviano-blog-pictures.s3-us-west-2.amazonaws.com/pictures/oculus-rift.png',
                title: 'The 30 Day Oculus Quest Weight Loss Challenge',
                description: 'I Used Creed & Beat Saber over the span of a Month to Lose Weight. Let’s see what happens.',
                status: 'Ongoing',
                buttonText: 'Read',
                rating: 1,
                date: '12/24/2019',
                daysLeft: 30,
                body: [`With the release of the Oculus Quest, a lot of interesting use cases come as a result. The biggest in my opinion is streamlining cardio. Since the beginning of my existence, I have HATED cardio. I am fine with lifting but when it comes to running on a treadmill, it’s far too tedious for me to get into. This is a shame of course, because of all the healthy functions that cardio affords. Oculus Quest seems to release as a potential solution for this problem. What if you could trick your brain into thinking it was actually in a high-stakes boxing match ? Then you would be compelled to push past your limits to achieve a certain goal.`,
                `I remember growing up I would push 13-14 hours a day to beat games like Assassin’s Creed. Let’s see if we can channel some of that positive (negative??) energy into weight loss.`,
                `I’ll keep a daily log of weight, amount of activity, and which games played. At the beginning of the month, I’ll take a picture of my weight before the challenge and also one after.`,
                `Diet is a huge component of weight loss. So I’ll keep my diet constant. For good measure, I’ll log my diet and do a follow-up where I keep the same diet for a month after but with no Oculus exercise. I’ll then calculate the rate of weight loss with the Quest vs. without the Quest, and we can see for certain whether or not the Oculus is a good option for weight loss.`
            ],

            },

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

    musingsSelect = () => {
        this.changeSelect('Musings')
    }

    miscellaneousSelect = () => {
        this.changeSelect('Miscellaneous')
    }

    processBlogs = () => {
        let blogs = this.state.exampleBlogs.slice();

        if (this.state.currentCategory !== 'All') {
            blogs = blogs.filter(blog => blog.category === this.state.currentCategory)
        }

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
        } else if (this.state.currentCategory === 'Musings') {
            musings = 'selected';
        } else if (this.state.currentCategory === 'Miscellaneous') {
            miscellaneous = 'selected';
        }

        let processedBlogs = this.processBlogs()
    
    
        return(
            <div className="blog-container">
                <h1> Recent Blog Posts.</h1>
                <div className="blog-categories">
                    <a className={all} onClick={this.allSelect}>All</a>
                    <a className={challenges} onClick={this.challengesSelect}>Challenges</a>
                    <a className={musings} onClick={this.musingsSelect}>Musings</a>
                    <a className={miscellaneous} onClick={this.miscellaneousSelect}>Miscellaneous</a>
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