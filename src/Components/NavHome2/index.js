import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  MobileIcon2,
  NavBtn,
} from "./NavHome2Elements";
import { FaBars, FaSun, FaMoon, FaBitcoin } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
const NavHome2 = ({ lightbg, LightToggle }) => {
  const [scrolNAvigation, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const changeStatuofNav = () => {
    if (window.scrollY >= 160) {
      setNav(true);
      if (lightbg) {
        Nav.background = "#000";
      } else {
        Nav.background = "#fff";
      }
    } else {
      setNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeStatuofNav);
  }, []);
  const toggleUp = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrolNAvigation={scrolNAvigation} lightbg={lightbg}>
        <NavbarContainer>
          <NavLogo to="/#" onClick={toggleUp} lightbg={lightbg}>
            Oguzhan
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <MobileIcon2 onClick={LightToggle} lightbg={lightbg}>
            {lightbg ? <FaSun /> : <FaMoon style={{ color: "#fff" }} />}
          </MobileIcon2>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavHome2;
