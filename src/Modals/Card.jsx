import React, { useState } from 'react';
import '../Styles/Card.css'
import Ricvhey from "../FirstModuleImages/Richey_Rich_Estate.png"
import Blueville from "../FirstModuleImages/Blueville_Estate.png"
import Downtown from "../FirstModuleImages/Downtown_Shopping_Strip.png"
import Extreme from "../FirstModuleImages/Extreme_Techology_Park.png"
import Lean from "../FirstModuleImages/Lean_Leisure_Health.png"
import ONeill from "../FirstModuleImages/ONeill_Monster_Mail.png"
import Accommodation from "../FirstModuleImages/Scaled_Accommodation.png"
import Downs from "../FirstModuleImages/White_Downs_Estate.png"
//.7c173683.
const Card = ({ CardName, data, children }) => {
    let url;
    let CardSize;
    switch (CardName) {
        case 'Richey_Rich_Estate':
            url = Ricvhey;
            CardSize = 300;
            break;
        case 'Blueville_Estate':
            url = Blueville;
            CardSize = 300;
            break;
        case 'Downtown_Shopping_Strip':
            url = Downtown;
            CardSize = 80;
            break;
        case 'Extreme_Techology_Park':
            url = Extreme;
            CardSize = 200;
            break;
        case 'Lean_Leisure_Health':
            url = Lean;
            CardSize = 100;
            break;
        case 'ONeill_Monster_Mail':
            url = ONeill;
            CardSize = 200;
            break;
        case 'Scaled_Accommodation':
            url = Accommodation;
            CardSize = 100;
            break;
        case 'White_Downs_Estate':
            url = Downs;
            CardSize = 300;
            break;
        default:
            url = Ricvhey;
            CardSize = 300;
    };
    const divStyle = {
        background: 'whitesmoke',
        backgroundImage: 'url(' + url + ')',
        backgroundSize: '100%, 100%',
        height: '100%',
        width: '100%',
        marginLeft: '2.5%',
        marginTop: '2.5%',
        backgroundRepeat: 'no-repeat',
    };


    const [value1, setValue1] = useState('0')
    const [value2, setValue2] = useState('0')
    const [value3, setValue3] = useState('0')
    const [valueSum, setValueSum] = useState(parseFloat(value1) + parseFloat(value2) + parseFloat(value3))

    function Calculate(event, input) {
        console.log(event.target.value);
        switch (input) {
            case '1':
                setValue1(event.target.value);
                if (event.target.value !== '') {
                    let COD = (parseFloat(event.target.value) + parseFloat(value2) + parseFloat(value3))/CardSize;
                    data.setSum(COD.toFixed(4));
                    setValueSum(parseFloat(event.target.value) + parseFloat(value2) + parseFloat(value3));
                }
                break;
            case '2':
                setValue2(event.target.value);
                if (event.target.value !== '') {
                    let COD = (parseFloat(value1) + parseFloat(event.target.value) + parseFloat(value3))/CardSize;
                    data.setSum(COD.toFixed(4));
                    setValueSum(parseFloat(value1) + parseFloat(event.target.value) + parseFloat(value3));
                }
                break;
            case '3':
                setValue3(event.target.value);
                if (event.target.value !== '') {
                    let COD = (parseFloat(value1) + parseFloat(value2) + parseFloat(event.target.value))/CardSize;
                    data.setSum(COD.toFixed(4));
                    setValueSum(parseFloat(value1) + parseFloat(value2) + parseFloat(event.target.value));
                }
                break;
            default:
                console.log("Input Error")
        }
    }

    return (
        <div style={divStyle}>
            <div className="FM_Card__Content"><div>
                <input className='FM_Input_1'
                    type="text"
                    maxLength="3"
                    value={value1}
                    onChange={event => Calculate(event, `1`)} />

                <input className='FM_Input_2'
                    type="text"
                    maxLength="3"
                    value={value2}
                    onChange={event => Calculate(event, `2`)} />

                <input className='FM_Input_3'
                    type="text"
                    maxLength="3"
                    value={value3}
                    onChange={event => Calculate(event, `3`)} />
            </div>
                <div className='SumOfInputs'>
                    <h1>{valueSum}</h1>
                </div>
                <div className='WSHFRank'>
                    <h1>{data.Sum}</h1>
                </div>
            </div>
        </div>
    )
}

export default Card;