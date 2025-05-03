import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HistoryPage from "./history_page/history_page.jsx";
import Login from "./login_page/login_page.jsx";
import Signup from "./signup_page/signup_page.jsx";
import HomePage from "./home_page/home_page.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login and Signup Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Orders Page */}
        <Route path="/home" element={<HomePage />} />

        {/* History Page */}
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
