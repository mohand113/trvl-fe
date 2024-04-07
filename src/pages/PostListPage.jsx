// import { useState, useEffect } from "react";
// import axios from "axios";

// import PostCard from "../components/PostCard";
// import AddPost from "../components/AddPost";

// const API_URL = "http://localhost:5005";

// function PostListPage() {
//   const [posts, setPosts] = useState([]);

//   const getAllPosts = () => {
//     axios
//       .get(`${API_URL}/api/posts`)
//       .then((response) => setPosts(response.data))
//       .catch((error) => console.log(error));
//   };

//   // We set this effect will run only once, after the initial render
//   // by setting the empty dependency array - []
//   useEffect(() => {
//     getAllPosts();
//   }, []);

//   return (
//     <div className="PostListPage">
//       <AddPost refreshPosts={getAllPosts} />

//       {posts.map((post) => (
//         <PostCard key={post._id} {...post} />
//       ))}
//     </div>
//   );
// }

// export default PostListPage;

import { useState, useEffect } from "react";
import axios from "axios";

import PostCard from "../components/PostCard";
import AddPost from "../components/AddPost";
import postsService from "../services/posts.service";
//const API_URL = "http://localhost:5005";
const API_URL = import.meta.env.VITE_SERVER_URL;

function PostListPage() {
  const [posts, setPosts] = useState([]);

  const getAllPosts = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");
   
    // Send the token through the request "Authorization" Headers
    axios
      .get(
      `${API_URL}/api/posts`,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
    postsService.getAllPosts()
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="PostListPage">
      <AddPost refreshPosts={getAllPosts} />

      {posts.map((post) => (
        <PostCard key={post._id} {...post} />
      ))}
    </div>
  );
}

export default PostListPage;