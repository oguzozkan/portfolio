import React from "react";
import elixirImg1 from "../../images/elixirposter.jpg";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  MobileIcon2,
  NavBtn,
} from "./NavbarExElements";

import Lightbox from "react-awesome-lightbox";

import "react-awesome-lightbox/build/style.css";
const NavbarEx = ({ closestate, changeToggle }) => {
  return (
    <>
      <>
        {closestate ? (
          <Lightbox
            image={elixirImg1}
            title="Image Title"
            onClose={changeToggle}
          />
        ) : (
          <></>
        )}{" "}
      </>
    </>
  );
};

export default NavbarEx;
