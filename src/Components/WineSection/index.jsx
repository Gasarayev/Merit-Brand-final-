import React from "react";
import Wine1 from "../../assets/img/wine1.png";
import Wine2 from "../../assets/img/wine2.png";
import GrapeIcon from "../../assets/img/wineGrapeIcon.png";
import "../WineSection/style.css";

function WineSection() {
  return (
    <>
      <section className="wine_sect">
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="wine_img">
                <img src={Wine1} alt="merit brand wine" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="wine_content">
                <p className="content_desc">Red Dry Wine</p>
                <h2 className="content_title">Mirvari</h2>
                <p className="wine_text">
                  Şabranda becərilən Cabernet Sauvignon & Merlot üzümündən
                  hazırlanmışdır. Şərab qara qarağat notları ilə hamar meyvə
                  ətirli bənövşəyi-qırmızı rəngdədir. Qırmızı ət, salat və
                  pendirə xidmət etmək tövsiyə olunur. Axın temperaturu 14°-16°
                </p>
                <p className="wine_text">
                  Made from grape Cabernet Sauvignon & Merlot which is
                  cultivated in a region of Shabran. Wine is violet-red color
                  with smooth fruit aroma with notes of black currant.
                  Recommended to serve red meat, salads & cheese. Flow
                  temperature 14°-16°
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-5 d-flex flex-row-reverse">
            <div className="col-lg-6 d-flex justify-content-start p-0 mt-5">
              <div className="wine_img_second">
                <img src={Wine2} alt="merit brand wine" />
              </div>
            </div>

            <div className="col-lg-6 m-0 p-0 mt-5">
              <div className="wine_content_second">
                <div className="content_icon">
                  <img src={GrapeIcon} alt="grape icon merit brand" />
                </div>

                <p className="content_desc_second">Red Dry Wine</p>
                <p className="content_text_second">
                  Bu günə, ümumi sahəsi 150 hektardan çox olan üzüm bağlarımızda
                  Cabernet Sauvignon, Pinot Noir, Merlot, Pinot Meunier,
                  Chardonnay, Madrasa və Takveri kimi müxtəlif üzüm növləri
                  yetişdirilir, və bütün bunlar müxtəlif şərablarların
                  hazırlanması və maraqlı qarışıqların yaranması üçün gözəl bir
                  fürsət yaradır
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WineSection;
