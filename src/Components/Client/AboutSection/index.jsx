import React from "react";
import VodkaProsses from "../../../assets/img/vodka_prosses.png";
import WineProsses from "../../../assets/img/wine_prosses.png";

import "../AboutSection/style.css";

function AboutSection() {
  return (
    <>
      <section className="about_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-0 p-0">
              <div className="vodka_img about_sect_img">
                <img src={VodkaProsses} alt="merit brand prosses" />
              </div>
            </div>
            <div className="col-lg-6 m-0 p-0">
              <div className="vodka_content about_sect_content">
      
                <h2 className="vodka_title_abt">How we Started</h2>
                <p className="vodka_text">
                  Merit Brand plant, Republic of Azerbaijan in 2007Shabran
                  settlement, at the foot of the Great Caucasus Mountains and
                  the Caspian Seain the territory of the village of Uzun Boyat,
                  located on the coast of the seasearched. Because his place of
                  residence was not chosen by chancenature is fertile for
                  winemaking in this regionsoil and very favorable climatic
                  conditions like seedshad done
                </p>
              </div>
            </div>
          </div>

          <div className="row flex-row-reverse">
            <div className="col-lg-6 m-0 p-0">
              <div className="vodka_img about_sect_img">
                <img src={WineProsses} alt="merit brand prosses" />
              </div>
            </div>
            <div className="col-lg-6 m-0 p-0">
              <div className="vodka_content about_sect_content">

                <h2 className="vodka_title_abt">Passion & Craftmanship</h2>
                <p className="vodka_text">
                  Our plant also produces vodka. This in order to be the most
                  technologically advanced in the plant area a special building
                  equipped with advanced equipment is allocated. Invited from
                  Ukraine and Kabardino-Balkaria to extensive experience All the
                  production that goes on here are experts control their
                  processes. The basis of the recipes only raw materials of
                  natural origin. Use in production The waters of the
                  mountainous sources are unique and useful has features. The
                  filtration process is almost vodka as it is used at every
                  stage of production, here can be considered the most basic
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
