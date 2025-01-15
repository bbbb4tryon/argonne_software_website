import React from "react";
import BlogCard from "./BlogCard";

const BlogList = ({ blogEntries }) => (
    <div className="blog-list">
        {blogEntries.map((blogEntry, index) => (
            <BlogCard key={index} title={blogEntry.title} content={blogEntry.content} />
        ))}

    </div>
)

export default BlogList;