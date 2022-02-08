import React, { useState } from "react";

import { Container, Form } from "react-bootstrap";
import ButtonWithAlert from "../../../shared/components/ButtonWithAlert/ButtonWithAlert";
import { ReqLblAccs } from "../../../shared/components/ReqLblAccs/ReqLblAccs";

const NewProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    categories: [],
    variants: [],
    price: 0,
    inStock: false,
    img: "",
  });

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
    <Container className="my-5">
      <h1>New Product</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>
            Name <ReqLblAccs />
          </Form.Label>

          <Form.Control
            type="text"
            placeholder="product name"
            value={formData.title}
            name="title"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            Description <ReqLblAccs />
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="description"
            value={formData.desc}
            name="desc"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            Price <ReqLblAccs />
          </Form.Label>
          <Form.Control
            type="number"
            placeholder={formData.price}
            value={formData.price}
            name="price"
            min="0"
            step="0.01"
            onChange={(e) => {
              setFormData({
                ...formData,
                price: e.target.valueAsNumber,
              });
            }}
          />
          <Form.Text id="passwordHelpBlock" muted>
            Must be greater than $0.00.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            Categories <ReqLblAccs />
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="stationary,postcards"
            name="categories"
            value={formData.categories}
            onChange={handleSplit}
          />
          <Form.Text id="passwordHelpBlock" muted>
            Assign at least one category.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            Variants <ReqLblAccs />
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="red,blue"
            name="variants"
            value={formData.variants}
            onChange={handleSplit}
          />
          <Form.Text id="passwordHelpBlock" muted>
            Assign at least one variant.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            checked={formData.inStock}
            label="In Stock"
            onClick={(e) => {
              setFormData({
                ...formData,
                inStock: !formData.inStock,
              });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            Photo <ReqLblAccs />
          </Form.Label>
          <Form.Control
            type="text"
            placeholder={formData.img}
            value={formData.img}
            name="img"
            onChange={handleChange}
          />
          <Form.Text muted>
            Provide URL for existing image on the web.
          </Form.Text>
        </Form.Group>

        <ButtonWithAlert data={formData} path="/products" />
      </Form>
    </Container>
  );
};

export default NewProduct;
