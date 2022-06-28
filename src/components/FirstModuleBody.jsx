import React, { useState } from 'react';
import "../Styles/FirstModule.css";
import "../Modals/Card.jsx";
import Card from '../Modals/Card.jsx';
import '../Styles/FirstModuleBar.css';
import BarButton from '../Modals/BarButtons';

const FirstModuleBody = function ({ ChosenCards,  PageChange, dataButtonLeft, dataButtonRight }) {
    const [Displayed_Image, setDisplayed_Image] = useState('Richey');
    let DispSet = { set: setDisplayed_Image };

    function SaveButton() {
        SortBar();
        let ep = Object.assign([], ChosenCards.epic);

        let first = -1;
        let second = -1;

        switch (dataButtonLeft.ButtonsAgrument[3].DispaingImage) {
            case "Accommodation":
                //ChosenCards.Accommodation = false;
                first = 3;
                break;
            case "Downs":
                //ChosenCards.Downs = false;
                first = 5;
                break;
            case "Blueville":
                //ChosenCards.Blueville = false;
                first = 2;
                break;
            case "Richey":
                //ChosenCards.Richey = false;
                first = 0;
                break;
            default:
                console.log("Card selection Error");
        }
        switch (dataButtonRight.ButtonsAgrument[3].DispaingImage) {
            case "Downtown":
                //ChosenCards.Downtown = false;
                second = 7;
                break;
            case "Lean":
                //ChosenCards.Lean = false;
                second = 1;
                break;
            case "ONeill":
                //ChosenCards.ONeill = false;
                second = 4;
                break;
            case "Extreme":
                //ChosenCards.Extreme = false;
                second = 6;
                break;
            default:
                console.log("Card selection Error");
        };

        ep.splice(Math.min(first, second), 1);
        ep.splice(Math.max(first, second) - 1, 1);
        ChosenCards.setEpic(ep);
        //window.location.assign('/SecondModule');
        PageChange.setPage('2');
    }

    function SortBar() {
        let ArgLeft = Object.assign([], dataButtonLeft.ButtonsAgrument);
        ArgLeft.sort((a, b) => a.Input[4] > b.Input[4] ? -1 : 1);
        dataButtonLeft.setButtonsAgrument(ArgLeft);


        let ArgRight = Object.assign([], dataButtonRight.ButtonsAgrument);
        ArgRight.sort((a, b) => a.Input[4] > b.Input[4] ? -1 : 1);
        dataButtonRight.setButtonsAgrument(ArgRight);
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
                    <BarButton Style={dataButtonLeft.ButtonsAgrument[0].Style} DispaingImage={dataButtonLeft.ButtonsAgrument[0].DispaingImage} Dispaing={DispSet} Input={dataButtonLeft.ButtonsAgrument[0].Input} />
                    <BarButton Style={dataButtonLeft.ButtonsAgrument[1].Style} DispaingImage={dataButtonLeft.ButtonsAgrument[1].DispaingImage} Dispaing={DispSet} Input={dataButtonLeft.ButtonsAgrument[1].Input} />
                    <BarButton Style={dataButtonLeft.ButtonsAgrument[2].Style} DispaingImage={dataButtonLeft.ButtonsAgrument[2].DispaingImage} Dispaing={DispSet} Input={dataButtonLeft.ButtonsAgrument[2].Input} />
                    <BarButton Style={dataButtonLeft.ButtonsAgrument[3].Style} DispaingImage={dataButtonLeft.ButtonsAgrument[3].DispaingImage} Dispaing={DispSet} Input={dataButtonLeft.ButtonsAgrument[3].Input} />
                </div>
                <div className='FM_ButtonColumnRight'>
                    <BarButton Style={dataButtonRight.ButtonsAgrument[0].Style} DispaingImage={dataButtonRight.ButtonsAgrument[0].DispaingImage} Dispaing={DispSet} Input={dataButtonRight.ButtonsAgrument[0].Input} />
                    <BarButton Style={dataButtonRight.ButtonsAgrument[1].Style} DispaingImage={dataButtonRight.ButtonsAgrument[1].DispaingImage} Dispaing={DispSet} Input={dataButtonRight.ButtonsAgrument[1].Input} />
                    <BarButton Style={dataButtonRight.ButtonsAgrument[2].Style} DispaingImage={dataButtonRight.ButtonsAgrument[2].DispaingImage} Dispaing={DispSet} Input={dataButtonRight.ButtonsAgrument[2].Input} />
                    <BarButton Style={dataButtonRight.ButtonsAgrument[3].Style} DispaingImage={dataButtonRight.ButtonsAgrument[3].DispaingImage} Dispaing={DispSet} Input={dataButtonRight.ButtonsAgrument[3].Input} />
                </div>
            </div>
            <button onClick={SortBar} className='FM_Sort_Button'> Отсортировать карточки</button>
            <button onClick={SaveButton} className='FM_Save_Button'> Сохранить</button>
        </div>
    )
}

export default FirstModuleBody;