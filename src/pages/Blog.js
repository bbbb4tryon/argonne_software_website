import React, { useState, useEffect } from "react";
import BlogEditor from "../components/BlogEditor";
import BlogList from "../components/BlogList";
import Footer from "../components/Footer";

const BlogEntries = () => {
    const [blogEntries, setBlogEntries] = useState(() => {
        const savedBlogs = localStorage.getItem("blogEntries");
        return savedBlogs ? JSON.parse(savedBlogs) : [];
    });

    const addBlogEntry = (newEntry) => {
        const updatedEntries = [...blogEntries, newEntry];
        setBlogEntries(updatedEntries);
        localStorage.setItem("blogEntries", JSON.stringify(updatedEntries));
    };

    return (
        <div>
            <BlogEditor onAddBlog={addBlogEntry} />
            <BlogList blogs={blogEntries} />
            <br />
            <Footer />
        </div>
    );
};

export default BlogEntries;
