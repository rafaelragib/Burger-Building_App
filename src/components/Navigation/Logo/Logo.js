import React from 'react';
import LogoPath from '../../../assets/images/burger-logo.png'
import classes from './Logo.module.css'

const Logo =(props) =>
(

    <div className={classes.Logo}>
        <img src={LogoPath} alt="My Burger App"/>
    </div>
);

export default Logo;