import React from "react";

const BlogCard = ({ title, content }) => (
    <div className="blog-card">
        <h1>{title}</h1>
        <p>{content}</p>
        <button className="cta">Read More</button>
    </div>
);

export default BlogCard;