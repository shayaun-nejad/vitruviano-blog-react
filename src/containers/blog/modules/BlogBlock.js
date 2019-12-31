import React, { PureComponent } from 'react';

import classNames from 'classnames';

import BlogCard from './BlogCard';

const BlogBlock = (props) => {
    let blogBlockContainer = classNames(props.orientation, 'blog-block');
    let blocks = props.blocks

    return(
        <div className={blogBlockContainer}>
            <div className="blog-block-single">
                <BlogCard 
                        category={blocks[0].category}
                        title={blocks[0].title} 
                        description={blocks[0].description}
                        status={blocks[0].status}
                        blog={blocks[0]}

                    />
            </div>
            <div className="blog-block-double">
                 <BlogCard 
                        category={blocks[1].category}
                        title={blocks[1].title} 
                        description={blocks[1].description}
                        status={blocks[1].status}
                        blog={blocks[1]}
                    />
                    <BlogCard 
                        category={blocks[2].category}
                        title={blocks[2].title} 
                        description={blocks[2].description}
                        status={blocks[2].status}
                        blog={blocks[2]}
                    />
            </div>
        </div>
    )

}

export default BlogBlock;