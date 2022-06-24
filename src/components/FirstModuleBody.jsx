import React, { useState } from 'react';
import "../Styles/FirstModule.css";
import "../Modals/Card.jsx";
import Card from '../Modals/Card.jsx';
import '../Styles/FirstModuleBar.css';
import BarButton from '../Modals/BarButtons';

const FirstModuleBody = function ({ ChosenCards,  PageChange }) {
    const [Displayed_Image, setDisplayed_Image] = useState('Richey');
    let DispSet = { set: setDisplayed_Image };

    // 1 - input-1; 2 - input-2; 3 - input-3; 4 - CoD; 5 - WSJF Rank
    const [ButtonsAgrumentLeft, setButtonsAgrumentLeft] = useState([{ Style: 'FM_Richey_Button', DispaingImage: "Richey", Input: ['0', '0', '0', '0', '0'] },
    { Style: 'FM_Blueville_Button', DispaingImage: "Blueville", Input: ['0', '0', '0', '0', '0'] },
    { Style: 'FM_Downs_Button', DispaingImage: "Downs", Input: ['0', '0', '0', '0', '0'] },
    { Style: 'FM_Accommodation_Button', DispaingImage: "Accommodation", Input: ['0', '0', '0', '0', '0'] }]);
    let dataButtonLeft = { ButtonsAgrument: ButtonsAgrumentLeft, setButtonsAgrument: setButtonsAgrumentLeft };

    const [ButtonsAgrumentRight, setButtonsAgrumentRight] = useState([{ Style: 'FM_Extreme_Button', DispaingImage: "Extreme", Input: ['0', '0', '0', '0', '0'] },
    { Style: 'FM_ONeill_Button', DispaingImage: "ONeill", Input: ['0', '0', '0', '0', '0'] },
    { Style: 'FM_Lean_Button', DispaingImage: "Lean", Input: ['0', '0', '0', '0', '0'] },
    { Style: 'FM_Downtown_Button', DispaingImage: "Downtown", Input: ['0', '0', '0', '0', '0'] }]);
    let dataButtonRight = { ButtonsAgrument: ButtonsAgrumentRight, setButtonsAgrument: setButtonsAgrumentRight };

    function SaveButton() {
        SortBar();
        let ep = Object.assign([], ChosenCards.epic);

        switch (ButtonsAgrumentLeft[3].DispaingImage) {
            case "Accommodation":
                //ChosenCards.Accommodation = false;
                ep.splice(4, 1);
                break;
            case "Downs":
                //ChosenCards.Downs = false;
                ep.splice(6, 1);
                break;
            case "Blueville":
                //ChosenCards.Blueville = false;
                ep.splice(3, 1);
                break;
            case "Richey":
                //ChosenCards.Richey = false;
                ep.splice(1, 1);
                break;
            default:
                console.log("Card selection Error");
        }
        switch (ButtonsAgrumentRight[3].DispaingImage) {
            case "Downtown":
                //ChosenCards.Downtown = false;
                ep.splice(8, 1);
                break;
            case "Lean":
                //ChosenCards.Lean = false;
                ep.splice(3, 1);
                break;
            case "ONeill":
                //ChosenCards.ONeill = false;
                ep.splice(5, 1);
                break;
            case "Extreme":
                //ChosenCards.Extreme = false;
                ep.splice(7, 1);
                break;
            default:
                console.log("Card selection Error");
        };
        ChosenCards.setEpic(ep);
        //window.location.assign('/SecondModule');
        PageChange.setPage('2');
    }

    function SortBar() {
        let ArgLeft = Object.assign([], ButtonsAgrumentLeft);
        ArgLeft.sort((a, b) => a.Input[4] > b.Input[4] ? -1 : 1);
        setButtonsAgrumentLeft(ArgLeft);


        let ArgRight = Object.assign([], ButtonsAgrumentRight);
        ArgRight.sort((a, b) => a.Input[4] > b.Input[4] ? -1 : 1);
        setButtonsAgrumentRight(ArgRight);
    }

    return (
        <div className='FM_Body_internal'>
            <div className='FM_ColumnLeft'>
                {Displayed_Image === 'Richey' ? <Card CardName={'Richey_Rich_Estate'} data={dataButtonLeft} ImageName={Displayed_Image} /> : null}
                {Displayed_Image === 'Blueville' ? <Card CardName={'Blueville_Estate'} data={dataButtonLeft} ImageName={Displayed_Image} /> : null}
                {Displayed_Image === 'Downs' ? <Card CardName={'White_Downs_Estate'} data={dataButtonLeft} ImageName={Displayed_Image} /> : null}
                {Displayed_Image === 'Accommodation' ? <Card CardName={'Scaled_Accommodation'} data={dataButtonLeft} ImageName={Displayed_Image} /> : null}
                {Displayed_Image === 'Extreme' ? <Card CardName={'Extreme_Techology_Park'} data={dataButtonRight} ImageName={Displayed_Image} /> : null}
                {Displayed_Image === 'ONeill' ? <Card CardName={'ONeill_Monster_Mail'} data={dataButtonRight} ImageName={Displayed_Image} /> : null}
                {Displayed_Image === 'Lean' ? <Card CardName={'Lean_Leisure_Health'} data={dataButtonRight} ImageName={Displayed_Image} /> : null}
                {Displayed_Image === 'Downtown' ? <Card CardName={'Downtown_Shopping_Strip'} data={dataButtonRight} ImageName={Displayed_Image} /> : null}
            </div>
            <div className='FM_ColumnRight'>
                <div className='FM_ButtonColumnLeft'>
                    <BarButton Style={ButtonsAgrumentLeft[0].Style} DispaingImage={ButtonsAgrumentLeft[0].DispaingImage} Dispaing={DispSet} Input={ButtonsAgrumentLeft[0].Input} />
                    <BarButton Style={ButtonsAgrumentLeft[1].Style} DispaingImage={ButtonsAgrumentLeft[1].DispaingImage} Dispaing={DispSet} Input={ButtonsAgrumentLeft[1].Input} />
                    <BarButton Style={ButtonsAgrumentLeft[2].Style} DispaingImage={ButtonsAgrumentLeft[2].DispaingImage} Dispaing={DispSet} Input={ButtonsAgrumentLeft[2].Input} />
                    <BarButton Style={ButtonsAgrumentLeft[3].Style} DispaingImage={ButtonsAgrumentLeft[3].DispaingImage} Dispaing={DispSet} Input={ButtonsAgrumentLeft[3].Input} />
                </div>
                <div className='FM_ButtonColumnRight'>
                    <BarButton Style={ButtonsAgrumentRight[0].Style} DispaingImage={ButtonsAgrumentRight[0].DispaingImage} Dispaing={DispSet} Input={ButtonsAgrumentRight[0].Input} />
                    <BarButton Style={ButtonsAgrumentRight[1].Style} DispaingImage={ButtonsAgrumentRight[1].DispaingImage} Dispaing={DispSet} Input={ButtonsAgrumentRight[1].Input} />
                    <BarButton Style={ButtonsAgrumentRight[2].Style} DispaingImage={ButtonsAgrumentRight[2].DispaingImage} Dispaing={DispSet} Input={ButtonsAgrumentRight[2].Input} />
                    <BarButton Style={ButtonsAgrumentRight[3].Style} DispaingImage={ButtonsAgrumentRight[3].DispaingImage} Dispaing={DispSet} Input={ButtonsAgrumentRight[3].Input} />
                </div>
            </div>
            <button onClick={SortBar} className='FM_Sort_Button'> Отсортировать карточки</button>
            <button onClick={SaveButton} className='FM_Save_Button'> Сохранить</button>
        </div>
    )
}

export default FirstModuleBody;