import { useState } from "react";
import "./App.css";
import { getUser } from "./hook/me";
import usePost from "./hook/usePost";

function App() {
  const { get, remove, update, create } = usePost();
  const posts = get();

  const createPost = (content, image) => {
    let id = `id-${Math.floor(Math.random() * 10000)}`; // generate id here by Math.random() (please use integer)
    let time = new Date().toDateString(); // generate timestamp here by (new Date().toDateString())
    const user = getUser();
    // create data object according to api document that require 6 key data
    let data = {
      id: id,
      // avatar and author from getUser() (also stored in object type so we can call with [obj.key] template)
      avatar: user.avatar,
      author: user.author,
      time: time,
      content: content,
      image: image,
    };
    create(data);
  };

  return (
    <div id="app">
      <h1>Enter Data</h1>
      <PostContainer createPost={createPost} />
      <FeedSection posts={posts} removeHandler={remove} />
    </div>
  );
}

const PostContainer = (props) => {
  // create props connection to App()
  const createPost = props.createPost;
  // create stateValue and stateMethod for content and image according to mental model
  const [content, setContent] = useState();
  const [image, setImage] = useState();
  // create function to receive content and image from text field according to mental model
  const createPostInPostContainer = () => {
    createPost(content, image);
  };
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
          // use onChange to focus on value input from user
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
        <textarea
          className="image-input"
          placeholder="Enter image's url"
          // use onChange to focus on value input from user
          onChange={(e) => {
            setImage(e.target.value);
          }}
        ></textarea>
      </div>

      <div className="post-actions">
        <button
          className="post-button"
          // use onClick to trigger function
          onClick={() => {
            createPostInPostContainer();
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
};

const FeedSection = ({ posts, removeHandler }) => {
  return (
    <div className="feed">
      {posts.map((post) => (
        <Post
          id={post.id}
          author={post.author}
          avatar={post.avatar}
          time={post.time}
          content={post.content}
          image={post.image}
          removeHandler={removeHandler}
        />
      ))}
    </div>
  );
};

const Post = ({ id, author, avatar, time, content, image, removeHandler }) => {
  return (
    <div className="post">
      <div className="post-header">
        <img className="post-avatar" src={avatar} alt="User 3" />
        <div>
          <div className="post-author">{author}</div>
          <div className="post-time">{time}</div>
        </div>
      </div>
      <div className="post-content">{content}</div>
      <img className="post-image" src={image} alt="Post 3" />
      <button onClick={() => removeHandler(id)}>DELETE</button>
    </div>
  );
};

export default App;
