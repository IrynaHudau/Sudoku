import React from 'react';
import cssStyles from '.././NumberControl/NumberControl.module.css';

const number = (props) => (
    <div >
        <button 
            className={!props.isActive ? cssStyles.styled : [ cssStyles.styled , cssStyles.active].join(' ')}
            onClick={props.click}
            disabled={props.activet}>
                <h3>{props.label}</h3>
        </button>
    </div>
);

export default number;