import React from 'react';
import Image from "../images/FrontPic.png"
import '../Styles/FrontPage.css';

const FrontPageBody = function ({PageChange}) {

    function MoveFirstModule() {
        PageChange.setPage('1');
        //window.location.assign('/FirstModule');
    }

    return (
        <div>
            <img className='FP_SAFeImg' alt={"SAFe picture"} src={Image} />
            <div className='FP_Body_internal'>
                <h1 style={{ fontSize: "2vw" }}>
                    SAFe Simulator - это симулятор, который позволит вам в игровой форме познакомиться с основами SAFe. <br />
                </h1>
            </div>
            <div className='FP_Body_internal'>
                <h4 style={{ fontSize: "2vw" }}>
                    Показываем людям, что такое Scaled Agile Framwork и как с ним работать.
                </h4>
            </div>
            <button onClick={MoveFirstModule} className='FP_Start_Bottom'> Старт</button>
        </div>
    )
}

export default FrontPageBody;