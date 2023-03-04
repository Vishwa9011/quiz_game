import { useState } from "react";
import "./App.css";
import Navbar from "./Admin/Components/Navbar/Navbar";
import Leaderboard from "./Leaderboard/Leaderboard";
import AdminDashboard from "./Admin/Components/Home/Home";
import Login from "./Admin/Components/Login/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Leaderboard />
    </div>
  );
}

export default App;
