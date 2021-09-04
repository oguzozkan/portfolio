import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  border: solid 1px #fff;
  background: ${({ lightbg }) =>
    lightbg
      ? `linear-gradient(50deg,
    rgba(230, 214, 156, 0.2) 20%,
    rgba(190, 197, 199, 1) 100%)`
      : `linear-gradient(90deg, rgba(255,238,187,1) 0%, rgba(87,87,86,0.15843840954350494) 0%, rgba(0,0,0,0.13238798937543772) 100%) `};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ lightbg }) => (lightbg ? "#010606" : "#fff")};
  font-size: ${({ fontbig }) => (fontbig ? "20px " : "16px")};
  outline: none;
  z-index: 3;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    border-style: inset;

    color: ${({ lightbg }) => (lightbg ? "#010606" : "#fff")};
    border-color: rgba(250, 250, 250, 0.5) transparent transparent;
  }
`;
