import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { cartData } from "../../../dummyData";
import { Container, Table } from "react-bootstrap";

const CartList = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    setCarts(cartData);
  }, []);

  const handleDelete = (id) => {
    const newCartsArray = carts.filter((c) => c._id !== id);
    setCarts(newCartsArray);
  };

  return (
    <Container className="my-5">
      <span className="mb-2 d-flex justify-content-between align-items-center">
        <h1>My Carts</h1>
      </span>

      <Table striped bordered responsive size="sm">
        <thead>
          <tr>
            <th>Cart ID</th>
            <th>User ID</th>
            <th>Products Count</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((cart) => (
            <tr>
              <td>
                <div className="longIdWrapper">{cart._id}</div>
                <div>
                  <Link to={"/cart/" + cart._id}>
                    <i className="fas fa-edit editIcon"></i>
                  </Link>
                  <i
                    className="fas fa-trash-alt deleteIcon"
                    onClick={() => handleDelete(cart._id)}
                  ></i>
                </div>
              </td>
              <td>
                <Link to={"/user/" + cart.userId}>
                  <div className="longIdWrapper">{cart.userId}</div>
                </Link>
              </td>
              <td style={{ width: "150px" }}>{cart.products.length}</td>
              <td>
                $
                {cart?.products
                  .reduce(
                    (price, item) => price + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CartList;
