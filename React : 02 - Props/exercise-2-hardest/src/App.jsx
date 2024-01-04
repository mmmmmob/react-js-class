import React from "react";
import "./App.css";

function App() {
  const posts = [
    {
      author: "User 1",
      avatar:
        "https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_640.png",
      time: "2 hours ago",
      content: "This is my first post! 🎉",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
    },
    {
      author: "User 2",
      avatar:
        "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png",
      time: "4 hours ago",
      content: "Enjoying a beautiful day outdoors! ☀️",
      image:
        "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png",
    },
    {
      author: "User 3",
      avatar:
        "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png",
      time: "1 day ago",
      content: "Exploring new places and cultures. 🌍✈️",
      image:
        "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png",
    },
  ];

  return (
    <div id="app">
      <h1>Enter Data</h1>
      <PostContainer />
      <FeedSection feedData={posts} />
    </div>
  );
}

const PostContainer = () => {
  return (
    <div className="post-container">
      <div className="post-header">
        <img
          src="../html/avatar.jpg"
          alt="Your Avatar"
          className="post-avatar"
        />
        <div className="post-author">You</div>
      </div>
      <div className="post-content">
        <textarea
          className="post-input"
          placeholder="What's on your mind?"
        ></textarea>
      </div>
      <div className="post-action">
        <button className="post-button">Post</button>
      </div>
    </div>
  );
};

const FeedSection = (props) => {
  const postData = props.feedData;
  return (
    <div className="feed">
      <Post newData={postData} />
    </div>
  );
};

const Post = (props) => {
  const data = props.newData;
  return (
    <div>
      {data.map((post) => {
        return (
          <div className="post">
            <div className="post-header">
              <img src={post.avatar} alt="User 1" className="post-avatar" />
            </div>
            <div className="post-author">{post.author}</div>
            <div className="post-time">{post.time}</div>
            <div className="post-content">{post.content}</div>
            <img src={post.image} alt="Post 1" className="post-image" />
            <button>DELETE</button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
