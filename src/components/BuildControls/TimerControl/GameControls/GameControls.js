import React from 'react';
import cssStyles from '../GameControls/GameControls.module.css';

const gameControls = (props) => (

    <div style={{paddingTop: '20px' , paddingRight:'10px', paddingBottom:'20px', paddingLeft:'20px' }}>
        <button className={cssStyles.btn}  disabled={props.active} onClick={props.clicked}>New Game</button>
    </div>
);

export default gameControls;