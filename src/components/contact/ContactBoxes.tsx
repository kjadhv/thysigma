import React from "react";
import Image from "next/image";
import Link from "next/link";

import phone from "public/images/phone.png";
import mail from "public/images/mail.png";
import location from "public/images/location.png";
import time from "public/images/time.png";

const ContactBoxes = () => {
  return (
    <section className="section contact-boxes fade-wrapper">
      <div className="container">
        <div className="row gaper contact-grid">
          {[
            {
              img: phone,
              title: "Phone",
              content: (
                <Link href="tel:919082083273">
                  Mobile : +91 9082083273
                </Link>
              ),
            },
            {
              img: mail,
              title: "Mail Address",
              content: (
                <>
                  <Link href="mailto:kd@thysigma.com">kd@thysigma.com</Link>
                  <br />
                  <Link href="https://www.thysigma.com" target="_blank">
                    www.thysigma.com
                  </Link>
                </>
              ),
            },
            {
              img: location,
              title: "Our Location",
              content: (
                <Link
                  href="https://maps.app.goo.gl/HLh44sEA4SG5eg5c6"
                  target="_blank"
                >
                  116, Shah Heritage, Seawoods West, Navi Mumbai, India
                </Link>
              ),
            },
            {
              img: time,
              title: "Office Hour",
              content: "Mon - Sat 09 am - 06pm",
            },
          ].map((item, i) => (
            <div key={i} className="col-6 col-xl-3">
              <div className="contact-m__single">
                <div className="thumb">
                  <Image src={item.img} alt={item.title} />
                </div>
                <div className="content">
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactBoxes;
