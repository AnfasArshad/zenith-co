import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Travels from './components/Travels';
import RentCar from './components/RentCar';
import AirTicketing from './components/AirTicketing';
import ContactUs from './components/ContactUs';
import { Compass, Mail, Heart, Phone, Globe, ArrowUp } from 'lucide-react';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('travels');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'travels':
        return <Travels />;
      case 'rent-a-car':
        return <RentCar />;
      case 'air-ticketing':
        return <AirTicketing />;
      case 'contact-us':
        return <ContactUs />;
      default:
        return <Travels />;
    }
  };

  return (
    <div className="app-layout">
      {/* Top Banner Message */}
      <div className="promo-bar">
        <div className="container promo-content">
          <span>✨ Zenith Tours Anniversary Sale: Get up to 25% off on select flights & car hire.</span>
          <button className="promo-btn" onClick={() => setActiveTab('contact-us')}>
            Claim Offer
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Primary Page Content Router */}
      <main className="main-content">
        {renderContent()}
      </main>

      {/* Brand Footer */}
      <footer className="footer-container">
        <div className="footer-content container">
          <div className="footer-brand-column">
            <div className="footer-logo">
              <Compass className="footer-logo-icon" />
              <span>Zenith <span className="text-gradient">Tours</span></span>
            </div>
            <p className="footer-desc">Crafting premium travel itineraries, luxury mobility solutions, and seamless commercial air ticketing since 2024.</p>
            <div className="social-links">
              <a href="#" aria-label="Social Link" className="social-icon-btn"><Globe size={18} /></a>
              <a href="#" aria-label="Social Link" className="social-icon-btn"><Phone size={18} /></a>
              <a href="#" aria-label="Social Link" className="social-icon-btn"><Mail size={18} /></a>
            </div>
          </div>

          <div className="footer-links-column">
            <h4>Quick Nav</h4>
            <button onClick={() => setActiveTab('travels')} className="footer-link">Holiday Travels</button>
            <button onClick={() => setActiveTab('rent-a-car')} className="footer-link">Premium Fleet Hire</button>
            <button onClick={() => setActiveTab('air-ticketing')} className="footer-link">Air Tickets booking</button>
            <button onClick={() => setActiveTab('contact-us')} className="footer-link">Contact Support desk</button>
          </div>

          <div className="footer-links-column">
            <h4>Support Services</h4>
            <a href="#" className="footer-link">Corporate Travel Solutions</a>
            <a href="#" className="footer-link">Elite Rental Membership</a>
            <a href="#" className="footer-link">Flight Cancellation Policy</a>
            <a href="#" className="footer-link">Privacy & Cookies</a>
          </div>

          <div className="footer-news-column">
            <h4>Weekly Expedition</h4>
            <p>Join 15,000+ wanderers who receive our luxury travel guides every Friday.</p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Successfully subscribed to newsletter!"); }} className="newsletter-form">
              <input type="email" placeholder="Wanderer email..." required className="form-control" />
              <button type="submit" className="btn btn-primary newsletter-submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom container">
          <p>© {new Date().getFullYear()} Zenith Tours Premium Portal. All rights reserved.</p>
          <p className="made-with">
            Designed for travelers worldwide with <Heart size={14} className="heart-icon" />
          </p>
        </div>
      </footer>

      {/* Scroll to Top Floating Button */}
      <button 
        onClick={scrollToTop} 
        className={`scroll-to-top-btn glass-panel ${showScrollTop ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
