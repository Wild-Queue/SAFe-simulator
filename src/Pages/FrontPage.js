import React from 'react';
import '../Styles/FrontPage.css';
import FrontPageHeader from '../components/FrontPageHeader';
import FrontPageBody from '../components/FrontPageBody';


// PageChange = Variable responsible for moving to the next module

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
