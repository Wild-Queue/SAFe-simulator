import React, {useState} from 'react';
import '../Styles/SecondModule.css'
import CurrentCard from "./CurrentCard";
import RoadMap from "./RoadMap";

const SecondModule = (props) => {

    let [menuActive, setMenuActive] = useState(1);
    let [prActive, setPrActive] = useState(0);
    let [roadActive, setRoadActive] = useState(0);

    let ep = Object.assign([], props.ep);;
    let feat = [];

    let size = [
        {key: "11", element: 40},  {key: "12", element: 40},  {key: "13", element: 80},  {key: "14", element: 80},
        {key: "15", element: 120},  {key: "21", element: 40},  {key: "22", element: 40},  {key: "23", element: 40},
        {key: "31", element: 80},  {key: "32", element: 40},  {key: "33", element: 80},  {key: "34", element: 80},
        {key: "41", element: 40},  {key: "42", element: 80},  {key: "51", element: 80},  {key: "52", element: 80},
        {key: "53", element: 40},  {key: "61", element: 80},  {key: "62", element: 80},  {key: "63", element: 40},
        {key: "64", element: 80},  {key: "71", element: 80},  {key: "72", element: 40},  {key: "73", element: 80},
        {key: "81", element: 40},  {key: "82", element: 40}
    ]

    let sz = [0, 5, 3, 4, 2, 3, 4, 3, 2];
    for (let i = 0; i < ep.length; i++) {
        for(let j = 0;j < sz[ep[i]]; j++)
            feat.push("" + (ep[i]) + (j + 1));
    }

    return (
        <div>
            <div className= {prActive === 1 ? 'pr' : 'pr off'}>
                <CurrentCard features = {feat} size = {size} pr = {setPrActive} menu = {setMenuActive}/>
            </div>

            <div className={roadActive === 1 ? 'roadMap' : 'roadMap off'}>
                <RoadMap road={setRoadActive} menu={setMenuActive} features={feat} Pi = {props.Pi} PageChange = {props.PageChange}/>
            </div>

            <div className = {menuActive === 1 ? 'menu' : 'menu off'}>
                <button className="features" onClick={ () => {setMenuActive(0); setPrActive(1) }}>
                    Расставить приоритеты</button>
                <button className="road" onClick={() => {setMenuActive(0); setRoadActive(1)}}>Дорожная карта</button>
                <button className="seeEp">Посмотреть эпики</button>
                <img className="city" src={require("../images/city.jpg")} alt=""/>
            </div>
        </div>
    );
};

export default SecondModule;