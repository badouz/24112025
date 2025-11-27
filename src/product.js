import React from "react";

const prodlist = [
  { id: 1, image: "/img/product1.png", name: "Bike Alpha 205", description: "Lightweight speed machine for smooth roads", price: "750.00$" },
  { id: 2, image: "/img/product1.png", name: "Bike Alpha 205", description: "Lightweight speed machine for smooth roads", price: "750.00$" },
  { id: 3, image: "/img/product1.png", name: "Bike Alpha 205", description: "Lightweight speed machine for smooth roads", price: "750.00$" },
];

function ProductLeft({ image, name, description, price }) {
  return (
    <div className="product product-left">
      <div className='product-backgroundL'>
      <img className="product-img" src={image} alt={name} />
      </div>
      <div className="product-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <span className="price">{price}</span>
        <button className="buy-btn">Buy</button>
      </div>
    </div>
  );
}

function ProductRight({ image, name, description, price }) {
  return (
    <div className="product product-right">
      <div className='product-backgroundR'>
      <img className="product-img" src={image} alt={name} />
      </div>
      <div className="product-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <span className="price">{price}</span>
        <button className="buy-btn">Buy</button>
      </div>
    </div>
  );
}

function Product() {
  return (
    <div className="product-list">
      {prodlist.map((i, index) =>
        index % 2 === 0 ? (
          <ProductLeft key={i.id} {...i} />
        ) : (
          <ProductRight key={i.id} {...i} />
        )
      )}
    </div>
  );
}

export default Product;
