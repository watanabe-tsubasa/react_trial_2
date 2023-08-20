import React, { useState } from "react"

export const InputButton = () => {
  const [text, setText] = useState('');
  const onChangeText = (event) => {
    setText(event.target.value);
  }
  const [textList, setTextList] = useState([]);
  const onClickTextButton = () => {
    const newTextList = [...textList, text];
    setTextList(newTextList);
    setText('');
  }
  const onClickTextReset = () => {
    setTextList([]);
  }

  return (
    <div>
      <input onChange={onChangeText} value={text}></input>
      <button onClick={onClickTextButton}>Add List</button>
      <button onClick={onClickTextReset}>Reset Text</button>
      <ul>
      {textList.map((elem, idx) => {
          return <li key={idx}>{`${idx}: ${elem}`}</li>
      })}
      </ul>
    </div>
  )
}