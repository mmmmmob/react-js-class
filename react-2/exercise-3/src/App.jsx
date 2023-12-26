import "./App.css";
import usePost from "./hook/usePost";

function App() {
  const { get, remove } = usePost();
  const feedData = get();
  return (
    <div id="app">
      <h1>Enter Data</h1>
      <PostContainer />
      <FeedSection feedData={feedData} />
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

const FeedSection = ({ feedData }) => {
  return (
    <div className="feed">
      <Post newData={feedData} />
    </div>
  );
};

const Post = ({ newData }) => {
  return (
    <div>
      {newData.map((post) => {
        return (
          <div className="post">
            <div className="post-header">
              <img src={post.avatar} alt="User 1" className="post-avatar" />
            </div>
            <div className="post-author">{post.author}</div>
            <div className="post-time">{post.time}</div>
            <div className="post-content">{post.content}</div>
            <img src={post.image} alt="Post 1" className="post-image" />
            <div className="post-id">{post.id}</div>
            <button>DELETE</button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
