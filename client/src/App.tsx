import { useState } from "react";
import "./App.css";
import Navbar from "./Admin/Components/Navbar/Navbar";
import Home from "./Admin/Components/Home/Home";
import Login from "./Admin/Components/Login/Login";
import Register from "./Admin/Components/Register/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
