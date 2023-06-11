import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Login from "./pages/Login";
import Home from "./pages/home";
import Register from "./pages/Register";

function App() {
  const userEmail = useSelector((state) => state.user.email);

  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="login" element={<Login />} />
          {userEmail && (
            <Route path="home" element={<Home />} />
          )}
          <Route path="register" element={<Register />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
