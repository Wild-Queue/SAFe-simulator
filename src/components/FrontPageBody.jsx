import React from 'react';
import Image from "../images/FrontPic.png"
import "../Styles/FrontSAFeImage.css"
import '../Styles/FrontPage.css';

const FrontPageBody = function () {

    function MoveFirstModule() {
        window.location.assign('/FirstModule');
    }

    return (
        <div>
            <img className='SAFeImg' alt={"SAFe picture"} src={Image} />
            <h1>
                <div className='Body_internal'>
                    S.A.F.e Simulator - это симулятор, который позволит вам в игровой форме познакомиться с основами SAFe. <br />
                </div>
            </h1>
            <div className='Body_internal'>
                Показываем людям, что такое Scaled Agile Framwork и как с ним работать.
            </div>
            <button onClick={MoveFirstModule} className='Start_Bottom'> Старт</button>
        </div>
    )
}

export default FrontPageBody;