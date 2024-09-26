import React from 'react'
import Table from "react-bootstrap/Table";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { useDeleteContactMutation, useGetContactQuery } from '../../../../../api/ContactApi';
import { IoIosCloseCircle } from 'react-icons/io';

function ContactTable() {


  const {data} = useGetContactQuery();

  const [removeData] = useDeleteContactMutation();

  const deleteshowCustomAlert = () => {
    const modal = document.getElementById("customAlertdelete");
    const closeBtn = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    closeBtn.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  };


  const deleteContact = async (contactId) => {
    try{
      const response = removeData(contactId).unwrap();
      deleteshowCustomAlert()
      console.log("delete contact info");
    }catch(err){
      console.log(err, "contact silinme xeta bas verdi");
      alert("error! can't deleted");
    }

  }

  return (
    <>
    <div id="customAlertdelete" className="modal">
        <div className="modal-content modal-content-delete">
          <span className="close">
            <IoIosCloseCircle />
          </span>
          <p>Data deleted successfully</p>
        </div>
      </div>
      <Table bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Addres</th>
            <th>Number</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((items, index) => {
            return (
              <tr key={index}>
                <td>{items.id}</td>
                <td>
                {items.addres}
                </td>
                <td>{items.number}</td>
                <td>{items.email}</td>
                <td className="align-middle text-center">
                  <div className="btn_product_ctgry">
                    <button className="btn_product btn_product_edit">
                      <FaRegEdit />
                    </button>
                  </div>
                </td>
                <td>
                  <div className="btn_product_ctgry">
                    <button className="btn_product btn_product_remove">
                      <IoTrashOutline  onClick={()=> deleteContact(items.id)}/>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  )
}

export default ContactTable
