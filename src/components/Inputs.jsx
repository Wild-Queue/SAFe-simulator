import React, {useState} from 'react';
import '../Styles/Inputs.css'

const Inputs = (props) => {

    let inputs = Object.assign([], props.inputs);
    let cur = props.cur;

    function Update(i, x){
        const temp = Object.assign([], inputs);
        const x0 = isNaN(Number.parseInt(x)) ? 0 : Number.parseInt(x);
        if(i === 1) temp[cur].fir = x0;
        else if(i === 2) temp[cur].sec = x0;
        else temp[cur].thr = x0;
        props.setInputs(temp);
    }

    function myRound(n) {
        let digits = +"1".padEnd(3, "0");
        return Math.round(n * digits) / digits;
    }

    return (
        <div className="Shell">
            <input value={inputs[props.cur].fir} maxLength={3} className="Main First"
                   onChange={event => Update(1, event.target.value)}/>
            <input value={inputs[cur].sec} maxLength={3} className="Main Second"
                   onChange={event => Update(2, event.target.value)}/>
            <input value={inputs[cur].thr} maxLength={3} className="Main Third"
                   onChange={event => Update(3, event.target.value)}/>
            <div className="Sum">{inputs[cur].fir + inputs[cur].sec + inputs[cur].thr}</div>
            <div className="w">{myRound((inputs[cur].fir + inputs[cur].sec + inputs[cur].thr) /
                (props.size.find(function (e) { return e.key === props.im; }
            )).element)}</div>
        </div>
    );
};

export default Inputs;