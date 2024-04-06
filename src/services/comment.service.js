import axios from 'axios';
 
class CommentsService {
  constructor() {
    this.api = axios.create({
     // baseURL: import.meta.env.SERVER_URL || 'http://localhost:5005'
      baseURL: import.meta.env.VITE_SERVER_URL
    });
 
    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use(config => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem('authToken');
 
      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }
 
      return config;
    });
  }
 
  // COMMENT /api/comments

  createComment = (postId, requestBody) => {
    return this.api.post(`/api/posts/${postId}/comments`, requestBody);
  };
 
  // GET /api/comments
  getAllcomments = () => {
    return this.api.get('/api/comments');
  };
 
  // GET /api/comments/:id
  getComment = id => {
    return this.api.get(`/api/comments/${id}`);
  };
 


}
 
// Create one instance object
const commentsService = new CommentsService();
 
export default commentsService;