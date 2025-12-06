import React from "react";
import Link from "next/link";

const HomeTwoOffer = () => {
  return (
    <section
      className="section offer-two"
      style={{
        position: "relative",
        zIndex: 2,
        background: "transparent",
        paddingBottom: "30px",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div
              className="section__header text-center"
              style={{ marginBottom: "0" }}
            >
              {/* SUB TITLE LINK */}
              <Link
                href="/our-services"
                style={{
                  display: "inline-block",
                  textDecoration: "none",
                }}
              >
                <span
                  className="sub-title"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  what we offer <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>

              <h2 className="title" style={{ marginBottom: "0" }}>
                Our services
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTwoOffer;
