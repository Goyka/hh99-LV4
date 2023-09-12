import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as St from "../styles/styles";

export default function JoinPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const navigate = useNavigate();

  const idHandler = (e) => {
    setId(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const checkPasswordHandler = (e) => {
    setCheckPassword(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (password !== checkPassword) {
      alert("비밀번호와 비밀번호 확인이 서로 다릅니다.");
      return;
    }
    try {
      const response = await axios.post("http://3.38.191.164/register", {
        id,
        password,
      });
      console.log("새로운 회원가입이 발생하였습니다 ->", response);
      if (response.status === 201) {
        navigate("/");
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
      <St.Col margin="10px 0 20px">
        <div>아이디</div>
        <St.Input type="text" onChange={idHandler} value={id} />
      </St.Col>
      <St.Col margin="10px 0 20px">
        <div>비밀번호</div>
        <St.Input type="password" onChange={passwordHandler} value={password} />
      </St.Col>
      <St.Col margin="10px 0 40px">
        <div>비밀번호 재확인</div>
        <St.Input
          type="password"
          onChange={checkPasswordHandler}
          value={checkPassword}
        />
      </St.Col>
      <div>
        <St.Button buttontheme="secondary" onClick={onSubmitHandler}>
          회원가입
        </St.Button>
      </div>
    </St.Container>
  );
}
