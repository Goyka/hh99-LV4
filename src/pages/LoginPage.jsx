import * as St from "../styles/styles";

export default function LoginPage() {
  return (
    <St.Container>
      <St.Header>
        <img src="img/lycos.webp" alt="img" style={{ width: "300px" }} />
        <St.Title></St.Title>
      </St.Header>
      <St.Body>
        <St.PostWrap>
          <St.InputId type="text" />
          <St.InputPw type="password" />
        </St.PostWrap>
        <St.BtnWrap>
          <St.Button buttontheme="primary">로그인</St.Button>
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
