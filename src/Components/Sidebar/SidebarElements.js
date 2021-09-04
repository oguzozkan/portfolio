import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;

  left: 0;
  transition: 0.3 ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  background: transparent;
  cursor: pointer;
  top: 1.2rem;
  right: 1.5rem;
  outline: none;
`;
export const SidebarWrapper = styled.div`
  color: #fff;
`;
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  padding-left: 0px;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2 ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf78;
    transition: 0.2 ease-in-out;
  }
`;
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #8defff;
  white-space: nowrap;
  padding: 16px 64px;
  color: whitesmoke;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2 ease-in-out;
  text-decoration: none;

  &:hover {
    color: #01bf78;
    transition: 0.2 ease-in-out;
    background: #fff;
  }
`;
