import React from 'react';
import cssStyles from '../NavigationItems/NavigationItems.module.css';

const navigationItems = () => (
    <div className={cssStyles.navbar}>
         <a href="#"><i className="fa fa-fw fa-home"></i>Home</a> 
         <a href="#"><i className="fa fa-fw fa-envelope"></i>Contact</a>   
    </div>
);

export default navigationItems;