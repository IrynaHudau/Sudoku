import React from 'react';
import cssStyles from '../GameControls/GameControls.module.css';

const gameControls = (props) => (

    <div style={{padding: '20px'}}>
        <button className={cssStyles.btn}  disabled={props.active} onClick={props.clicked}>New Game</button>
    </div>
);

export default gameControls;