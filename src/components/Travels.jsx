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
      title: 'Sigiriya Rock Fortress Trek',
      location: 'Sigiriya, Sri Lanka',
      image: 'https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=600&q=80',
      price: '$620',
      rating: '4.96',
      duration: '3 Days / 2 Nights',
      tag: 'Historical',
      badgeColor: 'tag-indigo',
      highlights: 'Ancient Rock Palace, Frescoes, Sunrise Summit Climb',
    },
    {
      id: 2,
      title: 'Ella Hill Country Escape',
      location: 'Ella, Sri Lanka',
      image: 'https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?auto=format&fit=crop&w=600&q=80',
      price: '$540',
      rating: '4.92',
      duration: '4 Days / 3 Nights',
      tag: 'Adventure',
      badgeColor: 'tag-success',
      highlights: 'Nine Arch Bridge, Little Adam\'s Peak, Scenic Train Ride',
    },
    {
      id: 3,
      title: 'Kandy Heritage Journey',
      location: 'Kandy, Sri Lanka',
      image: 'https://images.unsplash.com/photo-1642095012223-65ee6d570974?auto=format&fit=crop&w=600&q=80',
      price: '$480',
      rating: '4.90',
      duration: '3 Days / 2 Nights',
      tag: 'Historical',
      badgeColor: 'tag-purple',
      highlights: 'Temple of the Sacred Tooth Relic, Kandy Lake, Cultural Dance',
    },
    {
      id: 4,
      title: 'Galle Fort Coastal Getaway',
      location: 'Galle, Sri Lanka',
      image: 'https://images.unsplash.com/photo-1654561773591-57b9413c45c0?auto=format&fit=crop&w=600&q=80',
      price: '$590',
      rating: '4.94',
      duration: '4 Days / 3 Nights',
      tag: 'Romantic',
      badgeColor: 'tag-danger',
      highlights: 'Dutch Fort Ramparts, Lighthouse, Boutique Cafes',
    },
    {
      id: 5,
      title: 'Nuwara Eliya Tea Country',
      location: 'Nuwara Eliya, Sri Lanka',
      image: 'https://images.unsplash.com/photo-1544451822-38e32b887c08?auto=format&fit=crop&w=600&q=80',
      price: '$460',
      rating: '4.89',
      duration: '3 Days / 2 Nights',
      tag: 'Luxury',
      badgeColor: 'tag-warning',
      highlights: 'Tea Estate Tours, Misty Mountains, Colonial Bungalows',
    },
    {
      id: 6,
      title: 'Yala Wildlife Safari',
      location: 'Yala National Park, Sri Lanka',
      image: 'https://images.unsplash.com/photo-1705936981588-a4192f66fcfb?auto=format&fit=crop&w=600&q=80',
      price: '$710',
      rating: '4.97',
      duration: '2 Days / 1 Night',
      tag: 'Adventure',
      badgeColor: 'tag-pink',
      highlights: 'Elephant Herds, Leopard Sightings, Jeep Safari',
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

        {/* Floating destination snapshots */}
        <div className="hero-floating-card hero-float-1">
          <img src="https://images.unsplash.com/photo-1580794749460-76f97b7180d8?auto=format&fit=crop&w=300&q=90" alt="Sigiriya, Sri Lanka" />
          <span>Sigiriya, Sri Lanka</span>
        </div>
        <div className="hero-floating-card hero-float-2">
          <img src="https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?auto=format&fit=crop&w=300&q=90" alt="Ella, Sri Lanka" />
          <span>Ella, Sri Lanka</span>
        </div>
        <div className="hero-floating-card hero-float-3">
          <img src="https://images.unsplash.com/photo-1654561773591-57b9413c45c0?auto=format&fit=crop&w=300&q=90" alt="Galle Fort, Sri Lanka" />
          <span>Galle Fort, Sri Lanka</span>
        </div>

        <div className="hero-content container">
         
          <h1 className="hero-title">Discover the Pearl <br /><span className="text-gradient">of the Indian Ocean</span></h1>
          <p className="hero-subtitle">Handpicked Sri Lankan escapes — ancient fortresses, misty tea country, golden coastlines and wildlife safaris — all planned around you.</p>


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
                    onChange={(e) => setSearchQuery({ ...searchQuery, destination: e.target.value })}
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
                    onChange={(e) => setSearchQuery({ ...searchQuery, date: e.target.value })}
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
                    onChange={(e) => setSearchQuery({ ...searchQuery, guests: e.target.value })}
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="8">8+ Guests</option>
                  </select>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary search-submit-btn">
              <Search size={18} />
              <span>Explore</span>
            </button>
          </form>

          {/* Trust Stats Row */}
          <div className="hero-stats-row">
            <div className="hero-stat">
              <span className="hero-stat-value">50K+</span>
              <span className="hero-stat-label">Happy Travelers</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">120+</span>
              <span className="hero-stat-label">Destinations</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">4.9<Star size={14} className="hero-stat-star" /></span>
              <span className="hero-stat-label">Average Rating</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">24/7</span>
              <span className="hero-stat-label">Concierge Support</span>
            </div>
          </div>
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
                <span className={`card-tag ${dest.badgeColor}`}>{dest.tag}</span>
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
                <p className="card-highlights" style={{fontSize: '12px', color: '#888', marginTop: '8px'}}>{dest.highlights}</p>

                <button className="btn btn-primary card-explore-btn" onClick={() => alert(`Booking: ${dest.title}\nHighlights: ${dest.highlights}`)}>
                  <span>Explore</span>
                  <ArrowRight size={16} />
                </button>
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
            <p className="testimonial-text">"Zenith Tours curated our honeymoon in Galle. Every detail, from the sunset ramparts walk to the boutique villa overlooking the fort, was pure perfection."</p>
            <div className="testimonial-author">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Sarah J." className="author-avatar" />
              <div>
                <h4 className="author-name">Sarah Jenkins</h4>
                <p className="author-title">Explorer since 2024</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card glass-panel">
            <p className="testimonial-text">"The heritage journey through Kandy exceeded all expectations. Our private local guide took us to the Temple of the Tooth and hidden tea estates. Highly recommended!"</p>
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
