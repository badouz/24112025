import React from "react";
import bike from "./images/MenuBike.png";

function MenuElement() {
  return (
    <React.Fragment>
    <div className="menu-element col d-flex flex-column align-items-center">
      <div className="display mb-2">
        <img className="bike" src={bike} alt="bike" />
      </div>
      <div className="text-center font-weight-bold">Road bike</div>
    </div>
    </React.Fragment>
  );
}

function Menu() {
  return (<React.Fragment>
    <div className="menu">
      <div className="row no-wrap ">
        {MenuElement()}
        {MenuElement()}
        {MenuElement()}
        {MenuElement()}
      </div>
    </div>
    </React.Fragment>
  );
}

export default Menu;
