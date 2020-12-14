import React from 'react';
import {_getImage} from '../../services/api'

const SVGContainer = (state) => {
    let stateFirst = state.state;

    if(!!stateFirst[1]){
        stateFirst = stateFirst[1];
    }else {
        stateFirst = stateFirst[0];
    }

    let imgState = stateFirst.icon;

    return (
        <div>
            <img className='icon' src={_getImage(imgState, 4)} alt={`icon`}/>
        </div>
)
};

export default SVGContainer;