import React from 'react';
import '../Styles/Card.css'
import Ricvhey from "../FirstModuleImages/Richey_Rich_Estate.png"
import Blueville from "../FirstModuleImages/Blueville_Estate.png"
import Downtown from "../FirstModuleImages/Downtown_Shopping_Strip.png"
import Extreme from "../FirstModuleImages/Extreme_Techology_Park.png"
import Lean from "../FirstModuleImages/Lean_Leisure_Health.png"
import ONeill from "../FirstModuleImages/ONeill_Monster_Mail.png"
import Accommodation from "../FirstModuleImages/Scaled_Accommodation.png"
import Downs from "../FirstModuleImages/White_Downs_Estate.png"

const Card = ({ CardName, data, ImageName }) => {
    let url;
    let CardSize;
    let ButtonsAgrument = Object.assign([], data.ButtonsAgrument);
    let BAIndex = ButtonsAgrument.findIndex(el => el.DispaingImage === ImageName);
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

    const CardStyle = {
        background: 'white',
        backgroundImage: 'url(' + url + ')',
        backgroundSize: '100%, 100%',
        height: '100%',
        width: '100%',
        marginLeft: '2.5%',
        marginTop: '2.5%',
        backgroundRepeat: 'no-repeat',
    };

    function isInt(value) {
        return !isNaN(value) && (function (x) { return (x | 0) === x; })(parseFloat(value))
    }

    function Calculate(event, inputNum) {
        if (event.target.value.length < 4 && ((isInt(event.target.value) && ['0', '1', '2', '3', '5', '8', '13', '21'].includes(event.target.value)) || event.target.value === '')) {


            switch (inputNum) {
                case '1':
                    if (ButtonsAgrument[BAIndex].Input[0] !== '') {
                        ButtonsAgrument[BAIndex].Input[3] = parseFloat(ButtonsAgrument[BAIndex].Input[3]) - parseFloat(ButtonsAgrument[BAIndex].Input[0]);
                        let WSJF = parseFloat(ButtonsAgrument[BAIndex].Input[3]) / CardSize;
                        ButtonsAgrument[BAIndex].Input[4] = WSJF.toFixed(3);
                    }

                    if (event.target.value !== '') {
                        ButtonsAgrument[BAIndex].Input[3] = parseFloat(ButtonsAgrument[BAIndex].Input[3]) + parseFloat(event.target.value);
                        let WSJF = parseFloat(ButtonsAgrument[BAIndex].Input[3]) / CardSize;
                        ButtonsAgrument[BAIndex].Input[4] = WSJF.toFixed(3);
                    }
                    ButtonsAgrument[BAIndex].Input[0] = event.target.value;
                    break;
                case '2':
                    if (ButtonsAgrument[BAIndex].Input[1] !== '') {
                        ButtonsAgrument[BAIndex].Input[3] = parseFloat(ButtonsAgrument[BAIndex].Input[3]) - parseFloat(ButtonsAgrument[BAIndex].Input[1]);
                        let WSJF = parseFloat(ButtonsAgrument[BAIndex].Input[3]) / CardSize;
                        ButtonsAgrument[BAIndex].Input[4] = WSJF.toFixed(3);
                    }

                    if (event.target.value !== '') {
                        ButtonsAgrument[BAIndex].Input[3] = parseFloat(ButtonsAgrument[BAIndex].Input[3]) + parseFloat(event.target.value);
                        let WSJF = parseFloat(ButtonsAgrument[BAIndex].Input[3]) / CardSize;
                        ButtonsAgrument[BAIndex].Input[4] = WSJF.toFixed(3);
                    }
                    ButtonsAgrument[BAIndex].Input[1] = event.target.value;
                    break;
                case '3':
                    if (ButtonsAgrument[BAIndex].Input[2] !== '') {
                        ButtonsAgrument[BAIndex].Input[3] = parseFloat(ButtonsAgrument[BAIndex].Input[3]) - parseFloat(ButtonsAgrument[BAIndex].Input[2]);
                        let WSJF = parseFloat(ButtonsAgrument[BAIndex].Input[3]) / CardSize;
                        ButtonsAgrument[BAIndex].Input[4] = WSJF.toFixed(3);
                    }

                    if (event.target.value !== '') {
                        ButtonsAgrument[BAIndex].Input[3] = parseFloat(ButtonsAgrument[BAIndex].Input[3]) + parseFloat(event.target.value);
                        let WSJF = parseFloat(ButtonsAgrument[BAIndex].Input[3]) / CardSize;
                        ButtonsAgrument[BAIndex].Input[4] = WSJF.toFixed(3);
                    }
                    ButtonsAgrument[BAIndex].Input[2] = event.target.value;
                    break;
                default:
                    console.log("Input Error")
            }


            data.setButtonsAgrument(ButtonsAgrument);
        }
    }

    return (
        <div style={CardStyle}>
            <div className="FM_Card__Content">
                <div>
                    <input className='FM_Input_1'
                        type="text"
                        value={ButtonsAgrument[BAIndex].Input[0]}
                        onChange={event => Calculate(event, `1`)} />

                    <input className='FM_Input_2'
                        type="text"
                        value={ButtonsAgrument[BAIndex].Input[1]}
                        onChange={event => Calculate(event, `2`)} />

                    <input className='FM_Input_3'
                        type="text"
                        value={ButtonsAgrument[BAIndex].Input[2]}
                        onChange={event => Calculate(event, `3`)} />
                </div>
                <div >
                    <h1 className='FM_SumOfInputs'>{ButtonsAgrument[BAIndex].Input[3]}</h1>
                </div>
                <div>
                    <h1 className='FM_WSHFRank'>{ButtonsAgrument[BAIndex].Input[4]}</h1>
                </div>
            </div>
        </div>
    )
}

export default Card;