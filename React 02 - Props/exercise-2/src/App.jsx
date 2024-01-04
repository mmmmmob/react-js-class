import React from "react";
import "./App.css";

function App() {
  return (
    <div id="app">
      <PostContainer />
      <FeedSection />
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

const FeedSection = () => {
  return (
    <div className="feedHome">
      <div className="feed">
        <div className="post">
          <div className="post-header">
            <img
              src="https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_640.png"
              alt="User 1"
              className="post-avatar"
            />
            <div className="post-author">User 1</div>
            <div className="post-time">2 hours ago</div>
          </div>
          <div className="post-content">This is my first post! 🎉</div>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
          alt="Post 1"
        />
        <button>DELETE</button>
        <div className="post">
          <div className="post-header">
            <img
              src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png"
              alt="User 2"
              className="post-avatar"
            />
            <div className="post-author">User 2</div>
            <div className="post-time">4 hours ago</div>
          </div>
          <div className="post-content">
            Enjoying a beautiful day outdoors! ☀️
          </div>
        </div>
        <img
          src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png"
          alt="Post 2"
        />
        <button>DELETE</button>
        <div className="post">
          <div className="post-header">
            <img
              src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png"
              alt="User 3"
              className="post-avatar"
            />
            <div className="post-author">User 3</div>
            <div className="post-time">1 day ago</div>
          </div>
          <div className="post-content">
            Exploring new places and cultures. 🌍✈️
          </div>
        </div>
        <img
          src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm00NTYtMDA3YS5wbmc.png"
          alt="Post 3"
        />
        <button>DELETE</button>
      </div>
    </div>
  );
};

export default App;
