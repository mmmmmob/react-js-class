import React from "react";
import "./App.css";
import usePost from "./hook/usePost";

function App() {
  const { get, remove } = usePost();
  const feedData = get();
  const removePost = (id) => {
    remove(id);
  };
  // should't explicitly call a function before using in a component. instead, make it a function with parameter (with actual api method [ln:8] inside) which retrieve argument when call inside a component [see ln:69].
  return (
    <div id="app">
      <h1>Enter Data</h1>
      <PostContainer />
      <FeedSection feedData={feedData} removePost={removePost} />
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
  const feedData = props.feedData;
  const removePost = props.removePost;
  return (
    <div className="feed">
      <Post feedData={feedData} removePost={removePost} />
    </div>
  );
};

const Post = (props) => {
  const feedData = props.feedData;
  const removePost = props.removePost;
  return (
    <div>
      {feedData.map((post) => {
        return (
          <div className="post" key={post.id}>
            <div className="post-header">
              <img src={post.avatar} alt="User 1" className="post-avatar" />
            </div>
            <div className="post-author">{post.author}</div>
            <div className="post-time">{post.time}</div>
            <div className="post-content">{post.content}</div>
            <img src={post.image} alt="Post 1" className="post-image" />
            <button onClick={() => removePost(post.id)}>DELETE</button>
            {/* here we called [ln:7] function expression which has been passed through props and pass argument from post.id (which got it actual value from get() api method) inside */}
          </div>
        );
      })}
    </div>
  );
};

export default App;
