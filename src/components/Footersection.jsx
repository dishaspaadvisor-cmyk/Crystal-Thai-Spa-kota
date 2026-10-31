import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ChevronRight,
  Clock3,
  Sparkles,
} from "lucide-react";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import "../style/footer.css";

export default function Footer({ data }) {
  const footerData = data || {};

  const phone =
    footerData.phone || "";

  const whatsapp =
    footerData.whatsapp || "";

  const email =
    footerData.email || "";

  const address =
    footerData.address || "";

  const logo =
    footerData.logo ||
    "/images/logo/2.png";

  const cleanPhone =
    phone.replace(/\D/g, "");

  const cleanWhatsapp =
    whatsapp.replace(/\D/g, "");

  const whatsappMessage = encodeURIComponent(
    `Hello, I would like to know more about Crystal Thai Spa.`
  );

  const currentYear =
    new Date().getFullYear();

  return (
    <footer className="crystal-footer">


      {/* =====================================================
          TOP CTA
      ====================================================== */}

      <section className="crystal-footer-cta">

        <div className="crystal-footer-cta-decoration">
          <Sparkles size={17} />
        </div>


        <div className="crystal-footer-cta-content">

          <span className="crystal-footer-eyebrow">
            YOUR MOMENT OF WELLNESS
          </span>

          <h2>
            Ready to
            <span> Relax?</span>
          </h2>

          <p>
            Give yourself time to unwind, refresh
            and reconnect. Your perfect spa
            experience is just a call away.
          </p>

        </div>


        <a
          href="#contact"
          className="crystal-footer-cta-button"
        >
          <span>
            Book Your Experience
          </span>

          <ArrowUpRight size={18} />
        </a>

      </section>



      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="crystal-footer-main">

        <div className="crystal-footer-container">


          {/* =================================================
              BRAND
          ================================================= */}

          <div className="crystal-footer-brand">

            <a
              href="/"
              className="crystal-footer-logo-link"
            >

              <img
                src={logo}
                alt="Crystal Thai Spa"
                className="crystal-footer-logo"
              />

            </a>


            <div className="crystal-footer-brand-line">
              <span></span>
              <span></span>
              <span></span>
            </div>


            <p className="crystal-footer-description">
              Crystal Thai Spa is a peaceful
              destination created for relaxation,
              rejuvenation and wellness. Step away
              from your everyday routine and enjoy
              a calming spa experience.
            </p>


            {/* WhatsApp */}

            {cleanWhatsapp && (
              <a
                href={`https://wa.me/${cleanWhatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="crystal-footer-whatsapp"
              >

                <FaWhatsapp size={18} />

                <span>
                  Chat With Us
                </span>

                <ArrowUpRight size={15} />

              </a>
            )}

          </div>



          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div className="crystal-footer-column">

            <div className="crystal-footer-column-heading">

              <span>
                EXPLORE
              </span>

              <h3>
                Quick Links
              </h3>

            </div>


            <ul className="crystal-footer-links">

              <li>
                <a href="/">
                  <span>Home</span>
                  <ChevronRight size={14} />
                </a>
              </li>

              <li>
                <a href="/about">
                  <span>About Us</span>
                  <ChevronRight size={14} />
                </a>
              </li>

              <li>
                <a href="/services">
                  <span>Our Services</span>
                  <ChevronRight size={14} />
                </a>
              </li>

              <li>
                <a href="/offers">
                  <span>Special Offers</span>
                  <ChevronRight size={14} />
                </a>
              </li>

              <li>
                <a href="/gallery">
                  <span>Gallery</span>
                  <ChevronRight size={14} />
                </a>
              </li>

              <li>
                <a href="/contact">
                  <span>Contact</span>
                  <ChevronRight size={14} />
                </a>
              </li>

            </ul>

          </div>



          {/* =================================================
              SERVICES
          ================================================= */}

          <div className="crystal-footer-column">

            <div className="crystal-footer-column-heading">

              <span>
                WELLNESS
              </span>

              <h3>
                Our Services
              </h3>

            </div>


            <ul className="crystal-footer-links">

              <li>
                <a href="/services">

                  <span>
                    Thai Massage
                  </span>

                  <ChevronRight size={14} />

                </a>
              </li>

              <li>
                <a href="/services">

                  <span>
                    Swedish Massage
                  </span>

                  <ChevronRight size={14} />

                </a>
              </li>

              <li>
                <a href="/services">

                  <span>
                    Deep Tissue Massage
                  </span>

                  <ChevronRight size={14} />

                </a>
              </li>

              <li>
                <a href="/services">

                  <span>
                    Aromatherapy
                  </span>

                  <ChevronRight size={14} />

                </a>
              </li>

              <li>
                <a href="/services">

                  <span>
                    Body Wellness
                  </span>

                  <ChevronRight size={14} />

                </a>
              </li>

              <li>
                <a href="/services">

                  <span>
                    Spa Packages
                  </span>

                  <ChevronRight size={14} />

                </a>
              </li>

            </ul>

          </div>



          {/* =================================================
              CONTACT
          ================================================= */}

          <div className="crystal-footer-contact">

            <div className="crystal-footer-column-heading">

              <span>
                CONNECT
              </span>

              <h3>
                Contact Us
              </h3>

            </div>


            {/* Phone */}

            {phone && (
              <a
                href={`tel:${cleanPhone}`}
                className="crystal-footer-contact-item"
              >

                <span className="crystal-footer-contact-icon">
                  <Phone size={17} />
                </span>

                <span>

                  <small>
                    CALL US
                  </small>

                  <strong>
                    {phone}
                  </strong>

                </span>

              </a>
            )}


            {/* Email */}

            {email && (
              <a
                href={`mailto:${email}`}
                className="crystal-footer-contact-item"
              >

                <span className="crystal-footer-contact-icon">
                  <Mail size={17} />
                </span>

                <span>

                  <small>
                    EMAIL
                  </small>

                  <strong>
                    {email}
                  </strong>

                </span>

              </a>
            )}


            {/* Address */}

            {address && (
              <div className="crystal-footer-contact-item">

                <span className="crystal-footer-contact-icon">
                  <MapPin size={17} />
                </span>

                <span>

                  <small>
                    VISIT US
                  </small>

                  <strong>
                    {address}
                  </strong>

                </span>

              </div>
            )}


            {/* Opening */}

            <div className="crystal-footer-contact-item">

              <span className="crystal-footer-contact-icon">
                <Clock3 size={17} />
              </span>

              <span>

                <small>
                  OPENING HOURS
                </small>

                <strong>
                  Open Daily
                </strong>

              </span>

            </div>

          </div>

        </div>

      </div>



      {/* =====================================================
          LOCATION STRIP
      ====================================================== */}

      <div className="crystal-footer-location">

        <div className="crystal-footer-location-inner">

          <div className="crystal-footer-location-icon">
            <MapPin size={19} />
          </div>

          <div>

            <span>
              FIND US
            </span>

            <p>
              {address ||
                "Visit Crystal Thai Spa for a relaxing wellness experience."}
            </p>

          </div>

          <a
            href="#contact"
            className="crystal-footer-location-link"
          >
            <span>
              Get Directions
            </span>

            <ArrowUpRight size={16} />
          </a>

        </div>

      </div>



      {/* =====================================================
          BOTTOM FOOTER
      ====================================================== */}

      <div className="crystal-footer-bottom">

        <div className="crystal-footer-bottom-inner">


          {/* Copyright */}

          <p className="crystal-footer-copyright">
            © {currentYear} Crystal Thai Spa.
            All rights reserved.
          </p>


          {/* Social */}

          <div className="crystal-footer-social">

            <span>
              FOLLOW US
            </span>


            <a
              href="#"
              aria-label="Instagram"
              className="crystal-social-link"
            >
              <FaInstagram size={16} />
            </a>


            <a
              href="#"
              aria-label="Facebook"
              className="crystal-social-link"
            >
              <FaFacebookF size={14} />
            </a>


            {cleanWhatsapp && (
              <a
                href={`https://wa.me/${cleanWhatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="crystal-social-link crystal-social-whatsapp"
              >
                <FaWhatsapp size={16} />
              </a>
            )}

          </div>


          {/* Legal */}

          <div className="crystal-footer-legal">

            <a href="/privacy-policy">
              Privacy Policy
            </a>

            <span>•</span>

            <a href="/terms">
              Terms
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}