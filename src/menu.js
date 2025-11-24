import React from "react";
import menuitem from './images/menu-item.png'
function Menu(){


    return (<React.Fragment>
            <div className='menu p-4'>
                <div className='row'>
                <img className='MenuImage' src={menuitem} alt='menu item'></img>
                <img className='MenuImage' src={menuitem} alt='menu item'></img>
                <img className='MenuImage' src={menuitem} alt='menu item'></img>
                <img className='MenuImage' src={menuitem} alt='menu item'></img>
                </div>
            </div>
            </React.Fragment>)
}

export default Menu;