import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function PostCard ( { yourcomment, _id } ) {
  
  return (
    <div className="CommentCard card">
      <Link to={`/comments/${_id}`}>
        <h3>{yourcomment}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{yourcomment} </p>
    </div>
  );
}

export default CommentCard;