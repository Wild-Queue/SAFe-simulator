import React from 'react';
import '../Styles/FirstModule.css';
import FirstModuleHeader from '../components/FirstModuleHeader';
import FirstModuleBody from '../components/FirstModuleBody';

function FirstModule() {

  return (
    <div>
      <div className="FM_Header_external">
        <FirstModuleHeader/>
      </div>
      <div className="FM_Body_external">
        <FirstModuleBody/>
      </div>
    </div>
  );
}

export default FirstModule;
