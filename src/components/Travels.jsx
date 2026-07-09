import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, Star, ArrowRight, Compass, Shield, Award } from 'lucide-react';
import './Travels.css';

export default function Travels() {
  const [searchQuery, setSearchQuery] = useState({
    destination: '',
    date: '',
    guests: '2',
  });

  const destinations = [
    {
      id: 1,
      title: 'Kyoto Cultural Odyssey',
      location: 'Kyoto, Japan',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80',
      price: '$1,450',
      rating: '4.95',
      duration: '7 Days / 6 Nights',
      tag: 'Cultural',
      badgeColor: 'badge-indigo',
    },
    {
      id: 2,
      title: 'Santorini Sunset Retreat',
      location: 'Santorini, Greece',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80',
      price: '$1,890',
      rating: '4.88',
      duration: '5 Days / 4 Nights',
      tag: 'Luxury',
      badgeColor: 'badge-purple',
    },
    {
      id: 3,
      title: 'Bali Rainforest Escape',
      location: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80',
      price: '$980',
      rating: '4.91',
      duration: '8 Days / 7 Nights',
      tag: 'Adventure',
      badgeColor: 'badge-success',
    },
    {
      id: 4,
      title: 'Swiss Alps Winter Magic',
      location: 'Zermatt, Switzerland',
      image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=600&q=80',
      price: '$2,100',
      rating: '4.97',
      duration: '6 Days / 5 Nights',
      tag: 'Adventure',
      badgeColor: 'badge-pink',
    },
  ];

  const benefits = [
    { icon: Compass, title: 'Tailored Itineraries', desc: 'Custom designs around your pace and preferences.' },
    { icon: Shield, title: 'Secure Travel', desc: 'Comprehensive coverage, 24/7 on-road emergency response.' },
    { icon: Award, title: 'Luxury Stays', desc: 'Handpicked verified 5-star villas and boutique hotels.' },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Searching travels for: ${searchQuery.destination || 'Anywhere'} starting ${searchQuery.date || 'Anytime'} for ${searchQuery.guests} guests.`);
  };

  return (
    <div className="travels-screen animate-fadeIn">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <span className="hero-badge badge badge-indigo">Unveil The Horizon</span>
          <h1 className="hero-title">Crafting Journeys <br /><span className="text-gradient">Beyond Imagination</span></h1>
          <p className="hero-subtitle">Discover premium packages, bespoke itineraries, and breathtaking destinations handpicked for you.</p>
          
          {/* Quick Search Console */}
          <form className="search-console glass-panel" onSubmit={handleSearchSubmit}>
            <div className="search-inputs">
              <div className="search-input-field">
                <MapPin className="search-field-icon" />
                <div className="input-texts">
                  <label>Where to?</label>
                  <input 
                    type="text" 
                    placeholder="Search destinations..." 
                    value={searchQuery.destination}
                    onChange={(e) => setSearchQuery({...searchQuery, destination: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="search-divider" />
              
              <div className="search-input-field">
                <Calendar className="search-field-icon" />
                <div className="input-texts">
                  <label>When?</label>
                  <input 
                    type="date" 
                    value={searchQuery.date}
                    onChange={(e) => setSearchQuery({...searchQuery, date: e.target.value})}
                  />
                </div>
              </div>

              <div className="search-divider" />

              <div className="search-input-field">
                <Users className="search-field-icon" />
                <div className="input-texts">
                  <label>Guests</label>
                  <select 
                    value={searchQuery.guests}
                    onChange={(e) => setSearchQuery({...searchQuery, guests: e.target.value})}
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="6">6+ Guests</option>
                  </select>
                </div>
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary search-submit-btn">
              <Search size={18} />
              <span>Explore</span>
            </button>
          </form>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="packages-section container">
        <div className="section-header">
          <div>
            <h2 className="section-title">Curated Experiences</h2>
            <p className="section-subtitle">Exquisite itineraries tailored for ultimate luxury and comfort</p>
          </div>
          <button className="btn btn-secondary flex-center gap-2">
            <span>View All Packages</span>
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="packages-grid">
          {destinations.map((dest) => (
            <div key={dest.id} className="package-card glass-panel">
              <div className="card-image-wrapper">
                <img src={dest.image} alt={dest.title} className="card-image" loading="lazy" />
                <div className="card-overlay" />
                <span className={`card-tag badge ${dest.badgeColor}`}>{dest.tag}</span>
              </div>
              <div className="card-body">
                <div className="card-header-row">
                  <div className="card-location">
                    <MapPin size={14} className="pin-icon" />
                    <span>{dest.location}</span>
                  </div>
                  <div className="card-rating">
                    <Star size={14} className="star-icon" />
                    <span>{dest.rating}</span>
                  </div>
                </div>
                <h3 className="card-title">{dest.title}</h3>
                <p className="card-duration">{dest.duration}</p>
                
                <div className="card-footer-row">
                  <div className="card-price-wrapper">
                    <span className="price-label">From</span>
                    <span className="price-value">{dest.price}</span>
                  </div>
                  <button className="btn btn-primary btn-sm-circle" onClick={() => alert(`Booking flow for: ${dest.title}`)}>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Value Pillars */}
      <section className="benefits-section">
        <div className="container">
          <div className="benefits-grid">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="benefit-card glass-panel">
                  <div className="benefit-icon-wrapper">
                    <Icon size={24} className="benefit-icon" />
                  </div>
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-desc">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section container">
        <div className="text-center">
          <h2 className="section-title">Voices of Wonder</h2>
          <p className="section-subtitle">What our global voyagers say about their custom trips</p>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card glass-panel">
            <p className="testimonial-text">"Zenith Tours curated our honeymoon in Santorini. Every detail, from the private caldera sunset yacht to the luxury villa overlooking the bay, was pure perfection."</p>
            <div className="testimonial-author">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Sarah J." className="author-avatar" />
              <div>
                <h4 className="author-name">Sarah Jenkins</h4>
                <p className="author-title">Explorer since 2024</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card glass-panel">
            <p className="testimonial-text">"The cultural odyssey in Kyoto exceeded all expectations. Our private local guide took us to hidden temples and traditional tea ceremonies. Highly recommended!"</p>
            <div className="testimonial-author">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Marcus V." className="author-avatar" />
              <div>
                <h4 className="author-name">Marcus Vance</h4>
                <p className="author-title">Culture Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
