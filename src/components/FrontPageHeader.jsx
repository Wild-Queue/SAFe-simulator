import React, { useState } from 'react';
import RulesWindow from '../Modals/RulesWindow';
import "../Styles/FrontPage.css"

const FrontPageHeader = function () {
    const [modalActive, setModalActive] = useState(false)

    return (
        <div>
            <div className='FP_Header_internal'>
                <h1> S.A.F.e Simulator</h1>
                <button onClick={() => setModalActive(true)} className='FP_Rules_Bottom'> Правила игры </button>
            </div>
            <RulesWindow active={modalActive} setActive={setModalActive}>
                <h1 style={{lineHeight: "250%", fontSize: "200%",textAlign: "center"}}>Правила игры!</h1>
                <p style={{lineHeight: "150%",fontSize: "155%",textIndent: "1em", marginLeft: "1%", textAlign: "center"}}>Вы - компания по развитию недвижимости.  Вы купили несколько ферм в 2 часах езды от крупного города, снесли их бульдозером и планируете построить город-спутник (SAFe City).  Вы будете зарабатывать деньги, строя дома и магазины и продавая их.  Конечно, ваша цель - построить процветающий город, который будет приносить деньги от людей, желающих купить ваши разработки - и вам нужно понять, в каком порядке строить.  У вас есть разумные, но не чрезмерные денежные резервы, поэтому создание денежного потока будет первоочередной задачей.</p>
            </RulesWindow>
        </div>
    )
}

export default FrontPageHeader;