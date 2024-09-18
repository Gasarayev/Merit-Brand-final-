import React, { useState } from 'react'
import { IoIosCloseCircle } from 'react-icons/io';
import ContactTable from './ContactTable';
import ContactForm from './ContactForm';



function DashboardContact() {
    const contactPage = {
        id: 1,
        addres: "Office Ziya Bunyadov ave., 43M Baku, Azerbaijan AZ1108 Factory Uzun Boyat village Shabran, Azerbaijan AZ1700",
        number:"+994 123 456 789",
        email: "gasarayev.emil@gmail.com",
      };
    
      console.log;
    
      const [contact, setContact] = useState([contactPage]);
      const [addres, setAddres] = useState("");
      const [number,setNumber] = useState("");
      const [email, setEmail] =useState("");
    
      const addContactData  = (e) => {
        e.preventDefault();
    
        const newContactData = {
          id: contact.length + 1,
          addres: addres,
          number: number,
          email: email,
        };
    
        if (newContactData.addres && newContactData.number && newContactData.email) {
            setContact([...contact, newContactData]);
        } else {
          showCustomAlert();
        }
    
        setAddres("");
        setNumber("");
        setEmail("");
      };
    
      function showCustomAlert() {
        const modal = document.getElementById("customAlert");
        const closeBtn = document.getElementsByClassName("close")[0];
    
        modal.style.display = "block";
    
        closeBtn.onclick = function () {
          modal.style.display = "none";
        };
    
        window.onclick = function (event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        };
      }

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
                <ContactTable contact={contact}/>
              </div>
            </div>
            <div className="col-3 p-0 form_border_product d-flex justify-content-center">
              <div className="product_form">
                <ContactForm 
                contact={contact}
                setContact ={setContact}
                addres={addres}
                setAddres ={setAddres}
                number={number}
                setNumber ={setNumber}
                email={email}
                setEmail ={setEmail}
                addContactData = {addContactData}
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
