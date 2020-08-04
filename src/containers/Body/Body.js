import React,{Component} from 'react';

import Auxilary from '../../hoc/Auxilary';
import Preview from '../../components/Preview/Preview'
import classes from './Body.module.css'
import IngredientControl from '../../components/IngredientControl/IngredientControl';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

const INGREDIENT_PRICE ={
    Salad:10,
    Meat:20,
    Cheese:10
}

class Body extends Component
{
    state ={
        ingredients: {
            Salad:0,
            Meat:0,
            Cheese:0
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
        const price=this.state.totalPrice+INGREDIENT_PRICE[type];
        this.setState({
            totalPrice:price,
            ingredients:updatedIngredients,
            orderButtonClicked:false
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
        const price=this.state.totalPrice-INGREDIENT_PRICE[type];
        this.setState({
            totalPrice:price,
            ingredients:updatedIngredients
        });

    }

    purchasedOrder =()=>
    {
        this.setState({
            orderButtonClicked:true
        });
    }

    cancelPurchasedOrder =()=>
    {
        this.setState({
            orderButtonClicked:false
        });
    }


    render()
    {
        let disableOrder=true;
        const disableInfo= {
            ...this.state.ingredients
        }
        for(let i in disableInfo)
        {
            disableInfo[i]=disableInfo[i]<=0;
        }
        //console.log(disableInfo);

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
        
        if(ingredient.length===0){
            ingredient= <p className={classes.EmptyMessage}>Please add ingredients!</p>
            disableOrder=false;    
        }
        
            //console.log(ingredientVal);
        
        
         return(
            <Auxilary>
            <OrderSummary show={this.state.orderButtonClicked} 
            ingredients={this.state.ingredients}
            checkOutCancel={this.cancelPurchasedOrder}
            price={this.state.totalPrice}/>
            <div className={classes.Burger}>
                <Preview type='bread-top'/>
                {ingredient}
                <Preview type='bread-bottom'/>
            </div>
            <IngredientControl ingredientAdded={this.addIngredient}
            ingredientRemoved={this.removeIngredient} 
            typeOfIngredient={ingredientName}
            disableInfo={disableInfo}
            price={this.state.totalPrice} />
            <button className={classes.OrderButton} disabled={!disableOrder} onClick={this.purchasedOrder} >ORDER NOW!</button>
            

            </Auxilary>
        );
    }
}

export default Body;