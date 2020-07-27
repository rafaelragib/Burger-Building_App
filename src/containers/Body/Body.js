import React,{Component} from 'react';

import Auxilary from '../../hoc/Auxilary';
import Preview from '../../components/Preview/Preview'
import classes from './Burger.module.css'
class Body extends Component
{
    render()
    {
        return(
            <Auxilary>
            
            <div className={classes.Burger}>
                <Preview type='bread-top'/>
                <Preview type='meat'/>
                <Preview type='bread-bottom'/>
            </div>

            
            

            </Auxilary>
        );
    }
}

export default Body;