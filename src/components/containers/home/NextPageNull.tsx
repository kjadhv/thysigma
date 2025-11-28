import React from "react";
import Link from "next/link";

const NextPageNull = () => {
  return (
    <section 
      className="section next-page pb-0"
      style={{
        background: "#000",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <Link href="about-us" className="sub-title mb-0">
                Next Page
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lines d-none d-lg-flex">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default NextPageNull;