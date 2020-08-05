import React, { Component } from 'react';
import Auxilary from '../../hoc/Auxilary';
import Body from '../Body/Body'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/SideDrawer/SideDrawer'



class Layout extends Component {
    state = {
        showBackDrop: false
    }

    handleSideDrawer = () => {
        let toggle=this.state.showBackDrop;
        toggle=!toggle;
        this.setState({
            showBackDrop: toggle
        })
    }
    render() {
        return (
            <Auxilary>
                <SideDrawer showBackDrop={this.state.showBackDrop} handleSideDrawer={this.handleSideDrawer} />
                <Toolbar handleSideDrawer={this.handleSideDrawer} />
                <Body />

            </Auxilary>
        );
    }
}
export default Layout;