import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import './Styles/FrontPage.css';
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
