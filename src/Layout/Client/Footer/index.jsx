import React from "react";
import LogoFooter from '../../../assets/img/logo.png'
import '../Footer/style.css'
function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
            <img src={LogoFooter} alt="merit brand footer" />
        </div>
      </footer>
    </>
  );
}

export default React.memo(Footer);
