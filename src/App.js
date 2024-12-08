import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/authenticated/login";
import Register from "./pages/authenticated/register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from "./pages/layout";
function App() {
  
  return (
    <div className="font-sans">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/index" element={<Layout/>} >
          </Route>
        </Routes>
      </Router>
      <ToastContainer/>
    </div>
  );
}

export default App;
