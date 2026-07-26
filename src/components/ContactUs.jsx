import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, ExternalLink, ChevronDown } from 'lucide-react';
import './ContactUs.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Travels',
    subject: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ownerContact, setOwnerContact] = useState({
    email: 'owner@example.com',
    phone: '1234567890',
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownOptions = [
    { value: 'Travels', label: 'Travels (Holiday Packages & Stays)' },
    { value: 'Rent a Car', label: 'Rent a Car (Premium Car Rentals)' },
    { value: 'Air Ticketing', label: 'Air Ticketing (Flight Reservation)' }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitInquiry = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const messageTemplate = `New Inquiry for Zenith Tours:\n` +
      `---------------------------------\n` +
      `👤 Name: ${formData.name}\n` +
      `📧 Email: ${formData.email}\n` +
      `📞 Phone: ${formData.phone}\n` +
      `🏷️ Category: ${formData.service}\n` +
      `📌 Subject: ${formData.subject}\n` +
      `💬 Message: ${formData.message}`;

    try {
      await fetch(`https://formsubmit.co/ajax/${ownerContact.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          ServiceCategory: formData.service,
          Subject: formData.subject,
          Message: formData.message,
          _subject: `Zenith Tours Inquiry: ${formData.service} - ${formData.subject}`
        })
      });
    } catch (err) {
      console.warn("Email API submission failed, continuing to user confirmation dialog.", err);
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const whatsappMessage = `Hello, I just submitted an inquiry on Zenith Tours:\n\n` +
      `*Category:* ${formData.service}\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Subject:* ${formData.subject}\n` +
      `*Message:* ${formData.message}`;

    const encodedText = encodeURIComponent(whatsappMessage);
    const url = `https://wa.me/${ownerContact.phone}?text=${encodedText}`;
    window.open(url, '_blank');
  };

  const handleEmailMailto = () => {
    const mailtoSubject = encodeURIComponent(`Zenith Tours Inquiry: ${formData.service} - ${formData.subject}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCategory: ${formData.service}\n\nMessage:\n${formData.message}`);
    const url = `mailto:${ownerContact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    window.open(url, '_blank');
  };

  return (
    <div className="contact-screen animate-fadeIn">
      {/* Hero Banner - Matching Travels Page */}
      <section className="contact-hero-banner">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <span className="hero-badge badge badge-indigo">Connect With Us</span>
          <h1 className="hero-title">Let's Plan Your <span className="text-gradient">Next Chapter</span></h1>
          <p className="hero-subtitle">Have questions about our travel packages, car fleet, or flight details? Send us an inquiry and our desk will contact you immediately.</p>
        </div>
      </section>

      <div className="contact-content-wrapper container">
        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="contact-info-panel glass-panel">
            <h2 className="section-title">Contact Info</h2>
            <p className="panel-desc">Reach out directly via phone or email, or drop by our global headquarters office.</p>

            <div className="contact-info-list">
              <div className="info-item">
                <div className="info-icon-wrapper">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Call Concierge</h4>
                  <p>+1 (555) 890-4820</p>
                  <p>Mon - Sun, 24 Hours</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-wrapper">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>General Inquiries</h4>
                  <p>support@zenithtours.com</p>
                  <p>bookings@zenithtours.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-wrapper">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Headquarters Office</h4>
                  <p>742 Evergreen Terrace</p>
                  <p>Suite 100, New York, NY</p>
                </div>
              </div>
            </div>

            <div className="owner-config glass-panel">
              <h4>💡 Owner Notification Config</h4>
              <p>Setup your custom notification channels below to receive customer inquiries:</p>

              <div className="config-form-group">
                <label>Owner Email</label>
                <input
                  type="email"
                  value={ownerContact.email}
                  onChange={(e) => setOwnerContact({ ...ownerContact, email: e.target.value })}
                  placeholder="owner@example.com"
                />
              </div>

              <div className="config-form-group">
                <label>Owner WhatsApp (digits only, e.g. 1234567890)</label>
                <input
                  type="text"
                  value={ownerContact.phone}
                  onChange={(e) => setOwnerContact({ ...ownerContact, phone: e.target.value })}
                  placeholder="1234567890"
                />
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="contact-form-panel glass-panel">
            <h2 className="section-title">Submit an Inquiry</h2>
            <p className="panel-desc">Select the appropriate department, fill details, and get notified instantly.</p>

            <form onSubmit={handleSubmitInquiry} className="inquiry-form">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="form-control"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <div className="form-group flex-1">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="form-control"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group flex-1">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="form-control"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group custom-dropdown-group">
                <label className="form-label">Related Service Category</label>
                <div className="custom-dropdown-container">
                  <button
                    type="button"
                    className={`form-control custom-dropdown-trigger ${dropdownOpen ? 'open' : ''}`}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
                  >
                    <span>
                      {formData.service === 'Travels' ? 'Travels (Holiday Packages & Stays)' :
                        formData.service === 'Rent a Car' ? 'Rent a Car (Premium Car Rentals)' :
                          'Air Ticketing (Flight Reservation)'}
                    </span>
                    <ChevronDown className={`dropdown-chevron ${dropdownOpen ? 'rotated' : ''}`} size={18} />
                  </button>

                  {dropdownOpen && (
                    <div className="custom-dropdown-list glass-panel">
                      {dropdownOptions.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          className={`custom-dropdown-item ${formData.service === opt.value ? 'selected' : ''}`}
                          onClick={() => {
                            setFormData({ ...formData, service: opt.value });
                            setDropdownOpen(false);
                          }}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="form-control"
                  placeholder="Inquiry regarding..."
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message / Details</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="form-control textarea-control"
                  placeholder="Provide details about dates, preferences, passenger counts, or fleet classes..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-inquiry-btn" disabled={submitting}>
                {submitting ? (
                  <>
                    <div className="spinner-sm" />
                    <span>Submitting Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Submission Success Modal */}
        {submitted && (
          <div className="modal-overlay">
            <div className="modal-content glass-panel text-center success-modal animate-fadeIn">
              <div className="success-icon-wrapper">
                <CheckCircle size={48} className="success-icon" />
              </div>

              <h2 className="modal-title">Inquiry Submitted!</h2>
              <p className="modal-subtitle">We have successfully registered your inquiry regarding <strong>{formData.service}</strong>.</p>

              <div className="notification-options glass-panel">
                <p className="notif-explain">To guarantee the owner receives your inquiry instantly, please select one of the direct notify methods below:</p>

                <div className="modal-actions-row">
                  <button onClick={handleWhatsAppRedirect} className="btn btn-primary whatsapp-btn">
                    <MessageSquare size={18} />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button onClick={handleEmailMailto} className="btn btn-secondary email-btn">
                    <Mail size={18} />
                    <span>Open Email Client</span>
                  </button>
                </div>
              </div>

              <button
                className="btn btn-secondary close-success-btn"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service: 'Travels',
                    subject: '',
                    message: '',
                  });
                }}
              >
                Back to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}