import React, { useState, useEffect } from "react";

function Effect() {
  const [timestate, setTimestate] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => setTimestate(new Date()), 1000);
    console.log("ss");
    return () => {
      clearTimeout(timer);
    };
  }, [timestate, setTimestate]);
  return <div>useeffect{timestate.toLocaleTimeString()}</div>;
}
export default Effect;
