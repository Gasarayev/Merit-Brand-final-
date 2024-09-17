import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function CategoryForm({ categoryName, setCategoryName, addCategory }) {
  return (
    <>
      <Form onSubmit={addCategory}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Category Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Category name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}

            
          />

          
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Category
        </Button>
      </Form>
    </>
  );
}

export default CategoryForm;
