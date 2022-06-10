import React, { useState } from 'react';

const FirstModuleHeader = function(){
      
    function Rules(){
        console.log('Rules');
    }

    return(
        <div className='Header_internal'>
            <h1> S.A.F.e Simulator Part 1</h1>
                <button onClick={Rules} className='Rules_Bottom'> Описание модуля </button>
        </div>
    )
}

export default FirstModuleHeader;