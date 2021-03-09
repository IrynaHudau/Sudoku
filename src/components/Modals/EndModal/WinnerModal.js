import React from 'react';
import cssStyles from '../EndModal/EndModal.module.css';

const winnerModal = (props) => (
    <div className={cssStyles.end_modal} style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
    }}>
        <h3>YOU ARE THE WINNER!</h3>
        <p>Good job you solve the puzzle</p>
        <p style={{color:'red'}}>{props.value}</p>
        <button onClick={props.startOverHandler}>Start Over</button>
    </div>
);

export default winnerModal;