"use client";
import React, { useState } from "react";
// React hooks : useState
// useState :change the vaule of variable dynamically
// const [value , setValue] = useState(initialvalue)
// const NewApp = () => {
//     const [count , setCount] = useState(0)
//     const Counter = ()=>{
//         setCount(count + 1)
//     }
//   return (
//     <div>
//         <button onClick={Counter}>Increment</button>
//         <p>{count}</p>
//     </div>
//   )
// }
// export default NewApp

const NewApp = () => {
  //     function ToggleText() {
  //   const [isVisible, setIsVisible] = useState(true);

  //   return (
  //     <div>
  //       <button onClick={() => setIsVisible(!isVisible)}>
  //         {isVisible ? "Hide" : "Show"} Text
  //       </button>
  //       {isVisible && <p>This is some toggled text.</p>}
  //     </div>
  //   );
  //     }

  // const [] = useState("Enter your Text Here")
  const [mystyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  let handleClick = () => {
    if (mystyle.color == "black") {
      setMyStyle({ color: "white", backgroundColor: "black" });
    } else {
      setMyStyle({ color: "black", backgroundColor: "white" });
    }
  };
  return (
    <div>
      <div style={mystyle}>
        <h4>
          <b>John Doe</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>

      <button onClick={handleClick}>Change Mode</button>

      {/* <ToggleText /> */}
    </div>
  );
};
export default NewApp;
