import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/authenticated/login";
import Register from "./pages/authenticated/register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./pages/layout";
import NavBar from "./pages/layout/navbar";

function App() {
  return (
    <div className="font-sans">
      <Router>
        <NavBarWrapper />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/index" element={<Layout />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

// Component to handle conditional rendering of NavBar
const NavBarWrapper = () => {
  const location = useLocation();

  // Hide NavBar on login and register pages
  if (location.pathname === "/" || location.pathname === "/register") {
    return null; // Do not render NavBar for login or register pages
  }

  return <NavBar />; // Render NavBar for all other routes
};

export default App;
