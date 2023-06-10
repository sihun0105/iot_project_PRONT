import { BrowserRouter, Routes, Route, redirect, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/home";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
          <>
            <Route path="login" element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="/" element={<Navigate to="/login" />}/>
            <Route path="*" element={<Navigate to="/login" />}/>
          </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
