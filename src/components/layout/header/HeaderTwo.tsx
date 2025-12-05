import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "public/images/logo.png";

interface NavItem {
  label: string;
  href: string;
}

interface HeaderTwoProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const HeaderTwo = ({ openNav, setOpenNav, handleNav }: HeaderTwoProps) => {
  const [scrolled, setScrolled] = React.useState(false);
  const router = useRouter();
  const isHomePage = router.pathname === "/"; // ✅ Check if home page

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
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
        <div 
          className={`${scrolled ? "navbar-active" : ""} ${isHomePage ? "home-header" : ""} primary-navbar cmn-nav`}
          style={{
            background: "transparent !important", // ✅ No black, just transparent
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            backgroundColor: "transparent !important",
            transition: "all 0.3s ease",
          }}
        >
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
                <Link href="/" aria-label="home">
                  <Image
                    src={logo}
                    alt="Logo"
                    width={160}
                    height={40}
                    priority
                  />
                </Link>
              </div>

              {/* CENTER MENU — PC ONLY */}
              <div
                className="navbar__menu d-none d-xl-flex"
                style={{ justifyContent: "center" }}
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
                    <li key={item.href} style={{ position: "relative" }}>
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

                      {isActive(item.href) && (
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            bottom: 0,
                            width: "100%",
                            height: "3px",
                            backgroundColor: "#ff7425",
                          }}
                        />
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* RIGHT SIDE */}
              <div className="navbar__options d-flex align-items-center">
                {/* PC BUTTON */}
                <div className="d-none d-xl-flex">
                  <Link href="/contact-us" className="btn btn--secondary">
                    Let&apos;s Talk
                  </Link>
                </div>

                {/* MOBILE HAMBURGER */}
                <button
                  aria-label="menu"
                  onClick={() => handleNav()}
                  className="mobile-hamburger d-flex d-xl-none"
                  style={{
                    background: "transparent",
                    border: "none",
                    fontSize: "24px",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  ☰
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "260px",
          height: "100vh",
          background: "rgba(0, 0, 0, 0.95)", // ✅ Darker for mobile menu
          backdropFilter: "blur(20px)", // ✅ Stronger blur for mobile menu
          WebkitBackdropFilter: "blur(20px)",
          transform: openNav ? "translateX(0)" : "translateX(100%)",
          transition: "0.3s ease",
          zIndex: 2000,
          padding: "24px",
        }}
      >
        <button
          onClick={() => setOpenNav(false)}
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            background: "transparent",
            border: "none",
            color: "#fff",
            fontSize: "24px",
            cursor: "pointer",
          }}
        >
          ✕
        </button>

        <ul style={{ listStyle: "none", padding: 0, marginTop: "60px" }}>
          {navItems.map((item) => (
            <li key={item.href} style={{ marginBottom: "16px" }}>
              <Link
                href={item.href}
                onClick={() => setOpenNav(false)}
                style={{
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* MOBILE-ONLY STYLES */}
      <style jsx>{`
        .primary-navbar {
          background: transparent !important;
          backdrop-filter: blur(20px) !important;
          -webkit-backdrop-filter: blur(20px) !important;
        }

        .navbar-active {
          background: transparent !important;
          backdrop-filter: blur(25px) !important;
          -webkit-backdrop-filter: blur(25px) !important;
        }

        @media (max-width: 768px) {
          .navbar {
            min-height: 60px !important;
            padding-top: 8px !important;
            padding-bottom: 8px !important;
            grid-template-columns: auto 1fr !important;
          }

          .navbar__logo {
            padding-left: 0 !important;
          }

          .navbar__logo img {
            width: 120px !important;
            height: auto !important;
          }

          .navbar__options {
            justify-self: end !important;
          }

          .mobile-hamburger {
            position: fixed !important;
            top: 18px !important;
            right: 16px !important;
            z-index: 1000 !important;
            color: #fff !important;
          }

          .container {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }

          .primary-navbar {
            padding: 0 !important;
          }
        }
      `}</style>
    </>
  );
};

export default HeaderTwo;