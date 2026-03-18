"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BannerProps {
  title?: any;
  navigation?: any;
  parent?: any;
  parentLink?: any;
}

const CmnBanner = ({ title, navigation, parent, parentLink }: BannerProps) => {
  const pathname = usePathname();

  let description: string | null = null;

  if (pathname.startsWith("/about")) {
    description =
      "Thy Sigma is the creative tribe that thrives on storytelling. We are your reliable partners from capturing your moments to making them momentous.";
  } else if (pathname.startsWith("/our-services")) {
    description =
      "We produce videos, manage live streaming, handle event coverage, and build media solutions that help you communicate, engage, and connect with your audience.";
  } else if (pathname.startsWith("/portfolio")) {
    description =
      "A showcase gallery of our event films, branded content, sports coverage, and livestream projects crafted with sharp execution and creative intent.";
  } else if (pathname.startsWith("/blogs")) {
    description =
      "Insights, ideas, and stories on content creation, monetisation, media production, and the future of storytelling — from the Thy Sigma team.";
  }

  return (
    <section
      className="cmn-banner bg-img"
      style={{ backgroundImage: "url('/images/banner/cmn-banner-bg.png')" }}
    >
      <div className="container">
        <div className="row gaper align-items-center">

          {/* LEFT */}
          <div
            className={`col-12 ${
              pathname.startsWith("/faq") ? "col-xl-12 col-lg-12" : "col-lg-5 col-xl-7"
            }`}
          >
            <div className="text-center text-lg-start">
              <h2
                className={`title title-anim 
                  ${pathname.startsWith("/our-services") ? "service-title" : ""}
                  ${pathname.startsWith("/about") ? "about-title" : ""}
                  ${pathname.startsWith("/portfolio") ? "portfolio-title" : ""}
                  ${pathname.startsWith("/faq") ? "faq-title" : ""}
                  ${pathname.startsWith("/blogs") ? "blogs-title" : ""}
                `}
              >
                {pathname.startsWith("/our-services") ? (
                  <>
                    Professional Event Videography, <br />
                    Live Streaming & <br />
                    Media Production <br />
                    - Mumbai
                  </>
                ) : pathname.startsWith("/blogs") ? (
                  <>
                    Ideas, Insights & Stories <br />
                     from <br />
                    Thy Sigma
                  </>
                ) : (
                  title
                )}
              </h2>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <i className="fa-solid fa-house"></i> Home
                    </Link>
                  </li>

                  {parent && (
                    <li className="breadcrumb-item">
                      <Link href={parentLink}>{parent}</Link>
                    </li>
                  )}

                  <li className="breadcrumb-item active" aria-current="page">
                    {navigation}
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          {/* RIGHT — only when description exists */}
          {description && (
            <div className="col-12 col-lg-7 col-xl-5">
              <div className="text-center text-lg-start">
                <p className="primary-text">{description}</p>
              </div>
            </div>
          )}

        </div>
      </div>

      <style jsx>{`
        .service-title {
          font-size: 40px;
          line-height: 1.2;
          max-width: 900px;
          word-break: break-word;
        }
        .about-title {
          font-size: 36px;
          line-height: 1.35;
          max-width: 720px;
          margin-bottom: 20px;
        }
        .portfolio-title {
          font-size: 38px;
          line-height: 1.3;
          max-width: 720px;
          margin-bottom: 18px;
        }
        .faq-title {
          font-size: 50px;
          line-height: 1.3;
          max-width: 1400px;
          margin-bottom: 18px;
        }
        .blogs-title {
          font-size: 42px;
          line-height: 1.25;
          max-width: 720px;
          margin-bottom: 18px;
        }

        @media (max-width: 1200px) {
          .service-title { font-size: 36px; max-width: 500px; }
          .blogs-title { font-size: 34px; }
        }
        @media (max-width: 992px) {
          .service-title { font-size: 30px; max-width: 100%; }
          .blogs-title { font-size: 28px; }
        }
        @media (max-width: 576px) {
          .service-title { font-size: 24px; }
          .blogs-title { font-size: 24px; }
        }
      `}</style>
    </section>
  );
};

export default CmnBanner;