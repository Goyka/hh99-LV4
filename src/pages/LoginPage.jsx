import * as St from "../styles/styles";

export default function LoginPage() {
  return (
    <St.Container>
      <St.Header>
        <img src="img/lycos.png" />
        <St.Title>Test</St.Title>
      </St.Header>
      <St.Body>
        <></>
        <St.Button buttonTheme="primary">로그인</St.Button>
        <St.Button buttonTheme="secondary">회원가입</St.Button>
      </St.Body>
      <St.Footer>
        <span>
          Copyright © Hong Mikyeong, Gim Goya ⎯ Login Service / All Rights
          Reserved
        </span>
      </St.Footer>
    </St.Container>
  );
}
