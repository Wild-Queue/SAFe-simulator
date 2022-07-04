import React, {useState} from 'react';
import '../Styles/RoadMap.css'
import {sizeFeatures, timeout} from "../Globals/global";
import MyHeader2 from "./MyHeader2";
import Inputs from "./Inputs";

const RoadMap = (props) => {

    let sz1 = 0, sz2 = 0, sz3 = 0;

    const [listFeatures, setListFeatures] = useState(props.features);

    const [fields, setFields] = useState([{id: 1, list: []}, {id: 2, list: []}, {id: 3, list: []}]);
    const [currentCard, setCurrentCard] = useState("");
    const [fieldId, setFieldId] = useState(0);
    const [szFields, setSzFields] = useState([0, 0, 0, 0]);
    const [curSelected, setCurSelected] = useState('01');
    const [shadowActive, setShadowActive] = useState(false);
    const [rev, setRev] = useState('');

    const abss = {
        position: 'absolute'
    }

    function dragStartHandler(e, feature, from) {
        setCurrentCard(feature);
        setFieldId(from);
    }

    function Max3(a, b, c){
        if(a >= b && a >= c) return a;
        if(b >= a && b >= c) return b;
        return c;
    }

    function Max2(a, b){
        if(a > b) return a;
        return b;
    }

    function ToSize(a){
        let cnt = 0
        if(a % 2 === 1) cnt = (a + 1) / 2;
        else cnt = a / 2;
        console.log(cnt);
        return (cnt * 0.27) + 'vh';
    }

    // const eee = {
    //     height: ToSize(Max2(2, Max3(szFields[1], szFields[2], szFields[3])))
    // }

    function dropHandler(e, field) {
        e.preventDefault();

        let hope = Object.assign([], szFields);
        const szValue = sizeFeatures.find(function(e) {return e.key === currentCard}).element;

        if(fieldId === 4) {
            let temp = Object.assign([], listFeatures);
            if(hope[field.id] + szValue > 540) return;
            hope[field.id] += szValue;
            temp.splice(listFeatures.indexOf(currentCard), 1);
            setSzFields(hope);
            setListFeatures(temp);
        }
        else {
            if(hope[field.id] + szValue > 540) return;
            hope[fieldId] -= szValue;
            hope[field.id] += szValue;
            let temp = Object.assign([{}], fields[fieldId - 1]);
            temp.list.splice(fields[fieldId - 1].list.indexOf(currentCard), 1);
            setSzFields(hope);
            setFields(fields.map(c => {
                if (c.id === fieldId) return temp;
                return c;
            }))
        }

        field.list.push(currentCard);
        setFields(fields.map(c => {
            if(c.id === field.id) return field;
            else return c;
        }))

    }


    function dropToFieldHandler(e, field) {
        if(fieldId === 4) return;

        let hope = Object.assign([], szFields);
        const szValue = sizeFeatures.find(function(e) {return e.key === currentCard}).element;

        hope[fieldId] -= szValue;

        setListFeatures([...listFeatures, currentCard]);

        let temp = Object.assign([{}], fields[fieldId - 1]);
        temp.list.splice(fields[fieldId - 1].list.indexOf(currentCard), 1);
        setSzFields(hope);
        setFields(fields.map(c => {
            if(c.id === fieldId) return temp;
            return c;
        }))

    }

    function NextPage() {
        let clone = [];
        for (let i = 0; i < fields[0].list.length; i++){
            if (['01','21','32','34','41','61','63','71','72','81','91'].includes(fields[0].list[i])){
                clone.push(fields[0].list[i]);
            }
        }  
        props.Pi(clone);
        props.PageChange.setPage('3');
    }

    return (

        <div className="RoadShell">

            <div onClick={() => {setShadowActive(false); setRev('')}} className={shadowActive ? "shadowRoadMap" : "shadowRoadMap off"}>
                <div onClick={(e) => e.stopPropagation()} className="shadowIm">
                    <img style={abss} height="100%" alt="" src={require('../images/' + curSelected + rev + '.jpg')}/>
                    <img onClick={() =>{
                        if(rev === '') setRev('rev');
                        else setRev('');
                    }} className="rot" style={abss} height="100%" alt="" src={require('../images/rotate.png')}/>
                    <Inputs input={curSelected} setInputs={props.setInputs} dis={false} inputs={props.inputs} rev={rev}/>
                </div>
            </div>

            <MyHeader2 PageChange = {props.PageChange}/>

            <div className="PI">
                {fields.map(field =>
                    <div className="PI1">
                        <div className="sz"> <strong> {szFields[field.id]}/540 </strong></div>
                        <div onDrop={(e) => dropHandler(e, field)}
                             onDragOver={(e) => e.preventDefault()}
                             className="field">
                            {field.list.map(feature =>
                                <div draggable={true}
                                     onDragStart={(e) => dragStartHandler(e, feature, field.id)}
                                     className="feature"
                                     onDoubleClick={() =>
                                     {
                                         setCurSelected(feature);
                                         setShadowActive(true);
                                     }}>
                                    <img style={abss} height="100%" alt="" src={require('../images/' + feature + '.jpg')}/>
                                    <Inputs input={feature} setInputs={props.setInputs} dis={true} inputs={props.inputs} rev={false}/>
                                </div>
                            )}

                        </div>
                    </div>
                )}

            </div>

            <div className="cardField"
                 onDragOver={(e) => e.preventDefault()}
                 onDrop={(e) => dropToFieldHandler(e)}
                >
                {listFeatures.map(feature =>
                    <div draggable={true}
                         onDragStart={(e) => dragStartHandler(e, feature, 4)}
                         className="feature"
                         onDoubleClick={() =>
                         {
                             setCurSelected(feature);
                             setShadowActive(true);
                         }}>
                        <img style={abss} height="100%" alt="" src={require('../images/' + feature + '.jpg')}/>
                        <Inputs input={feature} setInputs={props.setInputs} dis={true} inputs={props.inputs} rev={false}/>
                    </div>
                )}
            </div>

            <button className="roadConfirm" onClick={async () =>
            {props.road(0); props.menu(1);
             props.Pi(fields[0].list);
             props.nextModule(false)}}> Назад </button>

            <button onClick={() => {NextPage()}} className="roadConfirm add"> Закончить модуль </button>

        </div>
    );
};

export default RoadMap;
