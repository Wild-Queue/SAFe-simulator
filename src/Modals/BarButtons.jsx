import React from "react";
import '../Styles/FirstModuleBar.css';

const BarButton = ({ Style, DispaingImage, Dispaing, Input}) => {
    function ShowPic(PictureName) {
        Dispaing.set(PictureName);
    }

    return (
        <button className={Style} onClick={() => ShowPic(DispaingImage)}>
            <h1 className='FM_Input_Button_1'>{Input[0]}</h1>
            <h1 className='FM_Input_Button_2'>{Input[1]}</h1>
            <h1 className='FM_Input_Button_3'>{Input[2]}</h1>
            <h1 className='FM_Button_SumOfInputs'>{Input[3]}</h1>
            <h1 className='FM_Button_WSHFRank'>{Input[4]}</h1>
        </button>
    )
}

export default BarButton;