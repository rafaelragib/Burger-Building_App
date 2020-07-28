import React from 'react';
import Auxilary from '../../hoc/Auxilary';
import Body from '../../containers/Body/Body'

const Layout = props =>
    (
        <Auxilary>
            <div >SideBar</div>
            <Body/>
            
        </Auxilary>
    );

export default Layout;