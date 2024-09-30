import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import "../ContactPageForm/style.css";

function ContactPageForm() {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_r7j10m1", "template_2sr8oqi", form.current, {
        publicKey: "6YQbrCMe69xBCoWWM",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setMessage("Your message has been sent successfully. Thank you!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
    
          setMessage("There was an issue sending your message. Please try again later.");
        }
      );
  };
  return (
    <>
      <section className="contact_form">
        <div className="container">
          <div className="row">
            <div className="form_parent">
                <div className="footer_contact">
                <h1>Contact with Merit Brand</h1>
                </div>
               
              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  
                  <Form.Control
                    type="text"
                    name="user_name"
                    placeholder="Enter your name..."
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                 
                  <Form.Control
                    type="email"
                    placeholder="Enter your email..."
                    name="user_email"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMessage">
                  
                  <Form.Control
                    as="textarea"
                    name="message"
                    placeholder="Enter your message..."
                  />
                </Form.Group>

                <Button variant="light" type="submit">
                  Submit
                </Button>

              </Form>

              {message && (
                <div className="response_message">
                  {message}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPageForm;
