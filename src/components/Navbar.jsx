import { useEffect, useState } from "react";
import { Menu, X, Phone, CalendarDays, ChevronDown } from "lucide-react";
import "../style/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Offers", href: "/offers" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`crystal-navbar ${
          scrolled ? "crystal-navbar-scrolled" : ""
        }`}
      >
        <div className="crystal-navbar-container">

          {/* ================================
              LEFT - DESKTOP NAVIGATION
          ================================= */}
          <nav className="crystal-nav-left">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="crystal-nav-link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ================================
              LOGO
          ================================= */}
          <a href="/" className="crystal-logo">
            <img
              src="/images/logo/2.png"
              alt="Crystal Thai Spa"
            />
          </a>

          {/* ================================
              RIGHT - DESKTOP NAVIGATION
          ================================= */}
          <div className="crystal-nav-right">

            <nav className="crystal-nav-links-right">
              {navLinks.slice(3).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="crystal-nav-link"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="/contact"
              className="crystal-book-btn"
            >
              <CalendarDays size={16} />
              <span>Book Appointment</span>
            </a>

          </div>

          {/* ================================
              MOBILE MENU BUTTON
          ================================= */}
          <button
            type="button"
            className={`crystal-mobile-toggle ${
              menuOpen ? "active" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={23} />
            ) : (
              <Menu size={23} />
            )}
          </button>
        </div>

        {/* ================================
            MOBILE MENU
        ================================= */}
        <div
          className={`crystal-mobile-menu ${
            menuOpen ? "open" : ""
          }`}
        >
          <div className="crystal-mobile-inner">

            {/* Mobile Logo */}
            <div className="crystal-mobile-logo">
              <img
                src="/images/logo/2.png"
                alt="Crystal Thai Spa"
              />
            </div>

            {/* Decorative line */}
            <div className="crystal-mobile-divider">
              <span></span>
              <i></i>
              <span></span>
            </div>

            {/* Mobile Links */}
            <nav className="crystal-mobile-links">
              {navLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="crystal-mobile-link"
                >
                  <span className="mobile-link-number">
                    0{index + 1}
                  </span>

                  <span>{link.label}</span>

                  <span className="mobile-link-arrow">
                    →
                  </span>
                </a>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="crystal-mobile-actions">

              <a
                href="tel:+919876543210"
                className="crystal-mobile-call"
              >
                <Phone size={17} />
                Call Now
              </a>

              <a
                href="/contact"
                className="crystal-mobile-book"
                onClick={closeMenu}
              >
                <CalendarDays size={17} />
                Book Appointment
              </a>

            </div>

            {/* Mobile Bottom Branding */}
            <div className="crystal-mobile-tagline">
              <span>RELAX</span>
              <b>•</b>
              <span>REFRESH</span>
              <b>•</b>
              <span>RENEW</span>
            </div>

          </div>
        </div>
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="crystal-menu-overlay"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
}