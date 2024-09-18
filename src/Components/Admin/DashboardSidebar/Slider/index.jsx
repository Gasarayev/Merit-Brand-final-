import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import SliderTable from "./SliderTable";
import SliderForm from "./SliderForm";

function DashboardSlider() {
  const sliderPage = {
    id: 1,
    img: "http://merit-brand.com/static/media/slider1.131d4714f114e8f41e84.png",
  };

  const [slider, setSlider] = useState([sliderPage]);
  const [sliderImg, setSliderImg] = useState(null);

  const addSlider = (e) => {
    e.preventDefault();

    const newSliderPage= {
      id: slider.length + 1,
      img: sliderImg ? URL.createObjectURL(sliderImg) : "No img",
  
    };

    if (newSliderPage.img) {
        setSlider([...slider, newSliderPage]);
    } else {
      showCustomAlert();
    }

    setSliderImg(null);
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
                <SliderTable slider={slider}/>
              </div>
            </div>
            <div className="col-3 p-0 form_border_product d-flex justify-content-center">
              <div className="product_form">
                <SliderForm 
              slider={slider}
              setSlider ={setSlider}
              sliderImg={sliderImg}
              setSliderImg ={setSliderImg}
              addSlider = {addSlider}
              />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DashboardSlider;
