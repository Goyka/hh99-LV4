import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 498px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.header`
  background-color: transparent;
  padding: 21px;
`;

export const Title = styled.h4`
  font-weight: 700;
`;

export const Body = styled.div`
  background-color: #c4fbff;
  padding: 21px;
`;

// Button Theme & Button Components
export const theme = {
  primary: css`
    background-color: #0059ff;
    color: white;
  `,
  secondary: css`
    background-color: white;
    color: #0059ff;
    border: 2px solid #0059ff;
  `,
};

export const Button = styled.button`
  margin: 0 3px 0 3px;
  width: 131px;
  height: 41px;
  border: none;
  border-radius: 7px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  ${({ buttonTheme }) => buttonTheme === "primary" && theme.primary};
  ${({ buttonTheme }) => buttonTheme === "secondary" && theme.secondary};
`;

export const Footer = styled.footer`
  background-color: aquamarine;
  padding: 21px;
  height: 50px;
  position: relative;
`;
