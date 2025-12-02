import React from "react";
import Image from "next/image";

// replace these with your real images
import imgMain from "public/images/collage.jpeg";


const OurMission = () => {
  return (
    <section className="section mission-s fade-wrapper"
     style={{ paddingTop: "60px" }} >
      <div className="container">

        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-12 col-lg-6">

            {/* Our Mission */}
            <div className="d-flex mb-5 fade-top">
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  background: "#ff4d5a",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "20px",
                  flexShrink: 0,
                }}
              >
                🎯
              </div>

              <div>
                <h4 style={{ marginBottom: "10px" }}>Our Mission</h4>
                <p style={{ color: "#555", lineHeight: "1.7" }}>
                  Our mission is to deliver high-quality media and livestreaming solutions that transform every event into a compelling digital experience. 
We combine creativity, technology, and precision to provide end-to-end production services that clients can trust. Through innovation and seamless execution, we aim to elevate how you communicate, celebrate, and showcase your stories.

                </p>
              </div>
            </div>

            {/* Our Vision */}
            <div className="d-flex mb-5 fade-top">
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  background: "#ff4d5a",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "20px",
                  flexShrink: 0,
                }}
              >
                👓
              </div>

              <div>
                <h4 style={{ marginBottom: "10px" }}>Our Vision</h4>
                <p style={{ color: "#555", lineHeight: "1.7" }}>
                  We envision us as your reliable partner. We capture, mold, and narrate the beauty of your stories. For us, EVERY. FRAME. MATTERS. 
                </p>
              </div>
            </div>

            {/* Team & Tribe */}
            <div className="d-flex fade-top">
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  background: "#ff4d5a",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "20px",
                  flexShrink: 0,
                }}
              >
                👥
              </div>

              <div>
                <h4 style={{ marginBottom: "10px" }}>Our Team & Tribe</h4>
                <p style={{ color: "#555", lineHeight: "1.7" }}>
                  We are a collective pf passionate individuals who have hone their skills for years, and studied the market to deliver what works best. 
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT IMAGE COLLAGE */}
          <div className="col-12 col-lg-6 mt-5 mt-lg-0 position-relative fade-top">

            <div style={{ position: "relative", paddingLeft: "60px" }}>

              {/* Main Big Image */}
              <Image
                src={imgMain}
                alt="Studio"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "16px",
                }}
              />

              {/* Small Image – Top Right */}
              <div
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "-20px",
                  width: "180px",
                }}
              >
                {/* <Image
                  src={imgOne}
                  alt="Setup"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "12px",
                    border: "6px solid #fff",
                  }}
                /> */}
              </div>

              {/* Small Image – Bottom Right */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-40px",
                  right: "40px",
                  width: "220px",
                }}
              >
                {/* <Image
                  src={imgTwo}
                  alt="Podcast"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "12px",
                    border: "6px solid #fff",
                  }}
                /> */}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurMission;
