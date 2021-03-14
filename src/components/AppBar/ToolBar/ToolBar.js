import React from 'react';
import cssStyles from '../ToolBar/ToolBar.module.css';
import MenuIcon from '../MenuIcon/MenuIcon';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={cssStyles.toolbar}>  
        <MenuIcon />     
        <nav className={cssStyles.desktop}>
            {/* <NavigationItems/> */}
        </nav>
    </header>
);

export default toolbar;