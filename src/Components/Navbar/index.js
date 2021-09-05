import React, { useState, useEffect } from "react";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  MobileIcon2,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";
const Navbar = ({ toggle, LightToggle, lightbg }) => {
  const [scrolNAvigation, setNav] = useState(false);
  const changeStatuofNav = () => {
    if (window.scrollY >= 255) {
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
    localStorage.setItem("bgStatus", false);
  }, []);
  const toggleUp = () => {
    scroll.scrollToTop();
  };
  return (
    <Nav scrolNAvigation={scrolNAvigation} lightbg={lightbg}>
      <NavbarContainer>
        <NavLogo to="/" onClick={toggleUp} lightbg={lightbg}>
          Oguzhan
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>

        <NavMenu>
          <NavItem></NavItem>
          <NavItem>
            <NavLinks
              activeClass="active"
              smooth={true}
              duration={100}
              exact="true"
              spy={true}
              offset={-80}
              to="about"
              lightbg={lightbg}
            >
              About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              activeClass="active"
              smooth={true}
              duration={100}
              exact="true"
              spy={true}
              offset={-75}
              to="mySwiper"
              lightbg={lightbg}
            >
              Resume
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              activeClass="active"
              smooth={true}
              duration={100}
              exact="true"
              spy={true}
              offset={-75}
              to="contacts"
              lightbg={lightbg}
            >
              Contact
            </NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn> </NavBtn>
        <MobileIcon2 onClick={LightToggle} lightbg={lightbg}>
          {lightbg ? <FaSun /> : <FaMoon style={{ color: "#fff" }} />}
        </MobileIcon2>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
