import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ContactForm({
  contact,
  setContact,
  addres,
  setAddres,
  number,
  setNumber,
  email,
  setEmail,
  addContactData
}) {
  return (
    <>
      <Form onSubmit={addContactData}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Addres</Form.Label>
          <Form.Control
            type="text"
            placeholder="Addres"
            value={addres}
            onChange={(e) => setAddres(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="About content"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Button type="submit">Add About Content</Button>
      </Form>
    </>
  );
}

export default ContactForm;
