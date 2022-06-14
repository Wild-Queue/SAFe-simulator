import React, { useState } from 'react';
import RulesWindow from '../Modals/RulesWindow';

const FrontPageHeader = function () {
    const [modalActive, setModalActive] = useState(false)

    return (
        <div>
            <div className='Header_internal'>
                <h1> S.A.F.e Simulator</h1>
                <button onClick={() => setModalActive(true)} className='Rules_Bottom'> Правила игры </button>
            </div>
            <RulesWindow active={modalActive} setActive={setModalActive}>
                SAFe rules 
            </RulesWindow>
        </div>
    )
}

export default FrontPageHeader;