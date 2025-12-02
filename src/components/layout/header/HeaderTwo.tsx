import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "public/images/logo.png";
import Offcanvas from "./Offcanvas";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const HeaderTwo = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about-us" },
    { label: "SERVICES", href: "/our-services" },
    { label: "PORTFOLIO", href: "/portfolio" },
    { label: "FAQ", href: "/faq" },
  ];

  const isActive = (href: string) => router.pathname === href;

  return (
    <>
      <header className="header">
        <div className={`${scrolled ? "navbar-active" : ""} primary-navbar cmn-nav`}>
          <div className="container">
            <nav
              className="navbar p-0"
              style={{
                minHeight: "90px",
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                alignItems: "center",
              }}
            >
              {/* LOGO */}
              <div className="navbar__logo">
                <Link href="/" aria-label="go to home">
                  <Image src={logo} alt="Logo" width={160} height={40} priority />
                </Link>
              </div>

              {/* CENTER MENU */}
              <div
                className="navbar__menu"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ul
                  style={{
                    display: "flex",
                    gap: "32px",
                    alignItems: "center",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  {navItems.map((item) => (
                    <li
                      key={item.href}
                      className="navbar__item nav-fade"
                      style={{ position: "relative" }}
                    >
                      <Link
                        href={item.href}
                        style={{
                          fontWeight: 600,
                          paddingBottom: "6px",
                          display: "inline-block",
                        }}
                      >
                        {item.label}
                      </Link>

                      {/* ORANGE ACTIVE LINE */}
                      {isActive(item.href) && (
                        <span
                          style={{
                            position: "absolute",
                            left: "0",
                            bottom: "0",
                            width: "100%",
                            height: "3px",
                            backgroundColor: "#ff7425",
                            borderRadius: "2px",
                          }}
                        />
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* RIGHT OPTIONS */}
              <div className="navbar__options">
                <div className="navbar__mobile-options d-none d-sm-flex">
                  <Link href="/contact-us" className="btn btn--secondary">
                    Let&apos;s Talk
                  </Link>
                </div>

                <button
                  className="open-mobile-menu d-flex d-xl-none"
                  aria-label="toggle mobile menu"
                  onClick={handleNav}
                >
                  <i className="fa-light fa-bars-staggered"></i>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <Offcanvas openNav={openNav} setOpenNav={setOpenNav} />
    </>
  );
};

export default HeaderTwo;
