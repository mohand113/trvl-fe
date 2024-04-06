import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PostListPage from "./pages/PostListPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import EditPostPage from "./pages/EditPostPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import AddComment from "./components/AddComment";

function App() {
  
  return (
    <div className="App">
      <Navbar />

      <Routes>      
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/posts" element={<PostListPage />} />
        <Route exact path="/posts/:postId" element={<PostDetailsPage />} />
        <Route exact path="/posts/edit/:postId" element={<EditPostPage />} />  
        <Route exact path="/signup" element={<SignupPage/>}/> 
        <Route path="/login" element={ <LoginPage /> } />
        <Route exact path="/posts/:postId/comments" element={<AddComment />} />

      </Routes>
    </div>
  );
}

export default App;
