import React, { useState } from "react";
import styles from "./BlogEditor.module.css"

const BlogEditor = ({ onAddBlog }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleAddBlog = () => {
        if (title && content) {
            onAddBlog({ title, content });
            setTitle("");
            setContent("");
        } else {
            alert("Please fill in both the title and content fields.");
        }
    };

    return (
        <div className={styles.editorContainer}>
            <h2>Create New Blog</h2>
            <input
                type="text"
                placeholder="Blog Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Blog Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button onClick={handleAddBlog}>Add Blog</button>
        </div>
    );
};

export default BlogEditor;
