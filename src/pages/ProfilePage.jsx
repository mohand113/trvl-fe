// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_URL = "http://localhost:5005";

// const ProfilePage = () => {
//   const [userData, setUserData] = useState(null);
//   const [postContent, setPostContent] = useState('');
//   const [error, setError] = useState(null);
  
//   useEffect(() => {
//     // Fetch user's information including name
//     fetchUserData();
//   }, []);

//   const fetchUserData = async () => {
//     try {
//       // Make a request to fetch user's data from the backend API
//       const response = await axios.get(`${API_URL}/profile`); // 
//       setUserData(response.data);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const handlePostSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Make a request to create a new post
//       const postData = { content: postContent };
//       await axios.post(`${API_URL}/posts`, postData); // Replace '/api/posts' with your actual API endpoint for creating posts
//       // Clear post content after submitting
//       setPostContent('');
//       // Optionally, fetch updated user data after creating the post
//       fetchUserData();
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div>
//       {error && <div>Error: {error}</div>}
//       {userData && (
//         <div>
//           <h1>Welcome, {userData.name}</h1>
          
//           <h2>Create New Post</h2>
//           <form onSubmit={handlePostSubmit}>
//             <textarea value={postContent} onChange={(e) => setPostContent(e.target.value)} />
//             <button type="submit">Post</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfilePage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = "http://localhost:5005";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [postContent, setPostContent] = useState('');
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Fetch user's information including name
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      // Make a request to fetch user's data from the backend API
      const response = await axios.get(`${API_URL}/profile`);
      setUserData(response.data);
      console.log("User data fetched successfully:", response.data); // Log the fetched user data
    } catch (error) {
      setError(error.message);
      console.error("Error fetching user data:", error); // Log the error if fetching fails
    }
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a request to create a new post
      const postData = { content: postContent };
      await axios.post(`${API_URL}/posts`, postData); // Replace '/api/posts' with your actual API endpoint for creating posts
      // Clear post content after submitting
      setPostContent('');
      // Optionally, fetch updated user data after creating the post
      fetchUserData();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {error && <div>Error: {error}</div>}
      {userData && (
        <div>
          <h1>Welcome, {userData.name}</h1>
          
          <h2>Create New Post</h2>
          <form onSubmit={handlePostSubmit}>
            <textarea value={postContent} onChange={(e) => setPostContent(e.target.value)} />
            <button type="submit">Post</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
