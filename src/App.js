import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import FrontPage from './Pages/FrontPage';
import FirstModule from './Pages/FirstModule';
import SecondModule from './components/SecondModule';
import ThirdPage from './Pages/ThirdPage';

function App() {
  const [Page, setPage] = useState('0');
  let PageChange = { page: Page, setPage: setPage };

  let [epic, setEpic] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  let ChosenCards = { epic: epic, setEpic: setEpic };

  let [PI, setPi] = useState([]);

  return (
    <div>
      {Page === '0' ? <FrontPage PageChange={PageChange} /> : null}
      {Page === '1' ? <FirstModule ChosenCards={ChosenCards} PageChange={PageChange} /> : null}
      {Page === '2' ? <SecondModule ep={ChosenCards.epic} Pi={setPi} PageChange = {PageChange} /> : null}
      {Page === '3' ? <ThirdPage PageChange = {PageChange}/> : null}

    </div>

    /*
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />,
        <Route path="/FirstModule" element={<FirstModule ChosenCards={ChosenCards} />} />,
        <Route path="/SecondModule" element={<SecondModule ChosenCards={ChosenCards} />} />,
        <Route path="/ThirdPage" element={<ThirdPage />} />
      </Routes>
    </BrowserRouter>*/
  );
}

export default App;
