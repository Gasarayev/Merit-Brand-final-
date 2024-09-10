import React from "react";
import VodkaProsses from '../../assets/img/vodka_prosses.png'
import WineProsses from '../../assets/img/wine_prosses.png'

import '../AboutSection/style.css'


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
                <p className="vodka_desc">About us</p>
                <h2 className="vodka_title_abt">How we Started</h2>
                <p className="vodka_text"> 
                  “Merit Brand” zavodu, 2007-ci ildə Azərbaycan Respublikasının
                  Şabran qəsəbəsi, Böyük Qafqaz dağlarının ətəyində və Xəzər
                  dənizinin sahilində yerləşən Uzun Boyat kəndinin ərazisində
                  aradılıb. Onun məskunlaşdığı yer təsadüfi seçilməmişdi çunki
                  təbiət bu bölgəyə şərabçılıq ilə məşğul olmaq üçün məhsuldar
                  torpaq və çox əlverişli iqlim şəraiti kimi tohvələr bəxş
                  etmişdi.
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
                <p className="vodka_desc">About us</p>
                <h2 className="vodka_title_abt">Passion & Craftmanship</h2>
                <p className="vodka_text">
                  400 meter high above sea level, mostily chalksoils, more than
                  2000 hours of sunlight and less than 300mm of the
                  precipitation a year create ideal conditions for growing
                  grapes.
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
