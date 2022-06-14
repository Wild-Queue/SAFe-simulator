import React, { useState } from 'react';
import "../Styles/FirstModule.css";
import "../Modals/Card.jsx";
import Card from '../Modals/Card.jsx';

const FirstModuleBody = function () {
    const [MinResidWSJF, setMinResidWSJF] = useState('');
    const [MinComWSJF, setMinComWSJF] = useState('');

    const [WSJF_Richey, setWSJF_Richey] = useState(0);
    const [WSJF_Blueville, setWSJF_Blueville] = useState(0);
    const [WSJF_Accommodation, setWSJF_Accommodation] = useState(0);
    const [WSJF_Downs, setWSJF_Downs] = useState(0);
    const [WSJF_Downtown, setWSJF_Downtown] = useState(0);
    const [WSJF_Extreme, setWSJF_Extreme] = useState(0);
    const [WSJF_Lean, setWSJF_Lean] = useState(0);
    const [WSJF_ONeill, setWSJF_ONeill] = useState(0);

    let dataRichey = { Sum: WSJF_Richey, setSum: setWSJF_Richey };
    let dataBlueville = { Sum: WSJF_Blueville, setSum: setWSJF_Blueville };
    let dataAccommodation = { Sum: WSJF_Accommodation, setSum: setWSJF_Accommodation };
    let dataDowns = { Sum: WSJF_Downs, setSum: setWSJF_Downs };
    let dataDowntown = { Sum: WSJF_Downtown, setSum: setWSJF_Downtown };
    let dataExtreme = { Sum: WSJF_Extreme, setSum: setWSJF_Extreme };
    let dataLean = { Sum: WSJF_Lean, setSum: setWSJF_Lean };
    let dataONeill = { Sum: WSJF_ONeill, setSum: setWSJF_ONeill };

    function Calculate() {
        let ResidM = Math.min(WSJF_Richey, WSJF_Blueville, WSJF_Accommodation, WSJF_Downs);
        let ComM = Math.min(WSJF_Downtown, WSJF_Extreme, WSJF_Lean, WSJF_ONeill);

        if (Math.abs(ResidM - WSJF_Accommodation) < 0.00001) {
            setMinComWSJF('Accommodation');
        }
        else if (Math.abs(ResidM - WSJF_Downs) < 0.00001) {
            setMinComWSJF('Downs');
        }
        else if (Math.abs(ResidM - WSJF_Blueville) < 0.00001) {
            setMinComWSJF('Blueville');
        }
        else if (Math.abs(ResidM - WSJF_Richey) < 0.00001) {
            setMinComWSJF('Richey');
        };

        if (Math.abs(ComM - WSJF_Downtown) < 0.00001) {
            setMinResidWSJF('Downtown');
        }
        else if (Math.abs(ComM - WSJF_Lean) < 0.00001) {
            setMinResidWSJF('Lean');
        }
        else if (Math.abs(ComM - WSJF_ONeill) < 0.00001) {
            setMinResidWSJF('ONeill');
        }
        else if (Math.abs(ComM - WSJF_Extreme) < 0.00001) {
            setMinResidWSJF('Extreme');
        };
    }


    return (
        <div className='FM_Body_internal'>
            <div className='ColumnLeft'>
                {MinComWSJF !== 'Richey' ? <Card CardName={'Richey_Rich_Estate'} data={dataRichey} /> : null}
                {MinComWSJF !== 'Blueville' ? <Card CardName={'Blueville_Estate'} data={dataBlueville} /> : null}
                {MinComWSJF !== 'Downs' ? <Card CardName={'White_Downs_Estate'} data={dataDowns} /> : null}
                {MinComWSJF !== 'Accommodation' ? <Card CardName={'Scaled_Accommodation'} data={dataAccommodation} /> : null}
            </div>
            <div className='ColumnRight'>
                {MinResidWSJF !== 'Extreme' ? <Card CardName={'Extreme_Techology_Park'} data={dataExtreme} /> : null}
                {MinResidWSJF !== 'ONeill' ? <Card CardName={'ONeill_Monster_Mail'} data={dataONeill} /> : null}
                {MinResidWSJF !== 'Lean' ? <Card CardName={'Lean_Leisure_Health'} data={dataLean} /> : null}
                {MinResidWSJF !== 'Downtown' ? <Card CardName={'Downtown_Shopping_Strip'} data={dataDowntown} /> : null}
            </div>
            <button onClick={Calculate} className='FM_Save_Bottom'> Сохранить</button>
        </div>
    )
}

export default FirstModuleBody;