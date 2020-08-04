import React from 'react'

const DrawerToggle = (props) =>
{
    return (
        <div onClick={props.handleSideDrawer}>
            Menu
        </div>
    );
}

export default DrawerToggle;