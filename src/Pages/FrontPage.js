import React from 'react';
import '../Styles/FrontPage.css';
import FrontPageHeader from '../components/FrontPageHeader';
import FrontPageBody from '../components/FrontPageBody';

function FrontPage({PageChange}) {

  return (

    <div>
      <div className="FP_Header_external">
        <FrontPageHeader/>
      </div>
      <div className="FP_Body_external">
        <FrontPageBody  PageChange = {PageChange}/>
      </div>
    </div>
  );
}

export default FrontPage;
