import React from 'react';
import classes from './IngredientControlRow.module.css'

const IngredientControlRow = props =>
(
    <div className={classes.BuildControl}>
        <div className={classes.Label} >{props.types}</div>
        <button className={classes.Less} onClick={props.removed} disabled={props.disableInfo}>Less</button>
        <button className={classes.More} onClick={props.added}>More</button>

    </div>
);

export default IngredientControlRow;