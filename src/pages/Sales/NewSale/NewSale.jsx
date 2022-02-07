import React, { useState, useEffect } from "react";

import { productData } from "../../../dummyData";
import { Container, Form } from "react-bootstrap";
import "./NewSale.css";
import PercentInput from "../../../shared/components/PercentInput/PercentInput";
import ButtonWithAlert from "../../../shared/components/ButtonWithAlert/ButtonWithAlert";

const NewSale = () => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    percentOff: 0.01,
    productId: "",
    isActive: false,
    isFeatured: false,
    img: "",
  });
  const [allProducts, setAllProducts] = useState([]);
  const [reminder, setReminder] = useState(false);

  useEffect(() => {
    setAllProducts(productData);
  }, []);

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  return (
    <Container className="my-5">
      <h1>New Sale</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Select
            onChange={(e) => {
              setFormData({
                ...formData,
                productId: e.target.value,
              });
            }}
          >
            <option>Select Product</option>
            {allProducts?.map((p) => (
              <option value={p._id}>{p.title}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder={formData.title}
            value={formData.title}
            name="title"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder={formData.desc}
            value={formData.desc}
            name="desc"
            onChange={handleChange}
          />
        </Form.Group>

        <PercentInput
          formData={formData}
          setFormData={setFormData}
          reminder={reminder}
          setReminder={setReminder}
        />

        <Form.Group className="mb-4">
          <Form.Check
            type="checkbox"
            label="Is Active"
            checked={formData.isActive}
            onClick={(e) => {
              setFormData({
                ...formData,
                isActive: !formData.isActive,
              });
            }}
          />
          <Form.Text muted>
            Determine whether sale discount percentage will be applied to
            respective product.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Check
            type="checkbox"
            label="Is Featured"
            checked={formData.isFeatured}
            onClick={(e) => {
              setFormData({
                ...formData,
                isFeatured: !formData.isFeatured,
              });
            }}
          />
          <Form.Text muted>
            Determine whether sale will be featured on site banner.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Sale Banner Image</Form.Label>
          <Form.Control
            type="text"
            value={formData.img}
            name="img"
            onChange={handleChange}
          />
          <Form.Text muted>
            BG Image that will be featured on sale banner.
          </Form.Text>
        </Form.Group>

        <ButtonWithAlert buttonName="Create" />
      </Form>
    </Container>
  );
};

export default NewSale;
