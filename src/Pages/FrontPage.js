import React, { useDebugValue, useState } from 'react';
import '../Styles/FrontPage.css';
import FrontPageHeader from '../components/FrontPageHeader';
import FrontPageBody from '../components/FrontPageBody';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import FirstModule from './FirstModule';
import RulesWindow from '../Modals/RulesWindow';

function FrontPage() {

  return (

    <div>
      <div className="Header_external">
        <FrontPageHeader/>
      </div>
      <div className="Body_external">
        <FrontPageBody/>
      </div>
    </div>
  );
}

export default FrontPage;
