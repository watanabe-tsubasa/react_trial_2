import React, { useState } from "react";

export const Counter = (props) => {
  const { addNum, decNum } = props;
  const [count, setCount] = useState(0)
  const onClickAdd = () => {
    setCount(count + addNum);
  }
  const onClickDec = () => {
    setCount(count - decNum);
  }
  const onClickReset = () => {
    setCount(0);
  }
  
  return (
    <div>
      <button onClick={onClickAdd}>+</button>
      <button onClick={onClickDec}>-</button>
      <button onClick={onClickReset}>Reset</button>
      <p>{count}</p>
    </div>
  )
}