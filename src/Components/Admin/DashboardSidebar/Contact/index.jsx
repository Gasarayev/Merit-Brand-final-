import React, { useState } from 'react'
import { IoIosCloseCircle } from 'react-icons/io';
import ContactTable from './ContactTable';
import ContactForm from './ContactForm';



function DashboardContact() {
    

  return (
    <>
      <div id="customAlert" className="modal">
        <div className="modal-content">
          <span className="close">
            <IoIosCloseCircle />
          </span>
          <p>Please fill all the boxes</p>
        </div>
      </div>

      <section className="productBody">
        <div className="container-fluid">
          <div className="row">
            <div className="col-9 p-0 d-flex justify-content-center">
              <div className="product_table">
                <ContactTable/>
              </div>
            </div>
            <div className="col-3 p-0 form_border_product d-flex justify-content-center">
              <div className="product_form">
                <ContactForm 
              
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DashboardContact
