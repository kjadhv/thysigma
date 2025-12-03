import React from "react";
import Image from "next/image";
import Link from "next/link";

import phone from "public/images/phone.png";
import mail from "public/images/mail.png";
import location from "public/images/location.png";
import time from "public/images/time.png";

const ContactMain = () => {
  return (
    <section className="section contact-m fade-wrapper">
      <div className="container">

        {/* ===== TOP 4 CONTACT BOXES ===== */}
        <div className="row gaper contact-grid">
          <div className="col-6 col-xl-3">
            <div className="contact-m__single">
              <div className="thumb">
                <Image src={phone} alt="Phone" />
              </div>
              <div className="content">
                <h4>Phone</h4>
                <p>
                  <Link href="tel:197-90-56-780">Mobile : +91 9082083273</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="col-6 col-xl-3">
            <div className="contact-m__single">
              <div className="thumb">
                <Image src={mail} alt="Mail" />
              </div>
              <div className="content">
                <h4>Mail Address</h4>
                <p>
                  <Link href="mailto:info.company@gmail.com">
                    kd@thysigma.com
                  </Link>
                </p>
                <p>
                  <Link href="mailto:info.company@gmail.com">
                    www.thysigma.com
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="col-6 col-xl-3">
            <div className="contact-m__single">
              <div className="thumb">
                <Image src={location} alt="Location" />
              </div>
              <div className="content">
                <h4>Our Location</h4>
                <p>
                  <Link
                    href="https://maps.app.goo.gl/HLh44sEA4SG5eg5c6"
                    target="_blank"
                  >
                    116, Shah Heritage, Seawoods West,
                    Navi Mumbai, India
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="col-6 col-xl-3">
            <div className="contact-m__single">
              <div className="thumb">
                <Image src={time} alt="Office Time" />
              </div>
              <div className="content">
                <h4>Office Hour</h4>
                <p>Mon - Sat 09 am - 06pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== MAP + FORM ===== */}
        <div className="row">
          <div className="col-12">
            <div className="map-wrapper">
              <div className="row gaper">

                <div className="col-12 col-lg-6">
                  <div className="contact__map">
                    <iframe
                      src="https://www.google.com/maps?q=Shah+Heritage+Seawoods+Navi+Mumbai&output=embed"
                      width="100%"
                      height="800"
                      style={{ border: 0 }}
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="col-12 col-lg-6">
                  <div className="contact-main__form">
                    <h3>Leave A Message</h3>

                    <form
                      action="#"
                      method="post"
                      className="section__content-cta"
                    >
                      <div className="group-wrapper">
                        <div className="group-input">
                          <input type="text" placeholder="Name" />
                        </div>
                        <div className="group-input">
                          <input type="email" placeholder="Email" />
                        </div>
                      </div>

                      <div className="group-input drt">
                        <select className="subject">
                          <option data-display="Subject">Subject</option>
                          <option value="1">Account</option>
                          <option value="2">Service</option>
                          <option value="3">Pricing</option>
                          <option value="4">Support</option>
                        </select>
                      </div>

                      <div className="group-input">
                        <textarea placeholder="Message"></textarea>
                      </div>

                      <div className="form-cta justify-content-start">
                        <button type="submit" className="btn btn--primary">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ✅ INLINE FIXES */}
      <style jsx>{`
        /* ================= MOBILE (UNCHANGED & WORKING) ================= */
        @media (max-width: 767px) {
          .contact-m {
            position: relative;
            z-index: 0;
          }

          .contact-m::before,
          .contact-m::after,
          .fade-wrapper::before,
          .fade-wrapper::after {
            z-index: -1 !important;
          }

          .contact-m .container,
          .contact-m .row,
          .contact-m__single,
          .contact-main__form,
          .contact__map {
            position: relative;
            z-index: 2;
          }

          .contact-m__single {
            padding: 8px;
          }

          .contact-m__single .thumb img {
            max-width: 40px;
          }

          .contact-m__single h4 {
            font-size: 14px;
            margin-bottom: 2px;
          }

          .contact-m__single p {
            font-size: 12px;
            line-height: 1.25;
            margin-bottom: 2px;
          }

          .contact-main__form {
            padding: 8px;
          }

          .contact-main__form h3 {
            font-size: 16px;
            margin-bottom: 6px;
          }

          .group-wrapper {
            gap: 5px;
          }

          .group-input {
            margin-bottom: 5px;
          }

          .contact-main__form input,
          .contact-main__form select,
          .contact-main__form textarea {
            padding: 6px;
            font-size: 13px;
          }

          .contact-main__form textarea {
            min-height: 60px;
          }

          .form-cta {
            margin-top: 6px;
          }

          .btn--primary {
            padding: 6px 12px;
            font-size: 13px;
          }
        }

        /* ================= PC + iPAD OVERLAP FIX ================= */
        @media (min-width: 768px) {
          .contact-m {
            position: relative;
            z-index: 0;
          }

          .contact-m::before,
          .contact-m::after,
          .fade-wrapper::before,
          .fade-wrapper::after {
            z-index: -1 !important;
          }

          .contact-m .container,
          .contact-m .row,
          .contact-m__single,
          .map-wrapper,
          .contact__map,
          .contact-main__form {
            position: relative;
            z-index: 2;
          }

          .contact__map iframe {
            display: block;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactMain;
