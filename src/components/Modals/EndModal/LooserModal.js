import React from 'react';
import cssStyles from '../EndModal/EndModal.module.css';

const looserModal = (props) => (
    <div className={cssStyles.end_modal} style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
    }}>
        <h3>YOUR SUDOKU PUZZLE SOLVED INCORRECTLY!</h3>
        <p>You have some mistakes ...</p>
        <p style={{color:'red'}}>{props.value}</p>
        <button onClick={props.startOverHandler}>Start Over</button>
    </div>
);

export default looserModal;
