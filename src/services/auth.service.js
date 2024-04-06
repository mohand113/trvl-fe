import axios from 'axios';
 
class AuthService {
  constructor() {
    // Create a new instance of axios with a custom configuration
    this.api = axios.create({
      // baseURL: import.meta.env.REACT_APP_API_URL,
        baseURL: import.meta.env.VITE_REACT_APP_API_URL
      // We set our API's base URL so that all requests use the same base URL
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
 
  login = requestBody => {
    return this.api.post('/auth/login', requestBody);

  };
 
  signup = requestBody => {
    return this.api.post('/auth/signup', requestBody);

  };


  verify = () => {
    return this.api.get('/auth/verify');

  };
}
 
// Create one instance object
const authService = new AuthService();
 
export default authService;