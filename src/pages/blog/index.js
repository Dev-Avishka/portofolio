import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const BlogIndex = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/posts/posts.json");
      const files = await response.json();
      const postDetails = await Promise.all(
        files.map(async ({ filename }) => {
          const fileResponse = await fetch(`/posts/${filename}`);
          const text = await fileResponse.text();
          const [titleLine, descriptionLine] = text.split("\n");
          const title = titleLine.startsWith("$") ? titleLine.slice(1).trim() : "Untitled";
          const description = descriptionLine.startsWith("%") ? descriptionLine.slice(1).trim() : "No description";
          return { title, description, filename };
        })
      );
      setPosts(postDetails);
    } catch (error) {
      alert("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  

  return (
    <div className="blog-index">
      <h1 className="blog-title">Blog</h1>
      <div className="post-list">
        {posts.map((post, index) => (
          <Link
            key={index}
            to={`/blog/post?postID=${post.filename.replace(".txt", "")}`}
            className="post-box"
          >

            <h2 className="post-title1">{post.title}</h2>
            <p className="post-description1">{post.description}</p>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default BlogIndex;
