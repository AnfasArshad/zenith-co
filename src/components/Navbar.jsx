import React, { useState } from 'react';
import { Compass, Car, Plane, Info, Mail, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ activeTab, setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "travels", label: "Travels", icon: Compass },
    // { id: 'rent-a-car', label: 'Rent a Car', icon: Car },
    { id: "air-ticketing", label: "Air Ticketing", icon: Plane },
    { id: "about-us", label: "About Us", icon: Info },
    { id: "contact-us", label: "Contact Us", icon: Mail },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setIsOpen(false);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar container">
        <div className="navbar-brand" onClick={() => handleTabClick('travels')}>
          <div className="logo-icon-wrapper">
            <Compass className="logo-icon animate-spin-slow" />
          </div>
          <span className="logo-text">Zenith <span className="text-gradient">Tours</span></span>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`nav-link-btn ${isActive ? 'active' : ''}`}
              >
                <Icon size={18} className="nav-icon" />
                <span>{item.label}</span>
                {isActive && <span className="active-indicator" />}
              </button>
            );
          })}
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-links">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`mobile-nav-link-btn ${isActive ? 'active' : ''}`}
              >
                <Icon size={20} className="nav-icon" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
