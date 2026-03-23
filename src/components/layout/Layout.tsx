import React, { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";
import { useRouter } from "next/router";
import Header from "./header/Header";
import HeaderTwo from "./header/HeaderTwo";
// import HeaderThree from "./header/HeaderThree";
// import HeaderFour from "./header/HeaderFour";
// import HeaderFive from "./header/HeaderFive";
// import Footer from "./footer/Footer";
import FooterTwo from "./footer/FooterTwo";
// import FooterThree from "./footer/FooterThree";
// import FooterFour from "./footer/FooterFour";
// import FooterFive from "./footer/FooterFive";
// import VideoModal from "./VideoModal";
import ScrollProgressBtn from "./ScrollProgressBtn";
import CustomCursor from "./CustomCursor";
import SplitType from "split-type";

type LayoutProps = {
  children: React.ReactNode;
  handleMouseEnterTitle?: any;
  handleMouseLeaveTitle?: any;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  video?: React.ReactNode;
};

const Layout = ({
  children,
  header,
  footer,
  handleMouseEnterTitle,
  handleMouseLeaveTitle,
  video,
}: LayoutProps) => {

  // tilt effect
  useEffect(() => {
    const tiltElements = document.querySelectorAll(".topy-tilt");

    tiltElements.forEach((element) => {
      const tiltElement = element as HTMLElement;
      VanillaTilt.init(tiltElement, {
        max: 5,
        speed: 3000,
      });
    });
  }, []);

  // navbar
  const [openNav, setOpenNav] = useState(false);

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  const router = useRouter();

  const classMappings: Record<string, string> = {
    "/index-light": "home-light",
    "/index-two-light": "home-two-light",
    "/index-three-light": "home-three-light",
    "/index-four-light": "home-four-light",
    "/index-five-light": "home-five-light",
  };

  const classNameForCurrentPath = classMappings[router.pathname] || "";

  let additionalClasses = " ";

  const combinedClasses = `${additionalClasses} my-app`;

  const combinedClassName = `${combinedClasses}${
    openNav ? " body-active" : ""
  } ${classNameForCurrentPath}`;

  // fade animation
  useEffect(() => {
    const fadeWrapperRefs = document.querySelectorAll(".fade-wrapper");

    fadeWrapperRefs.forEach((fadeWrapperRef) => {
      const fadeItems = fadeWrapperRef.querySelectorAll(".fade-top");

      fadeItems.forEach((element, index) => {
        const delay = index * 0.15;

        gsap.set(element, {
          opacity: 0,
          y: 100,
        });

        ScrollTrigger.create({
          trigger: element,
          start: "top 100%",
          end: "bottom 20%",
          scrub: 0.5,
          onEnter: () => {
            gsap.to(element, {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: delay,
            });
          },
          once: true,
        });
      });
    });
  }, []);

  // appear down
  useEffect(() => {
    const appearDownSections = document.querySelectorAll(".appear-down");

    appearDownSections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: section,
            scrub: 1,
            start: "top bottom",
            end: "bottom center",
            markers: false,
          },
        }
      );
    });
  }, []);

  // split text animation
  useEffect(() => {
    const myText = new SplitType(".title-anim");
    const titleAnims = document.querySelectorAll(".title-anim");

    titleAnims.forEach((titleAnim) => {
      const charElements = titleAnim.querySelectorAll(".char");

      charElements.forEach((char, index) => {
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: char,
            start: "top 90%",
            end: "bottom 60%",
            scrub: false,
            markers: false,
            toggleActions: "play none none none",
          },
        });

        const charDelay = index * 0.03;

        tl2.from(char, {
          duration: 0.8,
          x: 70,
          delay: charDelay,
          autoAlpha: 0,
        });
      });
    });
  }, []);

  return (
    <Fragment>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="/images/logo.png"
          type="image/x-icon"
        />
        <title>Event Coverage & Live Streaming Services in Mumbai | Thy Sigma</title>
        <meta name="keywords" content="video production Mumbai, photography Navi Mumbai, live streaming services, corporate event coverage, content creation, graphic design Thane, media production company India" />
        <meta
          name="description"
          content="Thy Sigma provides professional video production, photography, and live streaming services in Mumbai, Navi Mumbai, and Thane."
        />
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "name": "Thy Sigma Media Services",
                  "url": "https://www.thysigma.com",
                  "logo": "https://www.thysigma.com/images/logo.png",
                  "image": "https://www.thysigma.com/images/logo.png",
                  "description": "Thy Sigma is a professional media production company in Navi Mumbai offering video production, photography, live streaming, content creation, content marketing, event coverage, corporate events, social media marketing, content reporposing and graphic design services.",
                  "telephone": "+919082083273",
                  "email": "kd@thysigma.com",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "116, Shah Heritage, Seawoods West",
                    "addressLocality": "Navi Mumbai",
                    "addressRegion": "Maharashtra",
                    "postalCode": "400706",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "19.0196",
                    "longitude": "73.0169"
                  },
                  "sameAs": [
                    "https://www.linkedin.com/company/thy-sigma/",
                    "https://www.instagram.com/thysigma"
                  ],
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                    "opens": "09:00",
                    "closes": "19:00"
                  },
                  "priceRange": "₹₹"
                },
                {
                  "@type": "Service",
                  "serviceType": "Video Production",
                  "provider": { "@type": "LocalBusiness", "name": "Thy Sigma Media Services" },
                  "areaServed": ["Navi Mumbai", "Mumbai", "Thane"],
                  "description": "Professional video production services including corporate films, brand videos, sports coverage, and AI/ML video production in Navi Mumbai and Mumbai."
                },
                {
                  "@type": "Service",
                  "serviceType": "Live Streaming",
                  "provider": { "@type": "LocalBusiness", "name": "Thy Sigma Media Services" },
                  "areaServed": ["Navi Mumbai", "Mumbai", "Thane"],
                  "description": "Professional live streaming services with multi-camera setup, broadcast-level audio, and backup routes for corporate events and conferences."
                },
                {
                  "@type": "Service",
                  "serviceType": "Photography",
                  "provider": { "@type": "LocalBusiness", "name": "Thy Sigma Media Services" },
                  "areaServed": ["Navi Mumbai", "Mumbai", "Thane"],
                  "description": "Event photography, product photography, editorial shoots, and corporate photography services in Navi Mumbai and Mumbai."
                },
                {
                  "@type": "Service",
                  "serviceType": "Graphic Design",
                  "provider": { "@type": "LocalBusiness", "name": "Thy Sigma Media Services" },
                  "areaServed": ["Navi Mumbai", "Mumbai", "Thane"],
                  "description": "Creative graphic design services including ad creatives, marketing materials, digital creatives, and event promotion design."
                },
               {
                  "@type": "Service",
                  "serviceType": "Content Creation",
                  "provider": { "@type": "LocalBusiness", "name": "Thy Sigma Media Services" },
                  "areaServed": ["Navi Mumbai", "Mumbai", "Thane"],
                  "description": "Professional content creation services including video editing, animation, and digital marketing content in Navi Mumbai and Mumbai."
                },
                  {
                  "@type": "Service",
                  "serviceType": "Content Marketing",
                  "provider": { "@type": "LocalBusiness", "name": "Thy Sigma Media Services" },
                  "areaServed": ["Navi Mumbai", "Mumbai", "Thane"],
                  "description": "Strategic content marketing services to promote your brand and engage your audience in Navi Mumbai and Mumbai."
                },
                  {
                  "@type": "Service",
                  "serviceType": "Event Coverage",
                  "provider": { "@type": "LocalBusiness", "name": "Thy Sigma Media Services" },
                  "areaServed": ["Navi Mumbai", "Mumbai", "Thane"],
                  "description": "Professional event coverage services for corporate events, conferences, and special occasions in Navi Mumbai and Mumbai."
                },
                  {
                  "@type": "Service",
                  "serviceType": "Corporate Events",
                  "provider": { "@type": "LocalBusiness", "name": "Thy Sigma Media Services" },
                  "areaServed": ["Navi Mumbai", "Mumbai", "Thane"],
                  "description": "Professional corporate event planning and execution services in Navi Mumbai and Mumbai."
                },
                  {
                  "@type": "Service",
                  "serviceType": "Social Media Marketing",
                  "provider": { "@type": "LocalBusiness", "name": "Thy Sigma Media Services" },
                  "areaServed": ["Navi Mumbai", "Mumbai", "Thane"],
                  "description": "Strategic social media marketing services to promote your brand and engage your audience in Navi Mumbai and Mumbai."
                },
                  {
                  "@type": "Service",
                  "serviceType": "Content Repurposing",
                  "provider": { "@type": "LocalBusiness", "name": "Thy Sigma Media Services" },
                  "areaServed": ["Navi Mumbai", "Mumbai", "Thane"],
                  "description": "Strategic content repurposing services to maximize the value of your existing content in Navi Mumbai and Mumbai."
                },
                {
                  "@type": "CreativeWork",
                  "name": "Thy Sigma Portfolio",
                  "url": "https://www.thysigma.com/portfolio",
                  "description": "Explore Thy Sigma's portfolio showcasing our expertise in video production, photography, live streaming, content creation, and graphic design services in Navi Mumbai and Mumbai."
                }
              ]
            })
          }}
        />
      </Head>
      <div className={combinedClassName}>
        {header === 1 && (
          <Header
            openNav={openNav}
            handleNav={handleNav}
            setOpenNav={setOpenNav}
          />
        )}
         {header === 2 && (
          <HeaderTwo
            openNav={openNav}
            handleNav={handleNav}
            setOpenNav={setOpenNav}
          />
        )}{/*
        {header === 3 && (
          <HeaderThree
            openNav={openNav}
            handleNav={handleNav}
            setOpenNav={setOpenNav}
          />
        )}
        {header === 4 && (
          <HeaderFour
            openNav={openNav}
            handleNav={handleNav}
            setOpenNav={setOpenNav}
          />
        )}
        {header === 5 && (
          <HeaderFive
            openNav={openNav}
            handleNav={handleNav}
            setOpenNav={setOpenNav}
          /> */}
        
        <main>{children}</main>
        {/* {footer === 1 && <Footer />} */}
        {footer === 2 && <FooterTwo />}
        {/* {footer === 3 && <FooterThree />}
        {footer === 4 && <FooterFour />}
        {footer === 5 && <FooterFive />} */}
        {/* {video ? <VideoModal /> : null} */}
        <ScrollProgressBtn />
        <CustomCursor
          onTitleMouseEnter={handleMouseEnterTitle}
          onTitleMouseLeave={handleMouseLeaveTitle}
        />
      </div>
    </Fragment>
  );
};

export default Layout;
