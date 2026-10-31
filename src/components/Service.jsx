import { Phone, ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import "../style/service.css";

import { contactData } from "../data/siteData";

export default function Service({ category }) {
  const phoneNumber = contactData?.phone || "";

  const whatsappNumber = (
    contactData?.whatsapp || ""
  ).replace(/\D/g, "");

  return (
    <section className="crystal-service-category">

      {/* =====================================================
          CATEGORY HEADER
      ====================================================== */}

      <div className="crystal-service-category-header">

        <span className="crystal-service-category-eyebrow">
          Crystal Thai Spa
        </span>

        <div className="crystal-category-title-row">
          <span className="crystal-category-line"></span>

          <h2>{category.title}</h2>

      
        </div>

        <span className="crystal-category-diamond">
          ◆
        </span>

      </div>


      {/* =====================================================
          SERVICE GRID
      ====================================================== */}

      <div className="crystal-service-grid">

        {category.services.map((service, index) => {

          const whatsappMessage = encodeURIComponent(
            `Hello, I would like to know more about ${service.title} at Crystal Thai Spa.`
          );

          return (
            <article
              className="crystal-service-card"
              key={service.id}
            >

              {/* =================================================
                  NUMBER
              ================================================== */}

           


              {/* =================================================
                  IMAGE
              ================================================== */}

              <div className="crystal-service-image">

                <img
                  src={service.image}
                  alt={`${service.title} at Crystal Thai Spa`}
                  loading="lazy"
                />

                <div className="crystal-service-image-overlay"></div>

             


                {/* Image Badge */}

                <div className="crystal-service-badge">
                  <span>Luxury Wellness</span>
                </div>


                {/* Hover Icon */}

                <div className="crystal-service-hover-icon">
                  <ArrowUpRight size={20} />
                </div>

              </div>


              {/* =================================================
                  CONTENT
              ================================================== */}

              <div className="crystal-service-content">

                <div className="crystal-service-heading">

                  <span className="crystal-service-small-line"></span>

                  <h3>
                    {service.title}
                  </h3>

                </div>


                {service.description && (
                  <p>
                    {service.description}
                  </p>
                )}


                {/* Optional Price */}

                {service.price && (
                  <div className="crystal-service-price">
                    {service.price}
                  </div>
                )}


                {/* =================================================
                    ACTION BUTTONS
                ================================================== */}

                <div className="crystal-service-actions">

                  {/* CALL */}

                  {phoneNumber && (
                    <a
                      href={`tel:${phoneNumber}`}
                      className="crystal-call-btn"
                      aria-label={`Call for ${service.title}`}
                    >
                      <Phone size={16} />

                      <span>
                        Call Now
                      </span>
                    </a>
                  )}


                  {/* WHATSAPP */}

                  {whatsappNumber && (
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="crystal-whatsapp-btn"
                      aria-label={`WhatsApp for ${service.title}`}
                    >
                      <FaWhatsapp size={18} />

                      <span>
                        WhatsApp
                      </span>
                    </a>
                  )}

                </div>

              </div>

            </article>
          );
        })}

      </div>

    </section>
  );
}