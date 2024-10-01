import React from "react";
import "../VodkaSection/style.css";
import Vodka from "../../../assets/img/vodka.png";
import WineVodka from "../../../assets/img/vodka_wine.png";
import { useTranslation } from "react-i18next";

function VodkaSection() {
  const { t } = useTranslation();

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
                <p className="vodka_desc"> {t("vodka_sect_desc")}</p>
                <h2 className="vodka_title">{t("vodka_sect_titleTwo")}</h2>
                <p className="vodka_text">{t("lido1")}</p>
                <button className="vodka_btn">{t("vodka_sect_btn")}</button>
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
                <p className="vodka_desc">{t("vodka_sect_desc")}</p>
                <h2 className="vodka_title">{t("vodka_sect_titleOne")}</h2>
                <p className="vodka_text">{t("lido1")}</p>
                <button className="vodka_btn">{t("vodka_sect_btn")}</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default VodkaSection;
