import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ProductForm({
    productName,
    setProductName,
    productImg,
    setProductImg,
    productDesc,
    setProductDesc,
    addProduct,
  }) {
  return (
    <>
      <Form onSubmit={addProduct}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            value={productName}
            placeholder="Product name"
            onChange={(e) => setProductName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Product Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setProductImg(e.target.files[0])}
            accept="image/*"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Product description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product description"
            value={productDesc}
            onChange={(e) => setProductDesc(e.target.value)}
          />
        </Form.Group>

        <Button type="submit">Add Product</Button>
      </Form>
    </>
  );
}

export default ProductForm;
