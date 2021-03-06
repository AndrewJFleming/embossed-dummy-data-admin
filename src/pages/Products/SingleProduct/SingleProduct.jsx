import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { productData } from "../../../dummyData";
import { Button, Card, ListGroup, Container, Form } from "react-bootstrap";

const SingleProduct = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    categories: [],
    variants: [],
    price: 0,
    inStock: false,
    img: "",
  });

  useEffect(() => {
    const myProduct = productData.find((p) => p._id === productId);
    setProduct(myProduct);
    setFormData({
      title: myProduct.title,
      desc: myProduct.desc,
      categories: myProduct.categories,
      variants: myProduct.variants,
      price: myProduct.price,
      inStock: myProduct.inStock,
      img: myProduct.img,
    });
  }, [productId]);

  const handleUpdate = () => {
    setProduct(formData);
  };

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleSplit = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.split(","),
    });
  };

  return (
    <div className="mb-5">
      <Container className="mt-3">
        <Link to="/products">
          <i class="fas fa-arrow-left">
            &nbsp;<span className="back-link-text">BACK</span>
          </i>
        </Link>
        <div className="mt-3 mb-2 d-flex justify-content-between align-items-center">
          <h1>Product</h1>
          <Link to="/new-product">
            <Button variant="success">Create New</Button>
          </Link>
        </div>
      </Container>
      <Container className="d-flex mb-3">
        <img
          className="cardImg"
          src={product.img}
          alt={`${product.title}-product`}
        />
        <Card className="w-100  ml-3">
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.desc}</Card.Text>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <span className="listGroupLabel">Product ID:&nbsp;</span>
              {productId}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="listGroupLabel">Price:&nbsp;</span>$
              {product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="listGroupLabel">In Stock:&nbsp;</span>
              {product.inStock ? "Yes" : "No"}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="listGroupLabel">Categories:&nbsp;</span>
              {product.categories?.map((c) => (
                <span>
                  &nbsp;&#8226;<em>{c}</em>
                </span>
              ))}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="listGroupLabel">Variants:&nbsp;</span>
              {product.variants?.map((v) => (
                <span>
                  &nbsp;&#8226;<em>{v}</em>
                </span>
              ))}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
      <Container className="mb-5">
        <h2>Update Product</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              value={formData.title}
              name="title"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              type="textarea"
              placeholder={formData.desc}
              value={formData.desc}
              name="desc"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder={formData.price}
              value={formData.price}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  price: e.target.valueAsNumber,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Categories</Form.Label>
            <Form.Control
              type="text"
              placeholder={formData.categories}
              value={formData.categories}
              name="categories"
              onChange={handleSplit}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Variants</Form.Label>
            <Form.Control
              type="text"
              placeholder={formData.variants}
              value={formData.variants}
              name="variants"
              onChange={handleSplit}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Availability</Form.Label>
            <Form.Check
              onClick={(e) => {
                setFormData({
                  ...formData,
                  inStock: !formData.inStock,
                });
              }}
              checked={formData.inStock}
              type="checkbox"
              label="In Stock"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Photo</Form.Label>
            <Form.Control
              name="img"
              type="text"
              placeholder={formData.img}
              value={formData.img}
              onChange={handleChange}
            />
          </Form.Group>

          <Button onClick={handleUpdate}>Update</Button>
        </Form>
      </Container>
    </div>
  );
};

export default SingleProduct;
