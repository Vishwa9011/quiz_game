import { useState } from "react";
import "./App.css";
import Navbar from "./Admin/Components/Navbar/Navbar";
import Leaderboard from "./Components/Leaderboard/Leaderboard";
import AdminDashboard from "./Admin/Components/Home/Home";
import AdminLogin from "./Admin/Components/Login/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <AdminLogin />
    </div>
  );
}

export default App;
