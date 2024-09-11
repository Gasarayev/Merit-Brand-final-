import React from "react";
import "../Heading/style.css";
import Logo from "../../../assets/img/logoNavbar.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 

import { Navigation, Pagination } from "swiper/modules";

function Header() {
  return (
    <>
      <section className="heading">
        <div className="container-fluid p-0">
          <div className="row p-0 m-0">
            <div className="head_content p-0">
              <Swiper
                navigation={true}
                pagination={{ clickable: true }} 
                loop={true} 
                modules={[Navigation, Pagination]} 
                speed={2500}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="meritBrandSlide">
                    <div className="container">
                      <div className="row d-flex flex-column">
                        <div className="content_logo mb-3">
                          <img src={Logo} alt="merit brand logo" />
                        </div>
                        <p className="content_text">
                          <h1>“Merit Brand” MMC </h1>Ən son avadanlıq növləri
                          ilə təchiz olunmuş müasir istehsalat müəssisəsidir.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="wineAze">
      
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="wineAze wineAzeSunshine"></div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
