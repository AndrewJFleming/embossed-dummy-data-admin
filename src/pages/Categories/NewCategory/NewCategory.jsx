import React, { useState } from "react";

import { Container, Form } from "react-bootstrap";
import ButtonWithAlert from "../../../shared/components/ButtonWithAlert/ButtonWithAlert";
import { ReqLblAccs } from "../../../shared/components/ReqLblAccs/ReqLblAccs";

const NewCategory = () => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    isSlide: false,
    isFeatured: false,
    img: "",
  });

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  return (
    <Container className="my-5">
      <h1>New Category</h1>
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
          <Form.Check
            type="checkbox"
            checked={formData.isSlide}
            label="Is Slide"
            onClick={(e) => {
              setFormData({
                ...formData,
                isSlide: !formData.isSlide,
              });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            checked={formData.isFeatured}
            label="Is Featured"
            onClick={(e) => {
              setFormData({
                ...formData,
                isFeatured: !formData.isFeatured,
              });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            Image <ReqLblAccs />
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

        <ButtonWithAlert data={formData} path="/categories" />
      </Form>
    </Container>
  );
};

export default NewCategory;
