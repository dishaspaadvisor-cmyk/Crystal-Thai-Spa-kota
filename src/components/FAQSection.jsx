import { useState } from "react";
import {
  Plus,
  Minus,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import "../style/faq.css";

export default function FAQSection({ data }) {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId((currentId) =>
      currentId === id ? null : id
    );
  };

  const faqData = data || {};

  const image =
    faqData.image ||
    "/images/faq-spa.jpg";

  return (
    <section className="crystal-faq-section">

      {/* Decorative background */}
      <div className="crystal-faq-bg-orb crystal-faq-bg-orb-one"></div>
      <div className="crystal-faq-bg-orb crystal-faq-bg-orb-two"></div>

      <div className="crystal-faq-container">

        {/* =========================================
            LEFT IMAGE
        ========================================== */}

        <div className="crystal-faq-visual">

          <div className="crystal-faq-image-wrap">

            <div className="crystal-faq-image-frame"></div>

            <img
              src="/images/36.png"
              alt={
                faqData.imageAlt ||
                "Luxury spa relaxation experience"
              }
              className="crystal-faq-image"
              loading="lazy"
            />

            <div className="crystal-faq-image-overlay"></div>

            {/* Image badge */}
            <div className="crystal-faq-image-badge">
              <Sparkles size={15} />
              <span>Pure Relaxation</span>
            </div>

          </div>

          {/* Floating information card */}
          <div className="crystal-faq-floating-card">

            <div className="crystal-faq-floating-icon">
              <Sparkles size={18} />
            </div>

            <div>
              <span>Crystal Thai Spa</span>
              <strong>
                Relax. Refresh. Reconnect.
              </strong>
            </div>

          </div>

        </div>


        {/* =========================================
            FAQ CONTENT
        ========================================== */}

        <div className="crystal-faq-content">

          {/* Header */}
          <div className="crystal-faq-heading">

            <div className="crystal-faq-eyebrow">

              <span className="crystal-faq-eyebrow-line"></span>

              <span>
                {faqData.eyebrow || "Crystal Thai Spa"}
              </span>

              <Sparkles size={14} />

            </div>


            <h2>
              {faqData.title ||
                "Frequently Asked Questions"}
            </h2>


            <p>
              {faqData.description ||
                "Everything you need to know before your relaxing spa experience. Find quick answers to our most frequently asked questions."}
            </p>

          </div>


          {/* =========================================
              FAQ LIST
          ========================================== */}

          <div className="crystal-faq-list">

            {faqData.items?.length > 0 ? (
              faqData.items.map((item, index) => {

                const isOpen =
                  activeId === item.id;

                return (
                  <div
                    className={`crystal-faq-item ${
                      isOpen
                        ? "crystal-faq-item-open"
                        : ""
                    }`}
                    key={
                      item.id ||
                      `faq-${index}`
                    }
                  >

                    <button
                      type="button"
                      className="crystal-faq-question"
                      onClick={() =>
                        toggleFAQ(item.id)
                      }
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${item.id}`}
                    >

                      <div className="crystal-faq-question-left">

                        <span className="crystal-faq-number">
                          {String(index + 1).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        <span className="crystal-faq-question-text">
                          {item.question}
                        </span>

                      </div>


                      <span className="crystal-faq-icon">

                        {isOpen ? (
                          <Minus size={18} />
                        ) : (
                          <Plus size={18} />
                        )}

                      </span>

                    </button>


                    <div
                      id={`faq-answer-${item.id}`}
                      className={`crystal-faq-answer ${
                        isOpen
                          ? "crystal-faq-answer-open"
                          : ""
                      }`}
                    >

                      <div className="crystal-faq-answer-inner">

                        <span className="crystal-faq-answer-line"></span>

                        <p>
                          {item.answer}
                        </p>

                      </div>

                    </div>

                  </div>
                );
              })
            ) : (
              <div className="crystal-faq-empty">
                <p>
                  No frequently asked questions available.
                </p>
              </div>
            )}

          </div>


          {/* Bottom CTA */}
          <div className="crystal-faq-bottom">

            <div className="crystal-faq-bottom-text">

              <span>
                Still have questions?
              </span>

              <p>
                Our team is happy to help you.
              </p>

            </div>

            <a
              href="#contact"
              className="crystal-faq-contact-btn"
            >
              <span>Contact Us</span>
              <ArrowUpRight size={17} />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}