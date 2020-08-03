import React from 'react';
import Auxilary from '../../hoc/Auxilary';
import Body from '../../containers/Body/Body'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const Layout = props =>
    (
        <Auxilary>
            <Toolbar/>
            <Body/>
            
        </Auxilary>
    );

export default Layout;