import React from "react";
import { useState } from "react";

function useExample() {
  const [isRed, setIsRed] = useState(true);

  return (
    <div>
      <h2
        onClick={() => setIsRed(!isRed)}
        style={{ color: isRed ? "red" : "limegreen" }}
      >
        use colorssssssssss
      </h2>
    </div>
  );
}
export default useExample;
