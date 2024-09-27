import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../ProductDetailsComment/style.css";
import { useAddCommentMutation, useGetCommentQuery } from "../../../api/CommentApi";

function ProductDetailsComment({ productId }) {
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");

  const { data: commentsData = [], refetch } = useGetCommentQuery(productId);
  const [addComment] = useAddCommentMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newComment.trim() && name.trim()) {
      try {
        await addComment({ name, comment: newComment, productId });
        setNewComment("");
        setName("");
        refetch();
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const filteredComments = commentsData.filter(
    (comment) => comment.productId === productId
  );

  return (
    <div className="container">
      <div className="row">
        <div className="form_comment">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                className="custom-textarea"
                type="text"
                placeholder="Please write your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                className="custom-textarea"
                as="textarea"
                placeholder="Please share your thoughts."
                rows={4}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
            </Form.Group>

            <Button variant="light" type="submit">
              Submit
            </Button>
          </Form>
        </div>

        <div className="comments-list">
          <h5 className="vodka_title">Comments</h5>
          {filteredComments.length > 0 ? (
            filteredComments.map((comment, index) => (
              <div key={index} className="comment-item vodka_text">
                <p className="comment-item_name">
                  <strong>{comment.name}</strong>
                </p>
                <p>{comment.comment}</p>
              </div>
            ))
          ) : (
            <div className="vodka_desc">No comments yet.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsComment;
