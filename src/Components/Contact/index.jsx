import React from "react";
import "../Contact/style.css";
function Contact() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="footer_contact">
                <p>The Estate</p>
                <h2>Contact us</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="contact_adress">
                <h3>Adress</h3>
                <p>
                  Office Ziya Bunyadov ave., 43M Baku, Azerbaijan AZ1108 Factory
                  Uzun Boyat village Shabran, Azerbaijan AZ1700
                </p>
              </div>
            </div>

            <div className="col-md-6 d-flex justify-content-center">
                <div className="contact_info">
                    <h3>Contact</h3>
                    <p>+994 123 456 789</p>
                    <p>+994 123 456 789</p>
                    <p>Email: <span>gasarayev.emil@gmail.com</span></p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
