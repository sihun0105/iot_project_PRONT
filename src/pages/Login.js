import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "../css/login.css";
import swal from "sweetalert";
import { useAppDispatch } from "../store";
import userSlice from "../slice/user";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${
            "http://localhost:2005"
        }/auth/login`,
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
        console.log(response.status)
      if (response.status==200) {
        dispatch(
          userSlice.actions.setUser({
            email: response.data.email,
          })
        );
        navigate("/home");
      } else {
        throw new Error("로그인에 실패했습니다.");
      }
    } catch (error) {
      swal("로그인 오류", error.message, "error");
    }
  };

  return (
    <div className="App" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="login-container">
        <h2>로그인</h2>
        <div className="input-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              className="input-field"
              placeholder="아이디"
            />
            <br />
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="input-field"
              placeholder="비밀번호"
            />
            <br />
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
