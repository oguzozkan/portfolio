import React, { useEffect, useState } from "react";

function Deneme() {
  const [bgStatus, setlight] = useState();
  const container = {
    display: "flex",
    flexDirection: "row",
    //alignItems: "center",
    // alignItems: "flex-start",
    border: "1px #ccc solid",
    padding: "10px",
  };
  const box1 = {
    flex: "2",
    order: "2",
  };
  const container2 = {};
  const getStat = () => {
    const g = localStorage.getItem("bgStatus");
    if (JSON.parse(g) === true) {
      setlight(true);
    } else {
      setlight(false);
    }
  };
  const box2 = { flex: "1", order: "1" };

  const box3 = { flex: "2", order: "3" };
  useEffect(() => {
    getStat();
    console.log("bgStatus", bgStatus);
  }, [getStat]);
  return (
    <>
      {bgStatus ? (
        <div>
          <div style={container}>
            <div style={box1}>
              <h3>Box1</h3>
              <p>
                {bgStatus} Right click in any editor and Generate Dummy Text...
                1b) Or open command and choose Generate Dummy Text... Type how
                many words you
              </p>
            </div>
            <div style={box2}>
              <h3>Box2</h3>
              <p>
                {" "}
                Right click in any editor and Generate Dummy Text... 1b) Or open
                command and choose Generate Dummy Text... Type how many words
                you
              </p>
            </div>
            <div style={box3}>
              <h3>Box 3</h3>
              <p>
                {" "}
                Right click in any editor and Generate Dummy Text... 1b) Or open
                command and choose Generate Dummy Text... Type how many words
                you
              </p>
            </div>
          </div>
          <div style={container2}>
            <div style={box1}>
              <h3>Box1</h3>
              <p>
                {" "}
                Right click in any editor and Generate Dummy Text... 1b) Or open
                command and choose Generate Dummy Text... Type how many words
                you
              </p>
            </div>
            <div style={box2}>
              <h3>Box2</h3>
              <p>
                {" "}
                Right click in any editor and Generate Dummy Text... 1b) Or open
                command and choose Generate Dummy Text... Type how many words
                you
              </p>
            </div>
            <div style={box3}>
              <h3>Box 3</h3>
              <p>
                {" "}
                Right click in any editor and Generate Dummy Text... 1b) Or open
                command and choose Generate Dummy Text... Type how many words
                you
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>deneme</div>
      )}
    </>
  );
}
export default Deneme;
