import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import "../ContactPageForm/style.css";
import { useTranslation } from "react-i18next";

function ContactPageForm() {
  const { t } = useTranslation();

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
      <section className="contact_form marginForNavbar">
        <div className="container">
          <div className="row">
            <div className="form_parent">
                <div className="footer_contact">
                <h1>{t("contactForm")}</h1>
                </div>
               
              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  
                  <Form.Control
                    type="text"
                    name="user_name"
                    placeholder={t("contactName")}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                 
                  <Form.Control
                    type="email"
                    placeholder={t("contactEmail")}
                    name="user_email"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMessage">
                  
                  <Form.Control
                    as="textarea"
                    name="message"
                    placeholder={t("contactMessage")}
                  />
                </Form.Group>

                <Button variant="light" type="submit">
                {t("contactBtn")}
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

export default React.memo(ContactPageForm);
