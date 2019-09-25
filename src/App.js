import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Results from './components/Results/Results';
import axios from 'axios';

const API = 'https://api.unsplash.com/search/photos?per_page=40&query=';
const APIKEY = '&client_id=9515c6e0970543b7f352f31e4b1fe6c60e669a20e8b496aa468e26f330c0423a';

const App = () => {

  const [images, setImages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const getInputValue = val => {
    if (val !== '') {
      setLoading(true);
      axios.get(`${API}${val}${APIKEY}`)
        .then(({data}) => {
          setInputValue(val);
          setImages(data.results);
          setLoading(false);
        });
    }
  };


  return (
    <div className="App">
      <Header />
      <Input inputValue={getInputValue} />
      <Results images={images} title={inputValue} loading={loading} />
    </div>
  );
};

export default App;
