import React from 'react';
import '../Styles/FirstModule.css';
import FirstModuleHeader from '../components/FirstModuleHeader';
import FirstModuleBody from '../components/FirstModuleBody';

function FirstModule({ChosenCards, PageChange, dataButtonLeft, dataButtonRight }) {

  return (
    <div>
      <div className="FM_Header_external">
        <FirstModuleHeader PageChange = {PageChange}/>
      </div>
      <div className="FM_Body_external">
        <FirstModuleBody ChosenCards = {ChosenCards}  PageChange = {PageChange} dataButtonLeft = {dataButtonLeft} dataButtonRight = {dataButtonRight} />
      </div>
    </div>
  );
}

export default FirstModule;
