import React from "react";
import "../Heading/style.css";
import Logo from "../../assets/img/logoNavbar.png";

function Header() {
  return (
    <>
      <section className="heading">
        <div className="container-fluid head_img">
          <div className="container">
            <div className="row">
              <div className="head_content">
                <div className="content_logo mb-3">
                  <img src={Logo} alt="merit brand logo" />
                </div>
                <p className="content_text">
                  <h1>“Merit Brand” MMC </h1>Ən son avadanlıq növləri ilə təchiz
                  olunmuş müasir istehsalat müəssisəsidir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
