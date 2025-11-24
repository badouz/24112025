import React from "react";
import bike from "./images/MenuBike.png";
const products = [
  { image:bike, text: "Road Bike" },
  { image:bike, text: "Road Bike" },
  { image:bike, text: "Road Bike" },
  { image:bike, text: "Road Bike" }
];
function MenuElement(props) {
  return (
    <React.Fragment>
      <div className="menu-element col d-flex flex-column align-items-center">
        <div className="display mb-2">
          <img className="bike" src={props.image} alt="bike" />
        </div>
        <div className="text-center font-weight-bold">
          {props.text}
        </div>
      </div>
    </React.Fragment>
  );
}
function Menu() {
  return (
    <React.Fragment>
      <div className="menu">
        <div className="row no-wrap">
          {products.map((p, i) => ( <MenuElement key={i}image={p.image}text={p.text}/>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
export default Menu;
