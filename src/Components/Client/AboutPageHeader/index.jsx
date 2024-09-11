import React from "react";
import "../AboutPageHeader/style.css";


function AboutPageHeader() {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col bgImg_aboutHead"></div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col d-flex justify-content-center flex-column">
                <div className="content_aboutHeading">
                  <p className="content_abt_heading">about us</p>
                  <h1 className="content_title_aboutHeading">How We Started</h1>
                  <p className="content_text_aboutHeading">
                    Merit Brand LLC is a modern production enterprise equipped
                    with the latest types of equipment. Translated from English,
                    the word Merit means merit, advantage, quality. The given
                    name fully reflects the essence of the enterprise, its
                    production capacity, strength and the ability to use
                    innovations. Merit Brand plant was established in 2007 in
                    the Shabran settlement of the Republic of Azerbaijan, Uzun
                    Boyat village, located at the foot of the Great Caucasus
                    Mountains and on the coast of the Caspian Sea. The place
                    where he settled was not chosen by chance, because nature
                    has gifted this region with fertile soil and very favorable
                    climatic conditions for winemaking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPageHeader;
