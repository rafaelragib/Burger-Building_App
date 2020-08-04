import React, { Component } from 'react';
import Auxilary from '../../hoc/Auxilary';
import Body from '../../containers/Body/Body'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../SideDrawer/SideDrawer'



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