import React, {useState} from 'react';
import '../Styles/MyHeader2.css'
import '../Styles/RoadMap.css'

const MyHeader2 = (props) => {


    const [shadowActive, setShadowActive] = useState(false);

    function MoveHome() {
        props.PageChange.setPage('0');
    }

    return (
        <div className="headerPriority">

            <div onClick={() => setShadowActive(false)} className={shadowActive ? "shadowRoadMap" : "shadowRoadMap off"}>
                <div className="module2Content">
                        <p>В модуле 1 вы определили приоритетность эпиков для SAFe City и определили "3 лучших жилых и 3 лучших коммерческих функции".  <br />
                            Предполагая, что эпики из Модуля 1 прошли через Portfolio Kanban и были одобрены, теперь мы подготовим дорожную карту, основанную на функциях, определенных в приоритетных эпиках.  У нас есть один Release Train, и в этом модуле мы расставим приоритеты функций из эпиков и составим нашу дорожную карту PI.
                            В SAFe функции являются нашим основным средством доставки ценности.  Мы применяем ту же модель экономической приоритезации.<br />
                            После определения приоритетов функций мы можем наложить эти приоритеты на прогнозы пропускной способности поездов для создания дорожных карт "скользящей волны".
                            <br /><br />
                            -Используйте емкость АРТ в размере 540 поинтов на PI<br />
                            -Для первого PI обеспечьте распределение мощностей примерно 50/50 между жилыми и коммерческими объектами.  <br />
                            -Для второго и третьего PI распределение мощностей должно соответствовать здравому смыслу.<br />
                            -Используйте приоритеты "наилучших усилий", обращаясь к своим эпосам для контекста, но применяя мышление COD и WSJF для разделения функций на более мелкие элементы.<br />
                        </p>
                </div>
            </div>

            <div className="title22"><h1>SAFe Simulator</h1></div>

            <div className="homePriority">
                <button className="buttonHomePriority"  onClick={() => MoveHome()} >Домой</button>
            </div>

            <div className="readModulePriority">
                <button onClick={() => {setShadowActive(true)}} className="buttonModulePriority">Описание модуля</button>
            </div>
        </div>
    );
};

export default MyHeader2;
