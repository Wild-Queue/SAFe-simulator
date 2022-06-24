import React, {useState} from 'react';
import '../Styles/CurrentCard.css'
import Inputs from "./Inputs";

const CurrentCard = (props) => {

    const [next, setNext] = useState(false);
    const [prev, setPrev] = useState(true);

    let f = props.features;
    let [cur, setCur] = useState(0);
    const [inputs, setInputs] = useState(init());

    function init(){
        let temp = [];
        for (let i = 0; i < f.length; i++)
            temp.push({fir: 0, sec: 0, thr: 0});
        return temp;
    }

    function Next(){
        setPrev(false);
        setCur(cur + 1);
        if(cur === f.length - 2) setNext(true);
    }

    function Prev(){
        setNext(false);
        setCur(cur - 1);
        if(cur === 1) setPrev(true);
    }

    return (
        <div className="Card">
            <div className="CardImg">
                <img src={require('../images/' + f[cur] + '.jpg')} alt='' height="100%"/>
                <Inputs cur = {cur} im = {f[cur]} size = {props.size} inputs = {inputs} setInputs = {setInputs}/>
            </div>
            <button className="base NextButton" disabled={next} onClick={Next}>Next</button>
            <button className="base PrevButton" disabled={prev} onClick={Prev}>Prev</button>
            <button className="ConfirmButton" onClick={() => {props.pr(0); props.menu(1)}}>Confirm</button>

        </div>
    );
};

export default CurrentCard;