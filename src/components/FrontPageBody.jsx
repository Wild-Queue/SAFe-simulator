import React from 'react';
import Image from "../images/FrontPic.png"
import '../Styles/FrontPage.css';

// PageChange = Variable responsible for moving to the next module

const FrontPageBody = function ({PageChange}) {

    function MoveFirstModule() {
        PageChange.setPage('1');
    }

    return (
        <div>
            <img className='FP_SAFeImg' alt={"SAFe picture"} src={Image} />
            <div className='FP_Body_internal'>
                <h1 style={{ fontSize: "2vw" }}>
                    SAFe Simulator - это симулятор, который позволит вам в игровой форме познакомиться с основами SAFe. <br />
                </h1>
            </div>
            <div className='FP_Body_internal' style={{marginTop: "-4%"}}>
                <h4 style={{ fontSize: "2vw" }}>
                    Показываем людям, что такое Scaled Agile Framwork и как с ним работать.
                </h4>
            </div>
            <button onClick={MoveFirstModule} className='FP_Start_Bottom'> Старт</button>
        </div>
    )
}

export default FrontPageBody;