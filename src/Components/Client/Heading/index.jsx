import React from "react";
import "../Heading/style.css";
import Logo from "../../../assets/img/logoNavbar.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import { useGetSliderQuery } from "../../../api/SliderApi";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();

  
  const { data: sliderImage, isLoading, error } = useGetSliderQuery();

  if (isLoading) {
    return <div>Yüklənir...</div>;
  }


  if (error) {
    console.error("Error fetching slider images:", error);
    return <div>Xəta baş verdi! Şəkilləri yükləyə bilmirik.</div>;
  }

  

  return (
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
              {sliderImage?.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="meritBrandSlide"
                    style={{
                      backgroundImage: `url(http://localhost:3009/uploads/${item.filename})`,
                    }}
                  >
                    <div className="container">
                      <div className="row d-flex flex-column">
                        {index === 0 && (
                          <div className="content_logo mb-3">
                            <img src={Logo} alt="merit brand logo" />
                          </div>
                        )}
                        {index === 0 && (
                          <div className="content_text">
                            <h1>“Merit Brand” MMC</h1> {t("heading-text")}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Header);
