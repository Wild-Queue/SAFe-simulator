import React, {useState} from 'react';
import '../Styles/RoadMap.css'

const RoadMap = (props) => {

    let sz1 = 0, sz2 = 0, sz3 = 0;

    const [listFeatures, setListFeatures] = useState(props.features);

    const [fields, setFields] = useState([{id: 1, list: []}, {id: 2, list: []}, {id: 3, list: []}]);
    const [currentCard, setCurrentCard] = useState("");
    const [fieldId, setFieldId] = useState(0);

    function dragStartHandler(e, feature, from) {
        setCurrentCard(feature);
        setFieldId(from);
    }

    function dropHandler(e, field) {
        e.preventDefault();
        field.list.push(currentCard);
        setFields(fields.map(c => {
            if(c.id === field.id) return field;
            else return c;
        }))

        if(fieldId === 4) {
            let temp = Object.assign([], listFeatures);
            temp.splice(listFeatures.indexOf(currentCard), 1);
            setListFeatures(temp);
            return;
        }

        let temp = Object.assign([{}], fields[fieldId - 1]);
        temp.list.splice(fields[fieldId - 1].list.indexOf(currentCard), 1);
        setFields(fields.map(c => {
            if(c.id === fieldId) return temp;
            return c;
        }))
    }


    function dropToFieldHandler(e, field) {
        if(fieldId === 4) return;
        setListFeatures([...listFeatures, currentCard]);

        let temp = Object.assign([{}], fields[fieldId - 1]);
        temp.list.splice(fields[fieldId - 1].list.indexOf(currentCard), 1);
        setFields(fields.map(c => {
            if(c.id === fieldId) return temp;
            return c;
        }))

    }

    return (
        <div className="RoadShell">
            <div className="PI">
                {fields.map(field =>
                    <div className="PI1">
                        <div className="sz"> <strong> {sz1}/540 </strong></div>
                        <div onDrop={(e) => dropHandler(e, field)}
                             onDragOver={(e) => e.preventDefault()}
                             className="field">
                            {field.list.map(feature =>
                                <div draggable={true}
                                     onDragStart={(e) => dragStartHandler(e, feature, field.id)}
                                     className="feature">
                                    <img height="100%" alt="" src={require('../images/' + feature + '.jpg')}/>
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
                         className="feature">
                        <img height="100%" alt="" src={require('../images/' + feature + '.jpg')}/>
                    </div>
                )}
            </div>

            <button className="roadConfirm" onClick={() => {props.road(0); props.menu(1); props.Pi(fields[0].list); props.PageChange.setPage('3')}}> Confirm</button>

        </div>
    );
};

export default RoadMap;
