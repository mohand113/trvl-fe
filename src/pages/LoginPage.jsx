// // src/pages/LoginPage.jsx

// import { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// const API_URL = "http://localhost:5005";


// function LoginPage(props) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState(undefined);
  
//   const navigate = useNavigate();

//   const handleEmail = (e) => setEmail(e.target.value);
//   const handlePassword = (e) => setPassword(e.target.value);

//   //added by me to refresh the page after login
//   const refreshPage = () => {
//     window.location.reload();
//   };
//   //end
//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     const requestBody = { email, password };
 
//     axios.post(`${API_URL}/auth/login`, requestBody)
//     // authService.login(requestBody)
//       .then((response) => {
//       // Request to the server's endpoint `/auth/login` returns a response
//       // with the JWT string ->  response.data.authToken
//         console.log('JWT token',response.data.authToken); 
//         // storeToken() // this will store the token in localStorage  , remove the (response.data.authToken )
//         localStorage.setItem('authToken', response.data.authToken);
        
      
//         // authenticateUser() // update the auth state variables accordingly
//         navigate('/');  
//         refreshPage();                            // <== ADD   
//       })
//       .catch((error) => {
//         const errorDescription = error.response.data.message;
//         setErrorMessage(errorDescription);
//       });
//   };

  
  
//   return (
//     <div className="LoginPage">
//       <h1>Login</h1>

//       <form onSubmit={handleLoginSubmit} >
//         <label>Email:</label>
//         <input 
//           type="email"
//           name="email"
//           value={email}
//           onChange={handleEmail}
//         />

//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           value={password}
//           onChange={handlePassword}
//         />

//         <button type="submit">Login</button>
//       </form>
//       { errorMessage && <p className="error-message">{errorMessage}</p> }

//       <p>Don't have an account yet?</p>
//       <Link to={"/signup"}> Sign Up</Link>
//     </div>
//   )
// }

// export default LoginPage;
// src/pages/LoginPage.jsx

import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

//const API_URL = "http://localhost:5005";
const API_URL = import.meta.env.VITE_SERVER_URL;


function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  
  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  //added by me to refresh the page after login
  const refreshPage = () => {
    window.location.reload();
  };
  //end
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };
 
    axios.post(`${API_URL}/auth/login`, requestBody)
    // authService.login(requestBody)
      .then((response) => {
      // Request to the server's endpoint `/auth/login` returns a response
      // with the JWT string ->  response.data.authToken
        console.log('JWT token',response.data.authToken); 
        // storeToken() // this will store the token in localStorage  , remove the (response.data.authToken )
        localStorage.setItem('authToken', response.data.authToken);
        
      
        // authenticateUser() // update the auth state variables accordingly
        navigate('/');  
        refreshPage();                            // <== ADD   
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  
  
  return (
    <div className="LoginPage">
      <h1>Login</h1>

      <form onSubmit={handleLoginSubmit}className="login-form">
      <div className="form-group">
        <label>Email:</label>
        <input 
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
        />
        </div>
        <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        </div>
        <button type="submit">Login</button>
      </form>
      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <p>Don't have an account yet?</p>
      <Link to={"/signup"}> Sign Up</Link>
    </div>
  )
}

export default LoginPage;
