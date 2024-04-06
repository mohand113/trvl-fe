import axios from 'axios';
 
class PostsService {
  constructor() {
    this.api = axios.create({
     baseURL:import.meta.env.VITE_SERVER_URL
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
 
  // POST /api/posts
  createPost = requestBody => {
    return this.api.post('/api/posts', requestBody);
  };
 
  // GET /api/posts
  getAllPosts = () => {
    return this.api.get('/api/posts');
  };
 
  // GET /api/posts/:id
  getPost = id => {
    return this.api.get(`/api/posts/${id}`);
  };
 
  // PUT /api/posts/:id
  updatePost = (id, requestBody) => {
    return this.api.put(`/api/posts/${id}`, requestBody);
  };
 
  // DELETE /api/posts/:id
  deletePost = id => {
    return this.api.delete(`/api/posts/${id}`);
  };
}
 
// Create one instance object
const postsService = new PostsService();
 
export default postsService;