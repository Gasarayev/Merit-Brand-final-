import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SliderForm({ slider, setSlider, sliderImg, setSliderImg, addSlider }) {
  return (
    <>
      <Form onSubmit={addSlider}>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Slider Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setSliderImg(e.target.files[0])}
            accept="image/*"
          />
        </Form.Group>

        <Button type="submit">Add About Content</Button>
      </Form>
    </>
  );
}

export default SliderForm;
