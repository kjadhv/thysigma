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
  }

  return (
    <section
      className="cmn-banner bg-img"
      style={{ backgroundImage: "url('/images/banner/cmn-banner-bg.png')" }}
    >
      <div className="container">
        <div className="row gaper align-items-center">

          {/* LEFT */}
          <div className="col-12 col-lg-5 col-xl-7">
            <div className="text-center text-lg-start">
              <h2 className="title title-anim">{title}</h2>

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

          {/* RIGHT – ONLY WHEN TEXT EXISTS */}
          {description && (
            <div className="col-12 col-lg-7 col-xl-5">
              <div className="text-center text-lg-start">
                <p className="primary-text">{description}</p>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default CmnBanner;
