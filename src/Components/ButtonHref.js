import styled from "styled-components";

export const Button = styled.div`
  border-radius: 50px;
  z-index: 3;
  border: solid 1px #fff;
  background: ${({ lightbg }) =>
    lightbg
      ? `linear-gradient(50deg,
    rgba(230, 214, 156, 0.2) 20%,
    rgba(190, 197, 199, 1) 100%)`
      : `linear-gradient(50deg,
    rgba(87, 87, 86, 0.2) 20%,
    rgba(187, 185, 190, 0,2232221) 100%)  `};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ lightbg }) => (lightbg ? "#010606" : "#fff")};
  font-size: ${({ fontbig }) => (fontbig ? "20px " : "16px")};
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    border-style: inset;
    border-color: rgba(250, 250, 250, 0.4) transparent transparent;
  }
`;
