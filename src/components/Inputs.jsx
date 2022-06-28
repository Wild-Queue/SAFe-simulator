import React, {useState} from 'react';
import '../Styles/Inputs.css'
import {fibonacci, sizeFeatures} from "../Globals/global";

const Inputs = (props) => {

    let input = props.inputs.find(function (e) {return e.el === props.input});

    function Update(i, x){
        const temp = Object.assign([], input);
        const x0 = isNaN(Number.parseInt(x)) ? 0 : Number.parseInt(x);
        if(i === 1) temp.fir = x0;
        else if(i === 2) temp.sec = x0;
        else temp.thr = x0;
        props.setInputs(props.inputs.map(el => {
            if(el.el === temp.el) return temp;
            return el;
        }));
    }

    function EndInput(i, x){
        let x0 = -1;
        if(x < 0) x0 = 0;
        for(let i = 0;i < fibonacci.length;i++)
            if(fibonacci[i] <= x && x <= fibonacci[i + 1])
                x0 = fibonacci[i];
        if(x0 === -1) x0 = fibonacci[9];
        Update(i, x0);
    }

    function myRound(n) {
        let digits = +"1".padEnd(3, "0");
        return Math.round(n * digits) / digits;
    }

    if(props.rev === 'rev') return(<div></div>)
    else
    return (
        <div className="Shell">
            <input disabled={props.dis} value={input.fir} maxLength={2} className="Main First"
                   onChange={event => Update(1, event.target.value)}
                   onBlurCapture={event => EndInput(1, event.target.value)}/>
            <input disabled={props.dis} value={input.sec} maxLength={2} className="Main Second"
                   onChange={event => Update(2, event.target.value)}
                   onBlurCapture={event => EndInput(2, event.target.value)}/>
            <input disabled={props.dis} value={input.thr} maxLength={2} className="Main Third"
                   onChange={event => Update(3, event.target.value)}
                   onBlurCapture={event => EndInput(3, event.target.value)}/>
            <div className="Sum">{input.fir + input.sec + input.thr}</div>
            <div className="w">
                {myRound((input.fir + input.sec + input.thr) /
                (sizeFeatures.find(function (e) { return e.key === input.el; }
            )).element)}
            </div>
        </div>
    );
};

export default Inputs;