import React from 'react';
import '../Styles/FrontPage.css';
import FrontPageHeader from '../components/FrontPageHeader';
import FrontPageBody from '../components/FrontPageBody';

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
