import React from "react";
import Image from "next/image";
import anish from "public/images/anish.jpg";
import kartik from "public/images/kartik.jpg";
import kalyani from "public/images/kalyani.jpg";
const ClientFeedbackMain = () => {
  return (
    <section className="section feedback-s fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="content">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <p>
                  Welcome to our media services. We are dedicated to providing
                  top-notch solutions to elevate your brand's presence in the
                  digital world.
                </p>
              </div>
              <hr />
              <div className="author">
                <div className="thumb">
                  <Image src={kartik} alt="Image" />
                </div>
                <div className="author-meta">
                  <h5>Kartik Salve</h5>
                  <p>Senior engineer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="content">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <p>
                  Thy Sigma has been an invaluable partner in our digital
                  transformation journey. Their expertise in media services has
                  helped us reach new heights.
                </p>
              </div>
              <hr />
              <div className="author">
                <div className="thumb">
                  <Image src={anish} alt="Image" />
                </div>
                <div className="author-meta">
                  <h5>Anish Gupta</h5>
                  <p>Client</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="content">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <p>
                  We are extremely satisfied with the media services provided by
                  Thy Sigma. Their team is professional, creative, and always
                  goes the extra mile to ensure our success.
                </p>
              </div>
              <hr />
              <div className="author">
                <div className="thumb">
                  <Image src={kalyani} alt="Image" />
                </div>
                <div className="author-meta">
                  <h5>Kalyani Jadhav</h5>
                  <p>Intern</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="content">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <p>
                  p luctus orci. Donec vitae mattis quam, vitae tempor
                  arcu. Aenean non odio porttitor, convallis erat sit amet,
                  facilisis velit.
                </p>
              </div>
              <hr />
              <div className="author">
                <div className="thumb">
                  <Image src={avatar} alt="Image" />
                </div>
                <div className="author-meta">
                  <h5>Daniel Smith</h5>
                  <p>Senior engineer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="content">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <p>
                  posuere luctus orci. Donec vitae mattis quam, vitae tempor
                  arcu. Aenean non odio porttitor, convallis erat sit amet,
                  facilisis velit.
                </p>
              </div>
              <hr />
              <div className="author">
                <div className="thumb">
                  <Image src={avatar} alt="Image" />
                </div>
                <div className="author-meta">
                  <h5>Daniel Smith</h5>
                  <p>Senior engineer</p>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="content">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <p>
                  posuere luctus orci. Donec vitae mattis quam, vitae tempor
                  arcu. Aenean non odio porttitor, convallis erat sit amet,
                  facilisis velit.
                </p>
              </div>
              <hr />
              <div className="author">
                <div className="thumb">
                  <Image src={avatar} alt="Image" />
                </div>
                <div className="author-meta">
                  <h5>Daniel Smith</h5>
                  <p>Senior engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="section__content-cta text-center">
              <button className="btn btn--secondary">Load More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedbackMain;
