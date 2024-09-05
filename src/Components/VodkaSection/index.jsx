import React from "react";
import "../VodkaSection/style.css";
import Vodka from "../../assets/img/vodka.png";
import WineVodka from "../../assets/img/vodka_wine.png";

function VodkaSection() {
  return (
    <>
      <section className="vodka_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 m-0 p-0">
              <div className="vodka_img">
                <img src={Vodka} alt="merit brand vodka" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="vodka_content">
                <p className="vodka_desc">Yes, We do excellent alcohol.</p>
                <h2 className="vodka_title">The Reds</h2>
                <p className="vodka_text">
                  Made from grape Cabernet Sauvignon & Merlot which is
                  cultivated in a region of Shabran. Wine is violet-red color
                  with smooth fruit aroma with notes of black currant.
                  Recommended to serve red meat, salads & cheese. Flow
                  temperature 14°-16
                </p>
                <button className="vodka_btn">shop now</button>
              </div>
            </div>
          </div>

          <div className="row d-flex flex-row-reverse">
            <div className="col-lg-7 m-0 p-0">
              <div className="vodka_img vodka_img_wine">
                <img src={WineVodka} alt="merit brand vodka" />
              </div>
            </div>
            <div className="col-lg-5 d-flex justify-content-end">
              <div className="vodka_content vodka_content_wine">
                <p className="vodka_desc">Yes, We do excellent alcohol.</p>
                <h2 className="vodka_title">The Whites</h2>
                <p className="vodka_text">
                  The company Merit Brand LTD is engaged in the production of
                  red, white, dry, semi-sweet, sweet wines, vodka, whiskey and
                  cognac. Today, the range of products covers both the local
                  market and the international one. The company exports wines to
                  the Russian Federation and China.
                </p>
                <button className="vodka_btn">shop now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default VodkaSection;
