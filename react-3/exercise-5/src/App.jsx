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
    const data = {
      id: id,
      author: user.author,
      avatar: user.avatar,
      time: time,
      content: content,
      image: image,
    };
    create(data);
  };

  // create updatePost fn that return all required data for update() api without taking the same author and avatar key of that post (maybe next steps?)
  const updatePost = (idNew, content, image) => {
    // take the same ID of the post that user want to edit
    let id = idNew;
    let time = new Date().toDateString(); //
    const user = getUser();
    const data = {
      id: id,
      author: user.author,
      avatar: user.avatar,
      time: time,
      content: content,
      image: image,
    };
    update(data);
  };

  return (
    <div id="app">
      <h1>Enter Data</h1>
      {/* create props for updatePost */}
      <PostContainer create={createPost} update={updatePost} />
      <FeedSection posts={posts} removeHandler={remove} />
    </div>
  );
}

const PostContainer = ({ create, update }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  // new state watcher for ID
  const [idNew, setId] = useState("");

  const createPostInPostContainer = () => {
    create(content, image);
  };

  // create updatePost fn that take idNew and other data from field
  const updatePostInPostContainer = () => {
    update(idNew, content, image);
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
          placeholder="Your post ID *only for update*"
          // set newID from user input
          onChange={(ev) => setId(ev.target.value)}
        ></textarea>
        <textarea
          className="post-input"
          placeholder="What's on your mind?"
          onChange={(ev) => setContent(ev.target.value)}
        ></textarea>
        <input
          className="post-input"
          type="text"
          placeholder="image"
          onChange={(ev) => setImage(ev.target.value)}
        />
      </div>
      <div className="post-actions">
        <button className="post-button" onClick={createPostInPostContainer}>
          Post
        </button>
        {/* new button for update */}
        <button className="update-button" onClick={updatePostInPostContainer}>
          Update
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
          {/* display ID for user edit */}
          <div className="post-id">{id}</div>
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
