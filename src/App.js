import React, {useState} from 'react';
import {useParams} from 'react-router';
import {useNavigate} from 'react-router-dom';
import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

const Home = () => {
  return (
    <h1>Welcome</h1>
  );
}

const Page = () => {
  const {value} = useParams();
    if(isNaN(value)) {
      return <h1>The word is {value}</h1>
    } else {
        return <h1>The number is {value}</h1>
    }
}

const ColorPage = () => {
  const {value} = useParams();
  const {txtColor} = useParams();
  const {bgColor} = useParams();
    if(isNaN(value)) {
      return <h1 style={{color: txtColor, backgroundColor: bgColor}}>The word is {value}</h1>
    } else {
        return <h1 style={{color: txtColor, backgroundColor: bgColor}}>The number is {value}</h1>
    }
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path = '/' element = {<Home />} />
        <Route path = '/:value' element = {<Page />} />
        <Route path = '/:value/:txtColor/:bgColor' element = {<ColorPage />} />
      </Routes>
    </div>
  );
}

export default App;
