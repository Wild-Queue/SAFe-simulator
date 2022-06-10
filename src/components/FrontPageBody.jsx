import React, { useState } from 'react';
import { Link } from "react-router-dom"

const FrontPageBody = function(){
      
    function MoveFirstModule(){
        window.location.assign('/FirstModule');
        console.log('Path');
    }

    return(
        <div className='Body_internal'>
            <h1> S.A.F.e Simulator - это симулятор <br/> который позволит вам в игровой форме познакомится с основами SAFe</h1>
            <button onClick = {MoveFirstModule} className='Start_Bottom'> Старт</button>

        </div>
    )
}

export default FrontPageBody;