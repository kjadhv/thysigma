import React from "react";

const HomeTwoOffer = () => {
  return (
    <section
      className="section offer-two"
      style={{
        position: "relative",
        zIndex: 2,
        background: "transparent",
        paddingBottom: "30px", // ✅ reduce gap below text
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div
              className="section__header text-center"
              style={{
                marginBottom: "0", // ✅ removes extra space under title
              }}
            >
              <span className="sub-title">
                what we offer <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title" style={{ marginBottom: "0" }}>
                our main services
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTwoOffer;
