import React, { useState } from "react";

function SlideElement(props) {
  const [state, setstate] = useState(0);
  const myImgstyle = {
    borderRadius: "20px",
    height: "20px",
    weight: "20px",
    margin: "7px 7px 7px 7px",
  };

  const textstyle = {
    color: "white",
    zIndex: "60",
    justifycontent: "center",
    alignitems: "center",
  };

  return (
    <div
      style={{
        background: `linear-gradient(
          50deg,
          rgba(255, 255, 255, 0.2) 20%,
          rgba(254, 193, 130, 1) 100%
        )`,
        cursor: "pointer",
        display: "flex",
        border: "1px solid #DFE1E5",
        borderRadius: "20px",
        height: "40px",
        lineHeight: "38px",
        paddingRight: "12px",
        margin: "14px 8px 14px 8px",
      }}
    >
      <img src={props.image} style={myImgstyle} alt="sdas"></img>

      <p> {props.text1}</p>
    </div>
  );
}
export default SlideElement;
