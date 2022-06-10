import React, { useDebugValue, useState } from 'react';
import '../Styles/FrontPage.css';
import Header from '../components/header';
import Body from '../components/body';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import FirstModule from './FirstModule';

function FrontPage() {

  return (

    <div>
      <div className="Header_external">
        <Header />
      </div>
      <div className="Body_external">
        <Body />
      </div>
    </div>
  );
}

export default FrontPage;
