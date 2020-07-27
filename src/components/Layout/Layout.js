import React from 'react';
import Auxilary from '../../hoc/Auxilary';
import Body from '../../containers/Body/Body'
import classes from './Layout.module.css'
const Layout = props =>
    (
        <Auxilary>
            <div >SideBar</div>
            <Body/>
            
        </Auxilary>
    );

export default Layout;