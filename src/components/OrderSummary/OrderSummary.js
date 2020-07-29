import React from 'react';
import Auxilary from '../../hoc/Auxilary';
import classes from './OrderSummary.module.css'
import Backdrop from '../Backdrop/Backdrop';

const OrderSummary = props => {

    const ingredientsList = Object.keys(props.ingredients).map(igkey =>{
       return (
        <p key={igkey}> {igkey} : {props.ingredients[igkey]} </p>
       )
    
    });
    
    
    return (
        <Auxilary>
        <Backdrop show={props.show} checkOutCancel={props.checkOutCancel}/>
        <div className={classes.OrderSummary}
            style={{
                transform : props.show ? 'translateY(0)' : 'translateY(-50%)',
                opacity : props.show ? '1' :'0' 
            }}
        >
            
            <h3>Your Order Summary is :</h3>
                {ingredientsList}
        </div>
        </Auxilary> 
    );

}

export default OrderSummary
