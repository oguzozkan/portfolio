import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background: ${({ lightbg }) =>
    lightbg
      ? `linear-gradient(90deg,
    rgba(220, 214, 156, 0.2) 0%,
    rgba(255, 255, 255, 1) 100%)`
      : `#000  `};
`;

// background: ${({ lightbg }) =>
// lightbg
//   ? `linear-gradient(50deg,
// rgba(220, 214, 156, 0.2) 20%,
// rgba(255, 255, 255, 1) 60%, transparent 100%)`
//   : `linear-gradient(50deg,
// rgba(87, 87, 86, 0.2) 20%,
// rgba(0, 0, 0, 1) 60%, transparent 100%)  `};

// lightbg
//       ? `linear-gradient(90deg,
//     rgba(220, 214, 156, 0.2) 30%,
//     rgba(255, 255, 255, 1) 60%)`
//       : `linear-gradient(90deg,
//         rgba(37, 37, 36, 1) 10%,
//     rgba(10, 10, 10, 1) 100%)  `};

export const FooterWrap = styled.div`
  padding: 24px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
  z-index: 1;
`;
export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;
export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: ${({ lightbg }) => (lightbg ? "#0c0c0c" : "#fff")};

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 16px;
  margin-bottom: 15px;
`;
export const FooterLink = styled(Link)`
  color: ${({ lightbg }) => (lightbg ? "#0c0c0c" : "#fff")};
  text-decoration: none;
  margin-bottom: 0.4rem;
  font-size: 15px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: ${({ lightbg }) => (lightbg ? "#0c0c0c" : "#fff")};
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 0.4rem;
  font-size: 24px;
  align-items: center;
  font-weight: bold;
`;
export const WebRights = styled.small`
  color: ${({ lightbg }) => (lightbg ? "#0c0c0c" : "#fff")};
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;
export const SocialIconLink = styled.a`
  color: ${({ lightbg }) => (lightbg ? "#0c0c0c" : "#fff")};
  font-size: 24px;
`;
