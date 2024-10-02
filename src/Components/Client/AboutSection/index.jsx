import React from "react";
import "../AboutSection/style.css";
import { useGetAboutQuery } from "../../../api/AboutApi";
import { useTranslation } from "react-i18next";

function AboutSection() {
  const {t} = useTranslation();

  const { data } = useGetAboutQuery();
  console.log(data);

  return (
    <>
      <section className="about_section">
        <div className="container">
          {data?.map((item, index) => {
            const rowClass = index % 2 === 1 ? "flex-row-reverse" : ""; 

            return (
              <div key={index} className={`row ${rowClass}`}>
                <div className="col-lg-6 m-0 p-0">
                  <div className="vodka_img about_sect_img">
                    <img src={item.image} alt="merit brand prosses" />
                  </div>
                </div>
                <div className="col-lg-6 m-0 p-0">
                  <div className="vodka_content about_sect_content">
                    <h2 className="vodka_title_abt">{item.name}</h2>
                    <p className="vodka_text">
                      {item.description}
                     
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </section>
    </>
  );
}

export default React.memo(AboutSection);
