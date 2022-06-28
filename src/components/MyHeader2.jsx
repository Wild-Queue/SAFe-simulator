import React from 'react';
import '../Styles/MyHeader2.css'

const MyHeader2 = (props) => {
    
    function MoveHome() {
        props.PageChange.setPage('0');
    }
    return (
        <div className="headerPriority">
            <h1>SAFe Simulator</h1>

            <div className="homePriority">
                <button className="buttonHomePriority"  onClick={MoveHome} >Домой</button>
            </div>

            <div className="readModulePriority">
                <button className="buttonModulePriority">Описание модуля</button>
            </div>
        </div>
    );
};

export default MyHeader2;