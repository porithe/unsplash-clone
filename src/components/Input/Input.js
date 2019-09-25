import React, { useState, useEffect } from "react";
import "./Input.scss";
import { useDebounce } from 'use-debounce';

const Input = (props) => {

  const [inputValue, setInputValue] = useState('');

  const [debounceValue] = useDebounce(inputValue, 1000);

  useEffect(() => {
    if (debounceValue !== '') {
      props.inputValue(debounceValue);
      setInputValue('')
    }
  })

  return (
    <div className="wrapper">
      <input value={inputValue} onChange={e => setInputValue(e.target.value)} className="wrapper__input" type="text" placeholder="E.g. Barcelona" />
    </div>
  );
};

export default Input;
