import React from 'react';
import cssStyles from '../Popups/WarningEmptyCell.module.css';

const warningEmptyCell = (props) => (
    <div className={cssStyles.popup} style={{ position: 'absolute',left: '50%', top:'50%'}}>
        <span className={cssStyles.popuptext}>Warning!!! Pick a number from the number field below!</span>
    </div>
); 

export default warningEmptyCell;
