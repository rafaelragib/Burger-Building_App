import React from 'react';

import IngredientControlRow from '../IngredientControlRow/IngredientControlRow';
import classes from './IngredientControl.module.css'



const IngredientControl = props => {
    const ingredientTypes = props.typeOfIngredient;
    console.log(ingredientTypes);
    return (

        <div className={classes.BuildControls}>
            {ingredientTypes.map(curr=>
                {
                   return <IngredientControlRow key={curr} types={curr}/>

                })}
        </div>
    );
}
export default IngredientControl;