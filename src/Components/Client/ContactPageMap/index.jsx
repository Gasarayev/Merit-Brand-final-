import React from "react";

function ContactPageMap() {
  return (
    <>
      <section>
        <div className="container-fluid mt-5">
          <div className="row">
          <div className="m-0 p-0" style={{ width: "100%" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.250415617769!2d46.633040875891446!3d41.628718371270246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40464b001dcfce77%3A0x44d8486e576fa379!2sGasarayev&#39;s%20Home!5e0!3m2!1str!2saz!4v1726748070132!5m2!1str!2saz"
              width="100%" 
              height="600" 
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default React.memo(ContactPageMap);
