import React from "react";
import ContactForm from "./ContactForm";

const ContactMain = () => {
  return (
    <>
      {/* MAP + FORM */}
      <section className="section contact-map-form no-padding">
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

      {/* STYLES */}
      <style jsx>{`
        /* REMOVE SECTION PADDING */
        .no-padding {
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }

        .contact__map {
          height: 420px;
          width: 100%;
          border-radius: 18px;
          overflow: hidden;
        }

        @media (max-width: 991px) {
          .contact__map {
            height: 300px;
          }
        }

        @media (max-width: 575px) {
          .contact__map {
            height: 260px;
          }
        }
      `}</style>
    </>
  );
};

export default ContactMain;
