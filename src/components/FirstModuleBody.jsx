import React, { useState } from 'react';
import "../Styles/FirstModule.css";
import "../Modals/Card.jsx";
import Card from '../Modals/Card.jsx';
import '../Styles/FirstModuleBar.css';
import BarButton from '../Modals/BarButtons';

// ChosenCards = Сards that will transfer to module 2
// PageChange = Variable responsible for moving to the next module
// dataButtonLeft, dataButtonRight = Structures for displaying the card selection menu

const FirstModuleBody = function ({ ChosenCards,  PageChange, dataButtonLeft, dataButtonRight }) {
    const [Displayed_Image, setDisplayed_Image] = useState('Richey');
    let DispSet = { set: setDisplayed_Image };

    function SaveButton() {
        SortBar();
        let ep = Object.assign([], ChosenCards.epic);

        let first = -1;
        let second = -1;
        
        // Choice of 2 cards with the worst WSJF Rank
        switch (dataButtonLeft.ButtonsAgrument[3].DispaingImage) {
            case "Accommodation":
                first = 3;
                break;
            case "Downs":
                first = 5;
                break;
            case "Blueville":
                first = 2;
                break;
            case "Richey":
                first = 0;
                break;
            default:
                console.log("Card selection Error");
        }
        switch (dataButtonRight.ButtonsAgrument[3].DispaingImage) {
            case "Downtown":
                second = 7;
                break;
            case "Lean":
                second = 1;
                break;
            case "ONeill":
                second = 4;
                break;
            case "Extreme":
                second = 6;
                break;
            default:
                console.log("Card selection Error");
        };

        //Deletion of 2 cards with the worst WSJF Rank
        ep.splice(Math.min(first, second), 1);
        ep.splice(Math.max(first, second) - 1, 1);
        ChosenCards.setEpic(ep);

        // Transition to the second module
        PageChange.setPage('2');
    }

    // Sorting the card selection menu
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
            <button onClick={SaveButton} className='FM_Save_Button'> Завершить задание</button>
        </div>
    )
}

export default FirstModuleBody;