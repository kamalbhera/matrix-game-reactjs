import React, { useState } from "react";
import Box from "./Box";

const Matrix = () => {
  const [arr, setArr] = useState([]);

  const handleClick = (i) => {
    let newArr = [...arr];
    if(arr.length === 2){
        newArr.shift();
    }
    newArr.push(i);
    setArr(newArr);
  };

  return (
    <div className="matrix">
      {[...Array(4)].map((e, i) => (
        <div key={i} className='row'>
          {[...Array(4)].map((ele, idx) => (
          <Box
            key={idx + 1}
            handleClick={() => handleClick(i*4 + idx)}
            clicked={(arr.includes(i*4 + idx)) ? true : false}
          />
          ))}
        </div>
      ))}
      <button className="reset" onClick={() => setArr([])}>Reset</button>
    </div>
  );
};

export default Matrix;
