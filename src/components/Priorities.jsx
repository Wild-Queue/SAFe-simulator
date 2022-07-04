import React, {useState} from 'react';
import '../Styles/Priorities.css';
import {szFeatures, timeout} from "../Globals/global";
import Inputs from "./Inputs";
import MyHeader2 from "./MyHeader2";

const Priorities = (props) => {

    const [cur, setCur] = useState(1);

    const ep = props.ep;

    const List = [[], [], [], [], [], [], []];

    for(let i = 0;i < ep.length;i++)
        for(let j = 0;j < szFeatures[ep[i]];j++)
            List[i + 1].push(j + 1);

    const [styleField, setStyleField] = useState('featuresField')
    const [styleEpic, setStyleEpic] = useState("epic");
    const [styleShadow, setStyleShadow] = useState('shadow off')
    const [styleSelected, setStyleSelected] = useState('styleSelected off');
    const [curSelected, setCurSelected] = useState('1');
    const [rev, setRev] = useState('');

    const ListOf = props.epicValues.find(function (e) {return e.id === ep[cur - 1]}).Input;

    const abss = {
        position: 'absolute'
    }

    return (
        <div>

            <div
                onClick={() =>
                    {setStyleShadow('shadow off');
                     setCurSelected('1');
                     setStyleField('featuresField');
                     setRev('');
                     setStyleSelected('styleSelected off');
                    }}
                className={styleShadow}>

                <div onClick={(e) => e.stopPropagation()} className={styleSelected}>
                    <img height="100%" style={abss} alt="" src={require('../images/' + ep[cur - 1] + curSelected + rev + '.jpg')}/>
                    <img onClick={async (e) =>
                    {
                        setStyleSelected('styleSelected off');
                        await timeout(700);
                        if(rev==='') setRev('rev');
                        else setRev('');
                        setStyleSelected('styleSelected');}}
                        className="rot" height="100%" alt="" src={require('../images/rotate.png')}/>
                    <Inputs input={"" + ep[cur - 1] + curSelected} setInputs={props.setInputs} dis={false} inputs={props.inputs} rev={rev}/>
                </div>
            </div>

            <MyHeader2 PageChange = {props.PageChange}/>

            <div className="listFeatures">

                <div className={styleEpic}>
                    <img height="100%" src={require('../images/' + ep[cur - 1] + '.jpg')} alt=""/>

                    <div className="epicVal fir">
                        {ListOf[0]}
                    </div>

                    <div className="epicVal sec">
                        {ListOf[1]}
                    </div>

                    <div className="epicVal thr">
                        {ListOf[2]}
                    </div>

                    <div className="epicVal sum">
                        {ListOf[3]}
                    </div>

                    <div className="ww">
                        {ListOf[4]}
                    </div>

                </div>

                <div className={styleField}>
                    {List[cur].map(feature =>
                        <div onClick={async () =>
                            {setStyleField("featuresField off");
                             setCurSelected(feature);
                             setStyleShadow('shadow')
                             setStyleSelected('styleSelected off');
                             await timeout(200);
                             setStyleSelected('styleSelected')}}
                             className= {"imFeature"}>
                                <img style={abss} height="100%" src={require('../images/' + ep[cur - 1] + feature + '.jpg')} alt=""/>
                                <Inputs input={"" + ep[cur - 1] + feature} setInputs={props.setInputs} dis={true} inputs={props.inputs}/>
                        </div>
                    )}
                </div>

                <div className= {cur !== 1 ? "leftArrow" : "leftArrow off"}>
                    <img alt="" height="100%" src={require('../images/left.png')}
                         onClick={async () => {
                             if (cur !== 1) {
                                 setStyleField("featuresField sq");
                                 setStyleEpic("epic blur");
                                 await timeout(300);
                                 setStyleEpic("epic");
                                 setCur(cur - 1);
                                 setStyleField('featuresField')
                             }
                         }
                         }/>
                </div>

                <div className={cur !== 6 ? "rightArrow" : "rightArrow off"}>
                    <img alt="" height="100%"
                        src={require('../images/right.png')}
                        onClick={async () => {
                            if(cur !== 6){
                                setStyleField("featuresField sq");
                                setStyleEpic("epic blur");
                                await timeout(300);
                                setStyleEpic("epic");
                                setCur(cur + 1);
                                setStyleField('featuresField')
                            }
                        }
                    }/>
                </div>

                <div className="buttonShellPriority">
                    <button onClick={async () =>
                    {
                        props.pr(0);
                        props.menu(1);
                        props.arrow('arrowBlue fir');
                        await timeout(200);
                        props.arrow('arrowBlue sec');
                        await timeout(400);
                        props.roadButton(false);
                    }} className="confirmPriority"> Confirm </button>
                </div>

            </div>


        </div>
    );
};

export default Priorities;
