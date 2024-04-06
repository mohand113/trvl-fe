

import { useState, useEffect } from "react";
import axios from "axios";

import AddComment from "../components/AddComment";
import CommentCard from "../components/CommentCard";
import commentsService from "../services/comments.service";
import { useParams } from "react-router-dom";
const API_URL = "http://localhost:5005";

function CommentListPage() {
  const [comments, setComments] = useState([]);

  const getAllComments = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");
   
    // Send the token through the request "Authorization" Headers
    axios
      .get(
      `${API_URL}/api/comments`,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
    commentsService.getAllComments()
      .then((response) => setComments(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllComments();
  }, []);

  return (
    <div className="CommentListPage">
      <AddComment refreshPosts={getAllComments} />

      {comments.map((post) => (
        <CommentCard key={comment._id} {...comment} />
      ))}
    </div>
  );
}

export default CommentListPage;