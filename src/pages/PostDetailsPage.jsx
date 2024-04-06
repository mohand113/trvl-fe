

// export default PostDetailsPage;
import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
// import AddTask from "../components/AddTask";
// import TaskCard from "../components/TaskCard";

const API_URL = "http://localhost:5005";

function PostDetailsPage (props) {
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  const getPost = () => {
    // Retrieve the JWT token from the local storage
    const storedToken = localStorage.getItem('authToken');

    axios
      .get(`${API_URL}/api/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${storedToken}` // Include the authorization token in the request headers
        }
      })
      .then((response) => {
        const onePost = response.data;
        setPost(onePost);
      })
      .catch((error) => console.log(error));
  };

  useEffect(()=> {
    getPost();
  }, [] );

  return (
    <div className="PostDetails">
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </>
      )}

      <div>
        <h1>More details about the trip</h1>
      </div>
      <Link to={`/posts/${postId}/comments`}>
      <button>Add comment</button>
      </Link>

      {/* <AddTask refreshPost={getPost} postId={postId} />          

      { post && post.tasks.map((task) => <TaskCard key={task._id} {...task} /> )}  */}

      <Link to="/posts">
        <button>Back to posts</button>
      </Link>
          
      <Link to={`/posts/edit/${postId}`}>
        <button>Edit Post</button>
      </Link>

    </div>
  );
}

export default PostDetailsPage;
