import React, {useState} from 'react';
import '../Styles/SecondModule.css'
import RoadMap from "./RoadMap";
import Priorities from "./Priorities";
import {szFeatures} from '../Globals/global';
import MyHeader2 from "./MyHeader2";
import Back from '../images/cityBack.jpg'

const SecondModule = (props) => {

    let [menuActive, setMenuActive] = useState(1);
    let [prActive, setPrActive] = useState(0);
    const [roadActive, setRoadActive] = useState(0);
    const [arrowStyle, setArrowStyle] = useState('arrowBlue fir');
    const [roadButton, setRoadButton] = useState(true);
    const [nextModule, setNextModule] = useState(true);

    let ep = props.ep;
    let feat = [];

    function NextPage() {
        let clone = [];
        for (let i = 0; i < props.PiArr.length; i++){
            if (["01","21","32","34","41","61","63","71","72","81","91"].includes(props.PiArr[i])){
                clone.push(props.PiArr[i]);
            }
        }  
        props.Pi(clone);
        props.PageChange.setPage('3');
    }

    for (let i = 0; i < ep.length; i++) {
        for(let j = 0;j < szFeatures[ep[i]]; j++)
            feat.push("" + ep[i] + (j + 1));
    }

    const [inputs, setInputs] = useState([]);

    if(inputs.length === 0) {
        let temp = [];
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < szFeatures[ep[i]]; j++) {
                temp.push({el: "" + ep[i] + (j + 1), fir: 0, sec: 0, thr: 0});
            }
        }
        setInputs(temp);
    }

    const CityBack = {
        position: 'absolute',
        backgroundImage: 'url(' + Back + ')',
        width: '100vw',
        height: '100vh'
    }

    const epicValues = [...props.left, ...props.right];

    return (
        <div className="ShellSecondModule">

            <div className={menuActive ? 'backGround' : 'backGround off'} style={CityBack}>

            </div>

            <div className={menuActive ? 'header22' : 'header22 off'}>
                <MyHeader2 PageChange = {props.PageChange}/>
            </div>

            <div className= {prActive ? 'pr' : 'pr off'}>
                <Priorities ep={ep} inputs={inputs} setInputs={setInputs}
                            pr={setPrActive} menu={setMenuActive} arrow={setArrowStyle}
                            roadButton={setRoadButton} epicValues={epicValues}/>
            </div>

            <div className={roadActive ? 'roadMap' : 'roadMap off'}>
                <RoadMap road={setRoadActive} menu={setMenuActive}
                         features={feat} Pi = {props.Pi} arrow={setArrowStyle}
                         nextModule={setNextModule}/>
            </div>

            <div className = {menuActive ? 'menu' : 'menu off'}>
                <button className="featuresMenu" onClick={ () => {setMenuActive(0); setPrActive(1) }}>
                    Расставить приоритеты</button>
                <button disabled={roadButton} className="road" onClick={() => {setMenuActive(0); setRoadActive(1)}}>Дорожная карта</button>
                <button disabled={nextModule} className="nextModule" onClick={() => NextPage()}>Следующий модуль</button>
                <div className={arrowStyle}>
                    <img height="100%" alt="" src={require('../images/BlueArrow.png')}/>
                </div>
            </div>

        </div>
    );
};

export default SecondModule;