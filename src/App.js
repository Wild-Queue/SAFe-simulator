import React, {useState } from 'react';
import { BrowserRouter, Route, Routes, Link, Switch } from "react-router-dom"
import './Styles/FrontPage.css';
import Header from './components/header';
import Body from './components/body';
import FrontPage from './Pages/FrontPage';
import FirstModule from './Pages/FirstModule';

function App() {
  
  

  return (
    <BrowserRouter>
        <Routes>
          <Route exact path = "/" element = {<FrontPage/>}/>,
          <Route path = "/FirstModule" element = { <FirstModule/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
