import React from "react";
import menuitem from './images/menu-item.png'
function Menu(){


    return (<React.Fragment>
            <div className='menu'>
                <div className='row'>
                <img src={menuitem} alt='menu item'></img>
                <img src={menuitem} alt='menu item'></img>
                <img src={menuitem} alt='menu item'></img>
                <img src={menuitem} alt='menu item'></img>
                </div>
            </div>
            </React.Fragment>)
}

export default Menu;