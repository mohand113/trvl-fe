// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from "axios";


// const API_URL = "http://localhost:5005";

// function EditPostPage(props) {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
  
//   const { postId } = useParams();
//   const navigate = useNavigate();
  
//   useEffect(() => {
//     axios
//       .get(`${API_URL}/api/posts/${postId}`)
//       .then((response) => {
//         const onePost = response.data;
//         setTitle(onePost.title);
//         setContent(onePost.content);
//       })
//       .catch((error) => console.log(error));
    
//   }, [postId]);
  

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const requestBody = { title, content };

//     axios
//       .put(`${API_URL}/api/posts/${postId}`, requestBody)
//       .then((response) => {
//         navigate(`/posts/${postId}`)
//       });
//   };
  
  
//   const deletePost = () => {
    
//     axios
//       .delete(`${API_URL}/api/posts/${postId}`)
//       .then(() => {
//         navigate("/posts");
//       })
//       .catch((err) => console.log(err));
//   };  

  
//   return (
//     <div className="EditPostPage">
//       <h3>Edit the Post</h3>

//       <form onSubmit={handleFormSubmit}>
//         <label>Title:</label>
//         <input
//           type="text"
//           name="title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
        
//         <label>content:</label>
//         <textarea
//           name="content"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         />

//         <button type="submit">Update Post</button>
//       </form>

//       <button onClick={deletePost}>Delete Post</button>
//     </div>
//   );
// }

// export default EditPostPage;
import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

const API_URL = "http://localhost:5005";

function EditPostPage(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  const { postId } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    axios
      .get(`${API_URL}/api/posts/${postId}`)
      .then((response) => {
        const onePost = response.data;
        setTitle(onePost.title);
        setContent(onePost.content);
      })
      .catch((error) => console.log(error));
  }, [postId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, content };

    axios
      .put(`${API_URL}/api/posts/${postId}`, requestBody, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`
        }
      })
      .then((response) => {
        navigate(`/posts/${postId}`);
      })
      .catch((error) => console.log(error));
  };
  
  const deletePost = () => {
    axios
      .delete(`${API_URL}/api/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`
        }
      })
      .then(() => {
        navigate("/posts");
      })
      .catch((err) => console.log(err));
  };  

  return (
    <div className="EditPostPage" >
      
      <form onSubmit={handleFormSubmit} className="login-form">
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        </div>
        <div className="form-group">
        <label>content:</label>
        <textarea
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        </div>
        
        <button type="submit">Update Post</button>
        <button onClick={deletePost}>Delete Post</button>
      </form>
     
      
    </div>
  );
}

export default EditPostPage;
