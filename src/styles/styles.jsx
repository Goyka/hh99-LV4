import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* margin: 0;
    padding: 0;
    box-sizing: border-box;  */
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 21px;
  width: 498px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  background-color: transparent;
  margin: 10px 0 20px 0;
`;

export const Title = styled.h4`
  font-weight: 700;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin: 20px 0 0 0;
`;

export const PostWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 270px;
  height: 100px;
  padding: 30px;
  margin: 80px 0 20px 0;
  border-bottom: 3px solid lightgray;
`;

export const Input = styled.input`
  margin: 10px 0 0 0;
  width: 250px;
  height: 55px;
  border-radius: 9px;
  border: 3px solid black;
  font-size: 19px;
`;

export const InputId = styled(Input)`
  background-image: url(https://super.so/icon/dark/log-in.svg);
  background-position: 7px center;
  background-repeat: no-repeat;

  &:focus {
    background-image: none;
    background-position: -10px center;
    text-indent: 0;
  }
`;

export const InputPw = styled(Input)`
  background-image: url(https://super.so/icon/dark/lock.svg);
  background-position: 7px center;
  background-repeat: no-repeat;

  &:focus {
    background-image: none;
    background-position: -10px center;
    text-indent: 0;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 150px 0;
`;

// Button Theme & Button Components
export const theme = {
  primary: css`
    background-color: #153fc9;
    color: white;
  `,
  secondary: css`
    background-color: white;
    color: #153fc9;
    border: 2px solid #153fc9;
  `,
  thirdy: css`
    background-color: #c91515;
    color: white;
  `,
};

export const Button = styled.button`
  margin: 0 3px 0 3px;
  width: 127px;
  height: 41px;
  border: none;
  border-radius: 7px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    filter: brightness(0.95);
  }

  ${({ buttontheme }) => buttontheme === "primary" && theme.primary};
  ${({ buttontheme }) => buttontheme === "secondary" && theme.secondary};
  ${({ buttontheme }) => buttontheme === "thirdy" && theme.thirdy};
`;

export const Footer = styled.footer`
  padding: 21px;
  height: 50px;
  position: relative;
  color: gray;
  font-weight: 700;
  font-size: 13.2px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${(props) => props && props.margin};
`;
