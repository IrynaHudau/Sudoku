import React from 'react';
import cssStyles from '../MenuIcon/MenuIcon.module.css';

const menuIcon = (props) => (
    <div>
        <div className={cssStyles.bar1}>
            <div className={cssStyles.bar4}></div>
            <div className={cssStyles.bar5}></div>
            <div className={cssStyles.bar6}></div>
        </div>
        <div className={cssStyles.bar2}></div>
        <div className={cssStyles.bar3}></div>
    </div>
);

export default menuIcon;