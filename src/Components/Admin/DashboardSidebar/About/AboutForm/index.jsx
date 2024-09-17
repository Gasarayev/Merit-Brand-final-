import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AboutForm({
  addAboutContent,
  about,
  setAbout,
  aboutImg,
  setAboutImg,
  aboutContent,
  setAboutContent,
}) {
  return (
    <>
      <Form onSubmit={addAboutContent}>
       
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>About Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setAboutImg(e.target.files[0])}
            accept="image/*"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>About content</Form.Label>
          <Form.Control
            type="text-area"
            placeholder="About content"
            value={aboutContent}
            onChange={(e) => setAboutContent(e.target.value)}
          />
        </Form.Group>

        <Button type="submit">Add About Content</Button>
      </Form>
    </>
  );
}

export default AboutForm;
