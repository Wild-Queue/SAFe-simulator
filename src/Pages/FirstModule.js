import React, { useDebugValue, useState } from 'react';
import '../Styles/FrontPage.css';
import FirstModuleHeader from '../components/FirstModuleHeader';

function FirstModule() {
  
  return (
    <div className="Header_external">
      <FirstModuleHeader/>
    </div>
  );
}

export default FirstModule;