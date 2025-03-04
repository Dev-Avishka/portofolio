import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { parsePostFile } from "./parsePostFile";
import "./styles.css";

const Post = () => {
  const [postContent, setPostContent] = useState(null);
  const location = useLocation();

  const fetchPost = async (filename) => {
    try {
      const response = await fetch(`/posts/${filename+ ".txt"}`);
      const text = await response.text();
      setPostContent(parsePostFile(text));
    } catch (error) {
      alert("Error fetching post:", error);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const postFilename = params.get("postID");
    if (postFilename) {
      fetchPost(postFilename);
    }
  }, [location]);

  if (!postContent) return <div>Loading...</div>;

  return (
    <div className="post-page">
      <h1 className="post-title">{postContent.title}</h1>
      <p className="post-description">{postContent.description}</p>
      <div className="post-content">
        {postContent.content.map((item, index) => {
          if (item.type === "h1") return <h1 key={index}>{item.text}</h1>;
          if (item.type === "h2") return <h2 key={index}>{item.text}</h2>;
          if (item.type === "discalimer") return <p key={index} className="disclaimer">{item.text}</p>;
          if (item.type === "h3") return <h3 key={index}>{item.text}</h3>;
          if (item.type === "image") return <center><img key={index} src={`/posts/images/${item.src}`} alt="Post content" /></center>;
          if (item.type === "line") return <hr key={index} />;
          if (item.type === "center") return <div key={index} className="center-text">{item.text}</div>;
          return <p key={index}>{item.text}</p>;
        })}
      </div>
    </div>
  );
};

export default Post;
