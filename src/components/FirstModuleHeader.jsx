import React, { useState } from 'react';
import "../Styles/FirstModule.css"
import RulesWindowModules from '../Modals/RulesWindowModules';
import FirstModuleRules from './FirstModuleRules';
import SecondModuleRules from './SecondModuleRules';
import ThirdModuleRules from './ThirdModuleRules';

const FirstModuleHeader = function ({ PageChange }) {
    const [modalActive, setModalActive] = useState(false)

    function MoveHome() {
        PageChange.setPage('0');
    }

    function Back() {
        switch (PageChange.page) {
            case '1':
                PageChange.setPage('0');
                break;
            case '2':
                PageChange.setPage('1');
                break;
            case '3':
                PageChange.setPage('2');
                break;
            default:
                PageChange.setPage('0');
                break;
        };
    }

    return (
        <div>
            <div className='FM_Header_internal'>
                <h1> SAFe Simulator</h1>
                <div>
                    <button onClick={MoveHome} className='FM_Home_Bottom'> Домой</button>
                    <button onClick={() => Back()} className='FM_Back_Bottom' style={{marginLeft: '2px'}}> Назад </button>
                    <button onClick={() => setModalActive(true)} className='FM_Rules_Bottom' style={{marginLeft: '2px'}}> Описание модуля </button>
                </div>
            </div>
            <RulesWindowModules active={modalActive} setActive={setModalActive}>
                {PageChange.page === '1' ? <FirstModuleRules /> : null}
                {PageChange.page === '2' ? <SecondModuleRules /> : null}
                {PageChange.page === '3' ? <ThirdModuleRules /> : null}
            </RulesWindowModules>
        </div>
    )
}

export default FirstModuleHeader;