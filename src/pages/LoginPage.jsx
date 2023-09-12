import axios from "axios";
import { setToken } from "../util/token";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as St from "../styles/styles";

export default function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const checkUser = async () => {
    try {
      const response = await axios.get("http://3.38.191.164/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response.data.message, response);
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
    }
  };

  const onLoginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://3.38.191.164/login", {
        id,
        password,
      });
      console.log(response.statusText, response);
      // console.log(response.config.data);

      if (response.status === 201) {
        setToken(response.data.token);
        checkUser();
        navigate("/main");
      }
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
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
          <St.Button
            buttontheme="secondary"
            onClick={() => {
              navigate("/join");
            }}
          >
            회원가입
          </St.Button>
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
