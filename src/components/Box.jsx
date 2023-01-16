import React from "react";

const Box = ({handleClick,clicked}) => {

  return (
    <div
      className="box"
      style={
        !clicked ? { backgroundColor: "blue" } : { backgroundColor: "red" }
      }
      onClick={handleClick}
    />
  );
};

export default React.memo(Box);
