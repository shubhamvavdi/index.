import React from 'react';
import { Col } from 'react-bootstrap';

function Product({ prodData }) {
  if (!Array.isArray(prodData) || prodData.length === 0) {
    return <div>Loading products...</div>;  // Display a message if no products are available
  }

  const productList = prodData.map((v, i) => (
    <div className="box" key={i}>
      <img src={v.images[0]} alt={v.title} />
      <h5>{v.title}</h5>
    </div>
  ));

  return <Col lg={10}>{productList}</Col>;
}

export default Product;
