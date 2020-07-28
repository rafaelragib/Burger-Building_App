import React from 'react';

import IngredientControlRow from '../IngredientControlRow/IngredientControlRow';
import classes from './IngredientControl.module.css'



const IngredientControl = props => {
    const ingredientTypes = props.typeOfIngredient;
    console.log(ingredientTypes);
    return (

        <div className={classes.BuildControls}>
            <p><strong>{props.price}</strong></p>
            {ingredientTypes.map(curr=>
                {
                   return <IngredientControlRow key={curr} 
                   types={curr} 
                   added={()=> props.ingredientAdded(curr)}
                   removed={()=>props.ingredientRemoved(curr)}
                   disableInfo={props.disableInfo[curr]}
                   />

                })}
        </div>
    );
}
export default IngredientControl;