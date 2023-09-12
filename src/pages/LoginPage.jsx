import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as St from "../styles/styles";

export default function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onLoginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://3.38.191.164/login", {
        id,
        password,
      });
      console.log("새로운 로그인이 요청되었습니다 ->", response);
      if (response.status === 201) {
        navigate("/main");
      }
    } catch (error) {
      console.error(error);
      alert("서버에 문제가 생겼습니다. 다시 시도해주세요.");
    }
  };

  return (
    <St.Container>
      <St.Header>
        <img src="img/lycos.webp" alt="img" style={{ width: "300px" }} />
        <St.Title></St.Title>
      </St.Header>
      <St.Body>
        <St.PostWrap>
          <St.InputId
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <St.InputPw
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </St.PostWrap>
        <St.BtnWrap>
          <St.Button buttontheme="primary" onClick={onLoginHandler}>
            로그인
          </St.Button>
          <St.Button buttontheme="secondary">회원가입</St.Button>
        </St.BtnWrap>
      </St.Body>
      <St.Footer>
        <br />
        <span>
          Copyright © Hong Mikyeong, Gim Goya ⎯ Login Service / All Rights
          Reserved
        </span>
      </St.Footer>
    </St.Container>
  );
}
