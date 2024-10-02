import React from "react";
import "../ProductPageHeader/style.css";

function ProductPageHeader() {
  return (
    <>
      <header>
        <div className="conatiner-fluid bgPichead"></div>
      </header>
    </>
  );
}

export default React.memo(ProductPageHeader);
