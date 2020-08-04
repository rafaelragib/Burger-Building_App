import React from 'react'
import classes from './NavigationItems.module.css'

const NavigationItems = (props) =>
(
    <ul className={classes.NavigationItems}>
        <li>
            <a href="/" className={classes.active}>CheckOut</a>
        </li>
     </ul>
);

export default NavigationItems; 