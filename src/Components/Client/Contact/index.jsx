import React from "react";
import "../Contact/style.css";
import { useGetContactQuery } from "../../../api/ContactApi";
function Contact() {
  const { data } = useGetContactQuery();
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
          {data?.map((item, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-md-6 d-flex justify-content-center">
                  <div className="contact_adress">
                    <h3>Adress</h3>
                    <p>{item.addres}</p>
                  </div>
                </div>

                <div className="col-md-6 d-flex justify-content-center">
                  <div className="contact_info">
                    <h3>Contact</h3>
                    <p> {item.number} </p>
                    <p> {item.number1} </p>
                    <p>
                      Email: <span> {item.email} </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Contact;
