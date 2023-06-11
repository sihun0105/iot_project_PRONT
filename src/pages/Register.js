import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const FormContainer = styled.div`
  width: 360px;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: #9687ed;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2005/auth/join', {
        email:email,
        password:password,
      });

      if (response.status === 200) {
        swal('회원가입 성공', '회원가입이 완료되었습니다.', 'success');
        navigate('/login');
      } else {
        throw new Error('회원가입에 실패했습니다.');
      }
    } catch (error) {
      swal('회원가입 오류', error.message, 'error');
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>회원가입</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="아이디"
          />
          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="비밀번호"
          />
          <Button type="submit">가입하기</Button>
        </form>
      </FormContainer>
    </Container>
  );
}
