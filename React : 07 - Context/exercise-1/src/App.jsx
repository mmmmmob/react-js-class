// import createContext and useContext
import { createContext, useContext } from "react";
import "./App.css";

// initially create const to store a data inside context with createContext({})
const contextData = createContext({});

function App() {
  return (
    <div id="app">
      <h1>Enter Data</h1>
      <PostContainer />
      {/* use tag <//context variable//.Provider> wrap around component that has to use the data */}
      <contextData.Provider
        // add a value argument with {} and store a data inside
        value={[
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
        ]}
      >
        <FeedSection />
        {/* don't forget it's not a self-closing tag */}
      </contextData.Provider>
    </div>
  );
}

const PostContainer = () => {
  return (
    <div className="post-container">
      <div className="post-header">
        <img className="post-avatar" src="avatar.jpg" alt="Your Avatar" />
        <div className="post-author">You</div>
      </div>
      <div className="post-content">
        <textarea
          className="post-input"
          placeholder="What's on your mind?"
        ></textarea>
      </div>
      <div className="post-actions">
        <button className="post-button">Post</button>
      </div>
    </div>
  );
};

// no need to pass data with props anymore! yay!!
const FeedSection = () => {
  return (
    <div className="feed">
      {/* here the Post component is the children of FeedSection, we already send a context to mother section already so at ln:46 there's no need to put Post component there */}
      <Post />;
    </div>
  );
};

const Post = () => {
  // inside a component you want to use context data, create a variable with function useContext() and put context variable inside parentheses
  const context = useContext(contextData);
  return (
    <div className="post">
      {/* use it as you wish! */}
      {context.map((post) => (
        <div key={post.author} className="post">
          <div className="post-header">
            <img className="post-avatar" src={post.avatar} alt={post.author} />
          </div>
          <div className="post-author">{post.author}</div>
          <div className="post-time">{post.time}</div>
          <div className="post-content">{post.content}</div>
          <img className="post-image" src={post.image} alt="Post 1" />
          <button>DELETE</button>
        </div>
      ))}
    </div>
  );
};

export default App;
