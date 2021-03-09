import React from 'react';
import cssStyles from '.././NumberControl/NumberControl.module.css';

const number = (props) => (
    <div >
        {/* style={{width: '3rem'}} */}
        <button 
            className={!props.isActive ? cssStyles.styled : [ cssStyles.styled , cssStyles.active].join(' ')}
            onClick={props.click}
            disabled={props.activet}>
                {props.label}
        </button>
    </div>
);

export default number;