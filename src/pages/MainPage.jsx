import * as St from "../styles/styles";

export default function MainPage() {
  return (
    <St.Container>
      <St.Nav>
        <img
          src="img/lycos.webp"
          alt="img"
          style={{ width: "175px", height: "41px" }}
        />
        <St.Button buttontheme="primary">로그아웃</St.Button>
      </St.Nav>
    </St.Container>
  );
}
