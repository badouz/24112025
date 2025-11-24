import React from "react";
import bike from "./images/MenuBike.png"
function Menu(){
    //var elements=['']
    return (<React.Fragment>
            <div className='menu p-4'>
                <div className='row'>
                    <div clasName='column '>
                    <div className='display'>
                        <img className='bike' src={bike} alt='bike'></img>
                    </div>
                    <div className='text-center font-weight-bold'>
                    Road bike
                    </div>
                    </div>
                </div>
            </div>
            </React.Fragment>)
}

export default Menu;