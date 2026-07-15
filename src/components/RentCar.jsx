import React, { useState } from 'react';
import { Shield, Sparkles, Zap, Award, Check, User, Users, Calendar, MapPin, Gauge, X } from 'lucide-react';
import './RentCar.css';

export default function RentCar() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [bookingCar, setBookingCar] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    pickup: '',
    pickupDate: '',
    returnDate: '',
    insurance: false,
  });

  const categories = [
    { id: 'all', label: 'All Fleet' },
    { id: 'luxury', label: 'Luxury' },
    { id: 'suv', label: 'SUVs' },
    { id: 'electric', label: 'Electric' },
  ];

  const fleet = [
    {
      id: 1,
      name: 'Tesla Model S Plaid',
      category: 'electric',
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=600&q=80',
      price: 180,
      seats: 5,
      transmission: 'Automatic',
      power: 'Electric',
      acceleration: '2.1s 0-60',
      rating: '4.98',
    },
    {
      id: 2,
      name: 'Land Rover Defender',
      category: 'suv',
      image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=600&q=80',
      price: 160,
      seats: 7,
      transmission: 'Automatic',
      power: 'Hybrid',
      acceleration: 'All Terrain',
      rating: '4.92',
    },
    {
      id: 3,
      name: 'Porsche 911 Carrera',
      category: 'luxury',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80',
      price: 240,
      seats: 4,
      transmission: 'PDK Auto',
      power: 'Petrol',
      acceleration: '3.4s 0-60',
      rating: '4.99',
    },
    {
      id: 4,
      name: 'Audi Q8 e-tron',
      category: 'electric',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80',
      price: 150,
      seats: 5,
      transmission: 'Automatic',
      power: 'Electric',
      acceleration: '5.2s 0-60',
      rating: '4.89',
    },
  ];

  const filteredFleet = selectedCategory === 'all' 
    ? fleet 
    : fleet.filter(car => car.category === selectedCategory);

  const calculateDays = () => {
    if (!bookingDetails.pickupDate || !bookingDetails.returnDate) return 1;
    const start = new Date(bookingDetails.pickupDate);
    const end = new Date(bookingDetails.returnDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const calculateTotal = (dailyPrice) => {
    const days = calculateDays();
    const insuranceCost = bookingDetails.insurance ? 30 * days : 0;
    return (dailyPrice * days) + insuranceCost;
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!bookingDetails.pickup || !bookingDetails.pickupDate || !bookingDetails.returnDate) {
      alert('Please fill out all reservation fields.');
      return;
    }
    
    const days = calculateDays();
    const total = calculateTotal(bookingCar.price);
    const insuranceText = bookingDetails.insurance ? 'with Premium Protection' : 'without extra insurance';
    
    // Create WhatsApp redirect link for the car booking
    const message = `Hello, I'd like to reserve the *${bookingCar.name}*.\n` + 
                    `📍 Pickup: ${bookingDetails.pickup}\n` +
                    `📅 Dates: ${bookingDetails.pickupDate} to ${bookingDetails.returnDate} (${days} days)\n` +
                    `🛡️ Insurance: ${insuranceText}\n` +
                    `💰 Calculated Total: $${total}\n` +
                    `Please confirm availability.`;
                    
    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/1234567890?text=${encodedText}`;
    
    alert(`Reservation Confirmed for ${bookingCar.name}! Redirecting to WhatsApp to send owner details...`);
    window.open(whatsappUrl, '_blank');
    setBookingCar(null);
  };

  return (
    <div className="rent-car-screen animate-fadeIn">
      {/* Intro Header */}
      <section className="rent-hero">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <span className="badge badge-purple">Elite Mobility</span>
          <h1 className="rent-title">Premium Fleet. <br /><span className="text-gradient">Unlimited Journeys.</span></h1>
          <p className="rent-subtitle">Experience the thrill of driving the world's finest vehicles. Seamless booking, door-to-door delivery, and full comprehensive coverage.</p>
          
          {/* Category Switcher */}
          <div className="category-tabs glass-panel">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              >
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Listing Grid */}
      <section className="fleet-section container">
        <div className="fleet-grid">
          {filteredFleet.map((car) => (
            <div key={car.id} className="car-card glass-panel">
              <div className="car-image-wrapper">
                <img src={car.image} alt={car.name} className="car-image" loading="lazy" />
                <div className="car-overlay" />
                <span className="car-rating-badge">
                  <span>⭐ {car.rating}</span>
                </span>
              </div>
              
              <div className="car-body">
                <h3 className="car-name">{car.name}</h3>
                
                {/* Specifications grid */}
                <div className="car-specs-grid">
                  <div className="car-spec-item">
                    <Users size={16} className="spec-icon" />
                    <span>{car.seats} Seats</span>
                  </div>
                  <div className="car-spec-item">
                    <Gauge size={16} className="spec-icon" />
                    <span>{car.transmission}</span>
                  </div>
                  <div className="car-spec-item">
                    <Zap size={16} className="spec-icon" />
                    <span>{car.power}</span>
                  </div>
                  <div className="car-spec-item">
                    <Sparkles size={16} className="spec-icon" />
                    <span>{car.acceleration}</span>
                  </div>
                </div>

                <div className="car-footer">
                  <div className="car-price-block">
                    <span className="car-price">${car.price}</span>
                    <span className="price-unit">/ day</span>
                  </div>
                  <button 
                    className="btn btn-primary"
                    onClick={() => {
                      setBookingCar(car);
                      setBookingDetails({
                        pickup: '',
                        pickupDate: '',
                        returnDate: '',
                        insurance: false,
                      });
                    }}
                  >
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="props-section container">
        <div className="props-grid">
          <div className="prop-card glass-panel">
            <Shield className="prop-icon color-indigo" />
            <h3>Complete Insurance</h3>
            <p>Collision damage waivers, zero-liability options, and fully roadside assistance coverage.</p>
          </div>
          <div className="prop-card glass-panel">
            <Zap className="prop-icon color-purple" />
            <h3>Contactless Delivery</h3>
            <p>We deliver and retrieve the vehicle directly to your terminal or hotel free of charge.</p>
          </div>
          <div className="prop-card glass-panel">
            <Award className="prop-icon color-pink" />
            <h3>Five Star Support</h3>
            <p>Dedicated concierge agent assigned to your rental for help, changes, or extensions 24/7.</p>
          </div>
        </div>
      </section>

      {/* Interactive Rent Modal */}
      {bookingCar && (
        <div className="modal-overlay">
          <div className="modal-content glass-panel animate-fadeIn">
            <button className="modal-close-btn" onClick={() => setBookingCar(null)}>
              <X size={20} />
            </button>
            
            <div className="modal-header">
              <h2 className="modal-title">Reserve {bookingCar.name}</h2>
              <p className="modal-subtitle">Configure your hire preferences below</p>
            </div>

            <form onSubmit={handleBookingSubmit} className="modal-form">
              <div className="form-group">
                <label className="form-label">Pickup & Return Location</label>
                <div className="input-with-icon">
                  <MapPin className="input-icon" size={18} />
                  <input 
                    type="text" 
                    placeholder="Airport Terminal, Hotel, Address..." 
                    className="form-control"
                    required
                    value={bookingDetails.pickup}
                    onChange={(e) => setBookingDetails({...bookingDetails, pickup: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group flex-1">
                  <label className="form-label">Pickup Date</label>
                  <div className="input-with-icon">
                    <Calendar className="input-icon" size={18} />
                    <input 
                      type="date" 
                      className="form-control"
                      required
                      value={bookingDetails.pickupDate}
                      onChange={(e) => setBookingDetails({...bookingDetails, pickupDate: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-group flex-1">
                  <label className="form-label">Return Date</label>
                  <div className="input-with-icon">
                    <Calendar className="input-icon" size={18} />
                    <input 
                      type="date" 
                      className="form-control"
                      required
                      value={bookingDetails.returnDate}
                      onChange={(e) => setBookingDetails({...bookingDetails, returnDate: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="checkbox-group glass-panel">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={bookingDetails.insurance}
                    onChange={(e) => setBookingDetails({...bookingDetails, insurance: e.target.checked})}
                  />
                  <div className="checkbox-text">
                    <span className="checkbox-title">Premium Collision Waiver (+ $30/day)</span>
                    <span className="checkbox-desc">Zero liability in case of minor accidents, scratch marks, or dents.</span>
                  </div>
                </label>
              </div>

              {/* Price Calculation Widget */}
              <div className="price-calc-widget">
                <div className="calc-row">
                  <span>Base Rate ({bookingCar.price} x {calculateDays()} days)</span>
                  <span>${bookingCar.price * calculateDays()}</span>
                </div>
                {bookingDetails.insurance && (
                  <div className="calc-row">
                    <span>Premium Collision Waiver</span>
                    <span>${30 * calculateDays()}</span>
                  </div>
                )}
                <div className="calc-row divider" />
                <div className="calc-row total-row">
                  <span>Estimated Total</span>
                  <span className="text-gradient">${calculateTotal(bookingCar.price)}</span>
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-full submit-booking-btn">
                <span>Request Reservation via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
