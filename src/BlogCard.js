import React from 'react';

const BlogCard = (props) => {
    return (
        <div className="BlogCard">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default BlogCard;