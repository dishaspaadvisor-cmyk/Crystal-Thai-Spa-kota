import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  AlertCircle,
  Send,
  Sparkles,
  Clock3,
  ArrowUpRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import "../style/contact.css";

export default function ContactSection({ data }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const contact = data || {};

  const bookingApi =
    contact?.booking?.apiUrl ||
    "https://apibackend.mastercall.in/api/v1/web-leads/submit/";

  const formKey =
    contact?.booking?.formKey ||
    "frm_crystal_thai_spa_kota_556259";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSuccess("");
    setError("");

    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!formData.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(bookingApi, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          form_key: formKey,

          name: formData.name.trim(),

          phone: formData.phone.trim(),

          address: formData.address.trim(),

          notes: formData.notes.trim(),

          submitted_from_url: window.location.href,
        }),
      });

      let result = null;

      try {
        result = await response.json();
      } catch {
        result = null;
      }

      if (!response.ok) {
        throw new Error(
          result?.message ||
            result?.detail ||
            "Unable to submit your booking request."
        );
      }

      setSuccess(
        result?.message ||
          "Thank you! Your booking request has been submitted successfully."
      );

      setFormData({
        name: "",
        phone: "",
        address: "",
        notes: "",
      });
    } catch (submitError) {
      console.error(
        "Contact form error:",
        submitError
      );

      setError(
        submitError.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const cleanPhone =
    contact.phone?.replace(/\D/g, "") || "";

  const cleanWhatsapp =
    contact.whatsapp?.replace(/\D/g, "") || "";

  return (
    <section className="crystal-contact-section">

      {/* ==========================================
          BACKGROUND DECORATION
      =========================================== */}

      <div className="crystal-contact-orb crystal-contact-orb-one" />

      <div className="crystal-contact-orb crystal-contact-orb-two" />

      <div className="crystal-contact-ring crystal-contact-ring-one" />

      <div className="crystal-contact-ring crystal-contact-ring-two" />


      {/* ==========================================
          SECTION HEADER
      =========================================== */}

      <div className="crystal-contact-header">

        <div className="crystal-contact-eyebrow">

          <span className="crystal-contact-line" />

          <span>Get In Touch</span>

          <Sparkles size={14} />

          <span className="crystal-contact-line" />

        </div>


        <h2>
          Book Your
          <span> Spa Experience</span>
        </h2>


        <p>
          Ready to relax and recharge? Send us your
          details and our team will help arrange your
          perfect spa experience.
        </p>

      </div>


      {/* ==========================================
          MAIN CONTENT
      =========================================== */}

      <div className="crystal-contact-container">


        {/* ========================================
            BOOKING FORM
        ========================================= */}

        <div className="crystal-contact-form-card">

          {/* top decoration */}
          <div className="crystal-contact-card-line" />


          <div className="crystal-contact-form-header">

            <div className="crystal-contact-mini-icon">
              <Sparkles size={18} />
            </div>

            <div>

              <span>
                APPOINTMENT
              </span>

              <h3>
                Make an Enquiry
              </h3>

            </div>

          </div>


          <p className="crystal-contact-form-intro">
            Tell us a little about what you're
            looking for and our team will contact
            you shortly.
          </p>


          <form
            className="crystal-contact-form"
            onSubmit={handleSubmit}
          >

            {/* ==================================
                NAME + PHONE
            =================================== */}

            <div className="crystal-form-row">

              <div className="crystal-form-group">

                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                />

              </div>


              <div className="crystal-form-group">

                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  autoComplete="tel"
                  required
                />

              </div>

            </div>


            {/* ==================================
                ADDRESS
            =================================== */}

            <div className="crystal-form-group">

              <label htmlFor="address">
                Your Location
              </label>

              <div className="crystal-input-with-icon">

                <MapPin size={16} />

                <input
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  autoComplete="street-address"
                />

              </div>

            </div>


            {/* ==================================
                MESSAGE
            =================================== */}

            <div className="crystal-form-group">

              <label htmlFor="notes">
                Message
              </label>

              <textarea
                id="notes"
                name="notes"
                rows="5"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Tell us about your preferred treatment or appointment..."
              />

            </div>


            {/* ==================================
                SUCCESS MESSAGE
            =================================== */}

            {success && (
              <div className="crystal-form-message crystal-form-success">

                <CheckCircle size={18} />

                <span>
                  {success}
                </span>

              </div>
            )}


            {/* ==================================
                ERROR MESSAGE
            =================================== */}

            {error && (
              <div className="crystal-form-message crystal-form-error">

                <AlertCircle size={18} />

                <span>
                  {error}
                </span>

              </div>
            )}


            {/* ==================================
                SUBMIT
            =================================== */}

            <button
              type="submit"
              className="crystal-contact-submit"
              disabled={loading}
            >

              {loading ? (
                <>
                  <span className="crystal-button-spinner" />

                  Submitting...
                </>
              ) : (
                <>
                  <Send size={17} />

                  Book Appointment

                  <ArrowUpRight size={16} />
                </>
              )}

            </button>

          </form>


          {/* ==================================
              FORM FOOTER
          =================================== */}

          <div className="crystal-form-footer">

            <Clock3 size={15} />

            <span>
              Our team will contact you to confirm
              availability and appointment details.
            </span>

          </div>

        </div>


        {/* ========================================
            RIGHT SIDE
        ========================================= */}

        <div className="crystal-contact-right">


          {/* ======================================
              MAP
          ======================================= */}

          <div className="crystal-contact-map-card">

            <div className="crystal-map-heading">

              <div>

                <span>
                  FIND US
                </span>

                <h3>
                  Visit Our Spa
                </h3>

              </div>

              <div className="crystal-map-icon">
                <MapPin size={18} />
              </div>

            </div>


            <div className="crystal-contact-map">

              {contact.map?.embedUrl ? (
                <iframe
                  src={contact.map.embedUrl}
                  title="Crystal Thai Spa location"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="crystal-map-placeholder">
                  <MapPin size={30} />

                  <span>
                    Map location unavailable
                  </span>
                </div>
              )}

            </div>


            {contact.address && (
              <div className="crystal-map-address">

                <MapPin size={16} />

                <span>
                  {contact.address}
                </span>

              </div>
            )}

          </div>


          {/* ======================================
              CONTACT DETAILS
          ======================================= */}

          <div className="crystal-contact-details">


            {/* PHONE */}

            {contact.phone && (
              <a
                href={`tel:${cleanPhone}`}
                className="crystal-contact-detail"
              >

                <span className="crystal-detail-icon crystal-phone-icon">
                  <Phone size={18} />
                </span>

                <span className="crystal-detail-content">

                  <small>
                    CALL US
                  </small>

                  <strong>
                    {contact.phone}
                  </strong>

                </span>

                <ArrowUpRight
                  className="crystal-detail-arrow"
                  size={16}
                />

              </a>
            )}


            {/* EMAIL */}

            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="crystal-contact-detail"
              >

                <span className="crystal-detail-icon">
                  <Mail size={18} />
                </span>

                <span className="crystal-detail-content">

                  <small>
                    EMAIL US
                  </small>

                  <strong>
                    {contact.email}
                  </strong>

                </span>

                <ArrowUpRight
                  className="crystal-detail-arrow"
                  size={16}
                />

              </a>
            )}


            {/* ADDRESS */}

            {contact.address && (
              <div className="crystal-contact-detail">

                <span className="crystal-detail-icon">
                  <MapPin size={18} />
                </span>

                <span className="crystal-detail-content">

                  <small>
                    VISIT US
                  </small>

                  <strong>
                    {contact.address}
                  </strong>

                </span>

              </div>
            )}


            {/* WHATSAPP */}

            {contact.whatsapp && (
              <a
                href={`https://wa.me/${cleanWhatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="crystal-contact-detail crystal-whatsapp-detail"
              >

                <span className="crystal-detail-icon crystal-whatsapp-icon">
                  <FaWhatsapp size={19} />
                </span>

                <span className="crystal-detail-content">

                  <small>
                    WHATSAPP
                  </small>

                  <strong>
                    {contact.whatsapp}
                  </strong>

                </span>

                <ArrowUpRight
                  className="crystal-detail-arrow"
                  size={16}
                />

              </a>
            )}

          </div>

        </div>

      </div>

    </section>
  );
}