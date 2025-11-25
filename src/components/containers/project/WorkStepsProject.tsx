import React, { useState, useEffect } from "react";

const WorkStepsProject = () => {
  const [hover, setHover] = useState(1);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const deviceWidth = window.innerWidth;

      if (deviceWidth > 576) {
        const workImgItems = document.querySelectorAll<HTMLElement>(
          ".work-steps__single"
        );

        workImgItems.forEach((item) => {
          const contentBox = item.getBoundingClientRect();
          const dx = event.clientX - contentBox.x;

          if (item.children[2] instanceof HTMLElement) {
            item.children[2].style.transform = `translateX(${dx}px)`;
          }
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <section className="section work-steps work-alt fade-wrapper">
        <div className="container">

          {/* Header */}
          <div className="row">
            <div className="col-12">
              <div className="section__header--secondary">
                <div className="row gaper align-items-center">

                  <div className="col-12 col-lg-5 col-xxl-5">
                    <div className="section__header text-center text-lg-start mb-0">
                      <span className="sub-title">
                        working steps <i className="fa-solid fa-arrow-right"></i>
                      </span>
                      <h2 className="title title-anim">Our Work Process</h2>
                    </div>
                  </div>

                  <div className="col-12 col-lg-7 col-xxl-5 offset-xxl-2">
                    <div className="text-center text-lg-start">
                      <p>
                        Every project moves with intention, quality, and purpose.
                        From concept to execution — seamless, thoughtful, and
                        efficient. A creative workflow built to elevate your brand.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="row">

            {/* STEP 1 */}
            <div className="col-12 col-sm-6 col-xl-3">
              <div
                className={
                  "work-steps__single fade-top" +
                  (hover === 0 ? " work-steps__single-active" : "")
                }
                onMouseEnter={() => setHover(0)}
              >
                <span>25<br />%</span>
                <h5>Discover & Strategy</h5>
                <div
                  className="work-thumb-hover d-none d-md-block"
                  style={{ backgroundImage: "url('/images/process.jpg')" }}
                ></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="col-12 col-sm-6 col-xl-3">
              <div
                className={
                  "work-steps__single fade-top work-two" +
                  (hover === 1 ? " work-steps__single-active" : "")
                }
                onMouseEnter={() => setHover(1)}
              >
                <span>50<br />%</span>
                <h5>Wireframes & User-flows</h5>
                <div
                  className="work-thumb-hover d-none d-md-block"
                  style={{ backgroundImage: "url('/images/process.jpg')" }}
                ></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="col-12 col-sm-6 col-xl-3">
              <div
                className={
                  "work-steps__single fade-top work-three" +
                  (hover === 2 ? " work-steps__single-active" : "")
                }
                onMouseEnter={() => setHover(2)}
              >
                <span>75<br />%</span>
                <h5>Hi-Fidelity Design</h5>
                <div
                  className="work-thumb-hover d-none d-md-block"
                  style={{ backgroundImage: "url('/images/process.jpg')" }}
                ></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="col-12 col-sm-6 col-xl-3">
              <div
                className={
                  "work-steps__single fade-top work-four" +
                  (hover === 3 ? " work-steps__single-active" : "")
                }
                onMouseEnter={() => setHover(3)}
              >
                <span>100<br />%</span>
                <h5>Development Phase</h5>
                <div
                  className="work-thumb-hover d-none d-md-block"
                  style={{ backgroundImage: "url('/images/process.jpg')" }}
                ></div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default WorkStepsProject;
