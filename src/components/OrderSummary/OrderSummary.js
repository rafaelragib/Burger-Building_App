import React, { Component } from 'react';
import Auxilary from '../../hoc/Auxilary';
import classes from './OrderSummary.module.css'
import Backdrop from '../Backdrop/Backdrop';

class OrderSummary extends Component
{
    shouldComponentUpdate(nextProps,nextState)
    {
        if(nextProps.show!== this.props.show)
            return true;
        else
            return false;
    }
    componentDidUpdate()
    {
        console.log('[OrderSummary] Call');
    }
    render()
    {
        const ingredientsList = Object.keys(this.props.ingredients).map(igkey =>{
            return (
             <p key={igkey}> {igkey} : {this.props.ingredients[igkey]} </p>
            )
         
         });
        return (
            <Auxilary>
        <Backdrop show={this.props.show} checkOutCancel={this.props.checkOutCancel}/>
        <div className={classes.OrderSummary}
            style={{
                transform : this.props.show ? 'translateY(0)' : 'translateY(-50%)',
                opacity : this.props.show ? '1' :'0' 
            }}
        >
            
            <h3>Your Order Summary is :</h3>
                {ingredientsList}
        <h3>Total Price is ${this.props.price}</h3>
        </div>
        </Auxilary> 
        );
    }
}

export default OrderSummary
