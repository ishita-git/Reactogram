import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import PostOverview from "./pages/PostOverview";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-bg">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/posts" element={<PostOverview />} />
          <Route exact path="/myprofile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
