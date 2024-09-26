import React from 'react'
import Table from "react-bootstrap/Table";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { useDeleteAboutMutation, useGetAboutQuery } from '../../../../../api/AboutApi';
import { IoIosCloseCircle } from 'react-icons/io';

function AboutTable() {


  const {data: aboutData} = useGetAboutQuery();
  const [removeData] = useDeleteAboutMutation();
  console.log(aboutData)

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


  const deleteAbout = async (aboutId)=>{
      try{
        const response = await removeData(aboutId).unwrap();
        deleteshowCustomAlert();
        console.log(response, "delete about done")
      }catch(err){  
        alert(err, "delete about error");
        console.log(err, "delete about error")
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
            <th>About Image</th>
            <th>About Content</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {aboutData?.map((items, index) => {
            return (
              <tr key={index}>
                <td>{items.id}</td>
                <td>
                  {items.img !== "No img" ? (
                    <img
                      src={items.img}
                      alt="about section pics"
                      style={{ width: "100px", height: "100px" }}
                    />
                  ) : (
                    "No img"
                  )}
                </td>
                <td>{items.description}</td>
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
                      <IoTrashOutline onClick={()=> deleteAbout(items.id)} />
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

export default AboutTable
