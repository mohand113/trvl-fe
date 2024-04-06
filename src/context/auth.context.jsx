import React, { useState, useEffect } from "react";
import axios from "axios";
import authService from "../services/auth.service";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URI,
});

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const storeToken = (token) => {
    localStorage.setItem('authToken', token);
  };

  const authenticateUser = () => {
    const storedToken = localStorage.getItem('authToken');

    if (storedToken) {
      authService.verify()
        .then((response) => {
          const user = response.data;
          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(user);
        })
        .catch((error) => {
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
        });
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  const logOutUser = () => {
    removeToken();
    setIsLoggedIn(false);
    setUser(null);
  };

  useEffect(() => {
    authenticateUser();
  }, []);
// // Fetch user's profile after login
// useEffect(() => {
//   if (isLoggedIn && user) {
//     // Make a request to fetch the user's profile using the stored user data or user ID
//     // Replace 'fetchUserProfile' with the actual function to fetch the user's profile
//     fetchUserProfile();
//   }
// }, [isLoggedIn, user]);

// const fetchUserProfile = () => {
//   // Example code to fetch user's profile
//   // Replace 'api.get' with the actual endpoint to fetch user's profile data
//   api.get('/profile')
//     .then((response) => {
//       // Set user profile data in the state
//       setUser(response.data);
//     })
//     .catch((error) => {
//       // Handle error
//       console.error('Error fetching user profile:', error);
//     });
// };

  return (
    <AuthContext.Provider value={{  isLoggedIn, isLoading, user, storeToken, authenticateUser, logOutUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
