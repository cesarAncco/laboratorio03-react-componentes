/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const products = [
  {
    id: 1,
    name: "tiramisu cake",
    url: "https://t3.ftcdn.net/jpg/03/28/01/60/240_F_328016079_nUH0w4v1lB4bUrmoIdrn1S68DhlxoDCS.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 10,
    isAvailable: true
  },
  {
    id: 2,
    name: "chia pudding",
    url: "https://as1.ftcdn.net/v2/jpg/01/35/36/48/1000_F_135364853_H5ixFlEMlhthu5JoVzNijwbVvsA1OiuV.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 9,
    isAvailable: true
  },
  {
    id: 3,
    name: "cheesecake",
    url: "https://as2.ftcdn.net/v2/jpg/03/01/97/87/1000_F_301978781_XIKYcMAKlL7zHp5DHwMK2Jt00YPQYY9v.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 12,
    isAvailable: false
  },
  {
    id: 4,
    name: "chocolate cake",
    url: "https://as2.ftcdn.net/v2/jpg/01/25/44/31/1000_F_125443129_koNQT6B86ZS72fnVg8v6GXdc1nzCtNfU.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 11,
    isAvailable: false
  },
  {
    id: 5,
    name: "apple pie",
    url: "https://as1.ftcdn.net/v2/jpg/00/57/21/42/1000_F_57214243_6eNNMyucjbtCyM2x5tYLJm2AcBjEM0mI.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 10,
    isAvailable: true
  },
  {
    id: 6,
    name: "carrot cake",
    url: "https://as2.ftcdn.net/v2/jpg/00/75/43/03/1000_F_75430323_PaBwezntw5lXGe3QuafQHa6k1UIuQLlg.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 12,
    isAvailable: false
  },
];

const createProductCard = (product) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4 d-flex" key={product.id}>
      <div className="card flex-fill">
        <img src={product.url} className="card-img-top p-4" alt={product.name} />
        <div className="card-body">
          <p className="card-title text-uppercase">{product.name}</p>
          <p className="card-text">{product.description}</p>
          <p className="card-text">$ {product.price}</p>
          <button className="btn btn-secondary">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

const generateHtmlContent = () => {
  return products.map((product) => createProductCard(product));
};

const Productos = () => {
  const productCards = generateHtmlContent();
  return (
    <div className="p-4">
      <div className="row">
        <div className="col-12 col-md-12 mb-12">
          <div id="product-container" className="row">
            {productCards}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;
