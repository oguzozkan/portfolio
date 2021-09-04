import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
export const PortfolioContainer = styled.div`
  background: ${({ lightbg }) =>
    lightbg
      ? `linear-gradient(90deg,
    rgba(220, 214, 156, 0.2) 0%,
    rgba(255, 255, 255, 1) 100%)`
      : `#000  `};
  padding-bottom: 250px;
  @media screen and (max-width: 768px) {
    padding: 40px 0;
  }
`;
export const PortfolioWrap = styled.div`
  display: flex;
  padding-top: 160px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const PortfolioCart = styled.div`
  width: 270px;
  height: 400px;
  margin: 12px;
  border-radius: 15px;
  border-color: rgba(220, 220, 220, 0.5) transparent transparent;
  opacity: 0.8;
  border: 3px inset;

  background: ${({ lightbg }) =>
    lightbg
      ? `linear-gradient(90deg,
    rgba(220, 214, 156, 0.6) 0%,
    rgba(240, 225, 255, 1) 100%)`
      : `#000  `};

  &:hover {
    cursor: pointer;

    background-color: ${({ lightbg }) =>
      lightbg
        ? "burlywood"
        : `linear-gradient(90deg, rgba(255,238,187,0.3144608185070903) 0%, rgba(207,207,207,0.5413515748096114) 100%)`};
    transform: scale(1.04);
    transition: all 0.4s ease;
    opacity: 1;
  }
`;

export const ImgWrap = styled.div`
  height: 160px;
  margin-bottom: 15px;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 10px;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 15px 15px 15px 15px;
  opacity: 0.7;
  display: flex;
`;

export const ImgIcon = styled.div`
  opacity: 0.7;
  display: flex;
  color: ${({ lightbg }) => (lightbg ? "#000" : "#fff")};
  font-size: 250px;
`;

export const PortfolioH1 = styled.h1`
  padding: 12px;
  display: block;
  text-align: center;

  margin-top: 85px;
  font-size: 48px;
  line-height: 1.2;
  font-weight: 300;
  color: #fff;
`;

export const PortfolioP = styled.p`
  padding: 0px;
  display: block;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-align: center;
  color: #fff;
`;

export const Nav = styled.nav`
  background: ${({ scrolNAvigation, lightbg }) =>
    scrolNAvigation
      ? lightbg
        ? `linear-gradient(90deg,
  rgba(220, 214, 156, 0.2) 0%,
  rgba(255, 255, 255, 1) 100%)`
        : "#0c0c0c"
      : "transparent"};

  height: 80px;
  display: flex;
  margin-top: -80px;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8 all case;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
export const NavLogo = styled(LinkR)`
  color: ${({ lightbg }) => (lightbg ? "#0c0c0c" : "#fff")};
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;
export const MobileIcon2 = styled.div`
  color: ${({ lightbg }) =>
    lightbg
      ? `#000`
      : `linear-gradient(90deg,
  rgba(220, 214, 156, 0.2) 0%,
  rgba(255, 255, 255, 1) 100%)`};
  border-radius: 50px;

  white-space: nowrap;
  padding: 10px 20px;
  margin-top: 10px;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    font-size: 24px;
  }
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    margin-top: -5px;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: ${({ lightbg }) => (lightbg ? "#0c0c0c" : "#fff")};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1 rem;
  height: 100%;
  cursor: pointer;
  margin-left: 20px;

  &.active {
    border-bottom: 4px solid #fff;
    border-bottom-color: ${({ lightbg }) => (lightbg ? "#0c0c0c" : "#fff")};
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-top: -20px;
`;
