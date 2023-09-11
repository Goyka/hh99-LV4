import * as St from "../styles/styles";

export default function JoinPage() {
  return (
    <St.Container>
      <St.Header>
        <img src="img/lycos.webp" alt="img" style={{ width: "300px" }} />
        <St.Title></St.Title>
      </St.Header>
      <St.Col margin="10px 0 20px">
        <div>아이디</div>
        <St.Input />
      </St.Col>
      <St.Col margin="10px 0 20px">
        <div>비밀번호</div>
        <St.Input />
      </St.Col>
      <St.Col margin="10px 0 40px">
        <div>비밀번호 재확인</div>
        <St.Input />
      </St.Col>
      <div>
        <St.Button buttontheme="secondary">회원가입</St.Button>
      </div>
    </St.Container>
  );
}
