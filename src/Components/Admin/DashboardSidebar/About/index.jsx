import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import AboutTable from "./AboutTable";
import AboutForm from "./AboutForm";

function About() {
  const aboutPage = {
    id: 1,
    img: "http://merit-brand.com/static/media/34.b069f9e5de77ee314fad.png",
    content:
      "Merit Brand LLC is a modern production enterprise equipped with the latest types of equipment. Translated from English, the word Merit means merit, advantage, quality. The given name fully reflects the essence of the enterprise, its production capacity, strength and the ability to use innovations. Merit Brand plant was established in 2007 in the Shabran settlement of the Republic of Azerbaijan, Uzun Boyat village, located at the foot of the Great Caucasus Mountains and on the coast of the Caspian Sea. The place where he settled was not chosen by chance, because nature has gifted this region with fertile soil and very favorable climatic conditions for winemaking.",
  };

  console.log;

  const [about, setAbout] = useState([aboutPage]);
  const [aboutImg, setAboutImg] = useState(null);
  const [aboutContent, setAboutContent] = useState("");

  const addAboutContent = (e) => {
    e.preventDefault();

    const newAboutContent = {
      id: about.length + 1,
      img: aboutImg ? URL.createObjectURL(aboutImg) : "No img",
      content: aboutContent,
    };

    if (newAboutContent.content && newAboutContent.img) {
      setAbout([...about, newAboutContent]);
    } else {
      showCustomAlert();
    }

    setAboutImg(null);
    setAboutContent("");
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
                <AboutTable about={about} />
              </div>
            </div>
            <div className="col-3 p-0 form_border_product d-flex justify-content-center">
              <div className="product_form">
                <AboutForm
                  addAboutContent={addAboutContent}
                  about={about}
                  setAbout={setAbout}
                  aboutImg={aboutImg}
                  setAboutImg={setAboutImg}
                  aboutContent={aboutContent}
                  setAboutContent ={setAboutContent}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
