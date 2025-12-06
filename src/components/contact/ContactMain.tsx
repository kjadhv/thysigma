import React from "react";
import ContactBoxes from "./ContactBoxes";
import ContactForm from "./ContactForm";

const ContactMain = () => {
  return (
    <>
      {/* TOP BOXES */}
      <ContactBoxes />

      {/* MAP + FORM */}
      <section className="section contact-map-form">
        <div className="container">
          <div className="row gaper">
            
            {/* MAP */}
            <div className="col-12 col-lg-6">
              <div className="contact__map">
                <iframe
                  src="https://www.google.com/maps?q=Shah+Heritage+Seawoods+Navi+Mumbai&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* FORM */}
            <div className="col-12 col-lg-6">
              <ContactForm fullWidth={true} />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMain;
