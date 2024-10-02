import React from "react";
import "../AboutPageHeader/style.css";
import { useTranslation } from "react-i18next";


function AboutPageHeader() {

  const { t } = useTranslation();
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
                  <p className="content_abt_heading">{t("about")}</p>
                  <h1 className="content_title_aboutHeading">{t("started")}</h1>
                  <p className="content_text_aboutHeading">
                   {t("about_page_head")}
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

export default React.memo(AboutPageHeader);
