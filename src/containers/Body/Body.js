import React,{Component} from 'react';

import Auxilary from '../../hoc/Auxilary';
import Preview from '../../components/Preview/Preview'
import classes from './Body.module.css'
import IngredientControl from '../../components/IngredientControl/IngredientControl';

const INGREDIENT_PRICE ={
    salad:10,
    meat:20,
    cheese:10
}

class Body extends Component
{
    state ={
        ingredients: {
            salad:0,
            meat:0,
            cheese:0
        },
        totalPrice: 10
    }

    addIngredient = (type) =>
    {
        let count=this.state.ingredients[type];
        count++;
        const updatedIngredients ={
            ...this.state.ingredients
        };
        updatedIngredients[type]=count;
        const price=this.state.price+INGREDIENT_PRICE[type];
        this.setState({
            totalPrice:price,
            ingredients:updatedIngredients
        });

    }
    removeIngredient = (type) =>
    {
        let count=this.state.ingredients[type];
        count--;
        const updatedIngredients ={
            ...this.state.ingredients
        };
        updatedIngredients[type]=count;
        const price=this.state.price-INGREDIENT_PRICE[type];
        this.setState({
            totalPrice:price,
            ingredients:updatedIngredients
        });

    }
    render()
    {
        const disableInfo= {
            ...this.state.ingredients
        }
        for(let i in disableInfo)
        {
            disableInfo[i]=disableInfo[i]<=0;
        }
        console.log(disableInfo);

        const ingredientName=Object.keys(this.state.ingredients);

        let ingredient= Object.keys(this.state.ingredients).map(igKey=>{
            // We create new array and in the array there are subarray which are created by their keyvalue 
            //(eg.salad,cheese)
            //the new array is creating by the length that we are getting from the value of the state
            //we then map an function on the subarray.
            return [...Array(this.state.ingredients[igKey])].map((_,i)=>
            {
                return <Preview key={igKey+i} type={igKey} />
            });
        }).reduce((acc,curr)=>{
            return acc.concat(curr);
        },[]);
        
        if(ingredient.length===0)
            ingredient= <p className={classes.EmptyMessage}>Please add ingredients!</p>
         //console.log(ingredientVal);
        return(
            <Auxilary>
            
            <div className={classes.Burger}>
                <Preview type='bread-top'/>
                {ingredient}
                <Preview type='bread-bottom'/>
            </div>
            <IngredientControl ingredientAdded={this.addIngredient}
            ingredientRemoved={this.removeIngredient} 
            typeOfIngredient={ingredientName}
            disableInfo={disableInfo} />
            
            

            </Auxilary>
        );
    }
}

export default Body;