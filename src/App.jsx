
import React from "react";
import {Route,Routes} from 'react-router-dom'
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
function App() {
  // DO NOT CHANGE/MODIFY this app-structure here
  return (
    <div data-testid="meetup-app">
      <Routes>
      `   <Route path="/" element={<Dashboard />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
