import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Results from './components/Results/Results';
import axios from 'axios';

const API = 'https://api.unsplash.com/search/photos?page=1&query=';
const APIKEY = '&client_id=9515c6e0970543b7f352f31e4b1fe6c60e669a20e8b496aa468e26f330c0423a';

const App = () => {

  const [images, setImages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const getInputValue = val => {
    if (val !== '') {
      setInputValue(val);
      axios.get(`${API}${val}${APIKEY}`)
        .then(({data}) => {
          setImages(data.results);
        });
    }
  };


  return (
    <div className="App">
      <Header />
      <Input inputValue={getInputValue} />
      <Results images={images} title={inputValue} />
    </div>
  );
};

export default App;
