import React, { Component } from 'react';
import Logo from '../Navigation/Logo/Logo'
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'
import Backdrop from '../Backdrop/Backdrop'
import Auxilary from '../../hoc/Auxilary'



class SideDrawer extends Component 
{
  

    render(){
    let sideDrawerTransaction=[classes.SideDrawer,classes.Open];
    if(!this.props.showBackDrop)
    {
        sideDrawerTransaction=[classes.SideDrawer,classes.Close]
    }

    return(
        <Auxilary>
            <Backdrop show={this.props.showBackDrop} checkOutCancel={this.props.handleSideDrawer}/>
        <div className={sideDrawerTransaction.join(' ')}>
            <div className={classes.Logo}>
                    <Logo/>
                </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Auxilary>
    );
    }
}

export default SideDrawer