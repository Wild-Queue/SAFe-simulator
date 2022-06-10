import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"


const Header = function(){
      
    function Rules(){
        console.log('Rules');
    }

    return(
        <div className='Header_internal'>
            <h1> S.A.F.e Simulator</h1>
                <button onClick={Rules} className='Rules_Bottom'> Правила игры </button>
        </div>
    )
}

export default Header;