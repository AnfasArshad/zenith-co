import React, { useState } from 'react';
import { Plane, Calendar, User, Search, MapPin, ArrowRightLeft, Clock, ShieldCheck, HelpCircle } from 'lucide-react';
import './AirTicketing.css';

export default function AirTicketing() {
  const [tripType, setTripType] = useState('round-trip');
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
    passengers: '1',
    cabinClass: 'Economy',
  });
  const [flights, setFlights] = useState([]);
  const [searching, setSearching] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [passengerDetails, setPassengerDetails] = useState({
    fullName: '',
    passport: '',
  });

  const mockFlightDatabase = [
    {
      id: 1,
      airline: 'Emirates',
      logo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=100&q=80',
      departTime: '08:40 AM',
      arrivalTime: '04:15 PM',
      duration: '7h 35m',
      stops: 'Non-stop',
      price: 680,
      baggage: '40 kg',
      amenities: 'In-flight Entertainment, Meals, WiFi',
    },
    {
      id: 2,
      airline: 'Singapore Airlines',
      logo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=100&q=80',
      departTime: '11:15 AM',
      arrivalTime: '09:30 PM',
      duration: '10h 15m',
      stops: '1 Stop (SIN)',
      price: 840,
      baggage: '35 kg',
      amenities: 'Premium Service, Gourmet Meals, Entertainment',
    },
    {
      id: 3,
      airline: 'Qatar Airways',
      logo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=100&q=80',
      departTime: '06:10 PM',
      arrivalTime: '01:45 AM',
      duration: '7h 35m',
      stops: 'Non-stop',
      price: 720,
      baggage: '45 kg',
      amenities: '5-Star Airline, Luxury Lounge, Premium Comfort',
    },
    {
      id: 4,
      airline: 'All Nippon Airways (ANA)',
      logo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=100&q=80',
      departTime: '01:30 AM',
      arrivalTime: '11:00 AM',
      duration: '9h 30m',
      stops: 'Non-stop',
      price: 910,
      baggage: '50 kg',
      amenities: 'Premium Seating, Full Meal Service, Amenity Kit',
    },
    {
      id: 5,
      airline: 'British Airways',
      logo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=100&q=80',
      departTime: '10:30 AM',
      arrivalTime: '05:45 PM',
      duration: '7h 15m',
      stops: 'Non-stop',
      price: 750,
      baggage: '40 kg',
      amenities: 'Club World Service, Lounges, Gourmet Dining',
    },
    {
      id: 6,
      airline: 'Cathay Pacific',
      logo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=100&q=80',
      departTime: '02:00 PM',
      arrivalTime: '10:30 PM',
      duration: '8h 30m',
      stops: 'Non-stop',
      price: 890,
      baggage: '45 kg',
      amenities: 'Business Class, Spa, Premium Bedding',
    },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchParams.from || !searchParams.to || !searchParams.departDate) {
      alert('Please fill out departure, arrival and date fields.');
      return;
    }
    setSearching(true);
    setTimeout(() => {
      // Simulate API load
      setFlights(mockFlightDatabase);
      setSearching(false);
    }, 1200);
  };

  const handleBookFlight = (e) => {
    e.preventDefault();
    if (!passengerDetails.fullName || !passengerDetails.passport) {
      alert('Please fill out all passenger details.');
      return;
    }

    const message = `Hello, I'd like to book a flight through Zenith Tours.\n` +
                    `✈️ Airline: ${selectedFlight.airline}\n` +
                    `📍 Route: ${searchParams.from} to ${searchParams.to}\n` +
                    `📅 Date: ${searchParams.departDate} (${tripType})\n` +
                    `💺 Cabin Class: ${searchParams.cabinClass}\n` +
                    `👤 Passenger: ${passengerDetails.fullName} (Passport: ${passengerDetails.passport})\n` +
                    `💰 Price: $${selectedFlight.price} (${searchParams.passengers} pax)\n` +
                    `Please finalize my ticketing process.`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/1234567890?text=${encodedText}`;
    
    alert(`Ticket Booking Initiated! Opening WhatsApp to send details to Zenith Tours ticketing agent...`);
    window.open(whatsappUrl, '_blank');
    setSelectedFlight(null);
  };

  const switchLocations = () => {
    setSearchParams({
      ...searchParams,
      from: searchParams.to,
      to: searchParams.from
    });
  };

  return (
    <div className="air-ticketing-screen animate-fadeIn">
      {/* Search Header Banner */}
      <section className="ticketing-hero">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <span className="badge badge-pink">Global Airways Portal</span>
          <h1 className="ticketing-title">Seamless Flights. <br /><span className="text-gradient">Unlimited Sky.</span></h1>
          <p className="ticketing-subtitle">Compare and book airline tickets across 500+ commercial carriers instantly. Best price guarantee, 24/7 flight support, and easy upgrades.</p>
          
          {/* Ticket Search Console */}
          <form onSubmit={handleSearchSubmit} className="flight-console-panel glass-panel">
          <div className="console-row-top">
            <div className="trip-toggle">
              <button 
                type="button" 
                className={`toggle-btn ${tripType === 'round-trip' ? 'active' : ''}`}
                onClick={() => setTripType('round-trip')}
              >
                Round Trip
              </button>
              <button 
                type="button" 
                className={`toggle-btn ${tripType === 'one-way' ? 'active' : ''}`}
                onClick={() => setTripType('one-way')}
              >
                One Way
              </button>
            </div>

            <div className="cabin-select-wrapper">
              <select 
                value={searchParams.cabinClass}
                onChange={(e) => setSearchParams({...searchParams, cabinClass: e.target.value})}
                className="cabin-select"
              >
                <option value="Economy">Economy</option>
                <option value="Premium Economy">Premium Economy</option>
                <option value="Business">Business</option>
                <option value="First Class">First Class</option>
              </select>
            </div>
          </div>

          <div className="console-inputs">
            <div className="input-group-location flex-1">
              <div className="input-field">
                <MapPin className="input-field-icon" size={16} />
                <input 
                  type="text" 
                  placeholder="Leaving from..." 
                  value={searchParams.from}
                  onChange={(e) => setSearchParams({...searchParams, from: e.target.value})}
                  required
                />
              </div>
              
              <button type="button" className="switch-locations-btn" onClick={switchLocations} aria-label="Switch destinations">
                <ArrowRightLeft size={14} />
              </button>

              <div className="input-field">
                <MapPin className="input-field-icon" size={16} />
                <input 
                  type="text" 
                  placeholder="Going to..." 
                  value={searchParams.to}
                  onChange={(e) => setSearchParams({...searchParams, to: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="input-group-dates flex-1">
              <div className="input-field date-field">
                <Calendar className="input-field-icon" size={16} />
                <input 
                  type="date" 
                  value={searchParams.departDate}
                  onChange={(e) => setSearchParams({...searchParams, departDate: e.target.value})}
                  required
                />
              </div>

              {tripType === 'round-trip' && (
                <div className="input-field date-field">
                  <Calendar className="input-field-icon" size={16} />
                  <input 
                    type="date" 
                    value={searchParams.returnDate}
                    onChange={(e) => setSearchParams({...searchParams, returnDate: e.target.value})}
                    required={tripType === 'round-trip'}
                  />
                </div>
              )}

              <div className="input-field passenger-field">
                <User className="input-field-icon" size={16} />
                <select 
                  value={searchParams.passengers}
                  onChange={(e) => setSearchParams({...searchParams, passengers: e.target.value})}
                >
                  <option value="1">1 Pax</option>
                  <option value="2">2 Pax</option>
                  <option value="4">4 Pax</option>
                  <option value="6">6 Pax</option>
                </select>
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary submit-flight-search">
            <Search size={18} />
            <span>Search Flights</span>
          </button>
        </form>
      </div>
    </section>

      {/* Flight Search Results */}
      <section className="flight-results container">
        {searching && (
          <div className="loading-flights">
            <div className="spinner-glow" />
            <p>Searching best fares and flight availability...</p>
          </div>
        )}

        {!searching && flights.length > 0 && (
          <div className="results-wrapper animate-fadeIn">
            <div className="results-header">
              <h2>Available Flights ({flights.length})</h2>
              <p>Fares showing for {searchParams.passengers} passenger(s) in {searchParams.cabinClass}</p>
            </div>
            
            <div className="flights-list">
              {flights.map((flight) => (
                <div key={flight.id} className="flight-card glass-panel">
                  <div className="flight-airline-block">
                    <div className="airline-icon-holder">
                      <Plane className="airplane-card-icon" size={24} />
                    </div>
                    <div>
                      <h3 className="airline-name">{flight.airline}</h3>
                      <span className="cabin-badge badge badge-indigo">{searchParams.cabinClass}</span>
                    </div>
                  </div>

                  <div className="flight-schedule-block">
                    <div className="time-block text-right">
                      <span className="time">{flight.departTime}</span>
                      <span className="airport">{searchParams.from.substring(0, 3).toUpperCase() || 'DEP'}</span>
                    </div>
                    
                    <div className="route-connector">
                      <span className="duration">{flight.duration}</span>
                      <div className="connector-line">
                        <div className="line-dot" />
                        <Plane size={12} className="line-plane" />
                        <div className="line-dot" />
                      </div>
                      <span className="stops">{flight.stops}</span>
                    </div>

                    <div className="time-block text-left">
                      <span className="time">{flight.arrivalTime}</span>
                      <span className="airport">{searchParams.to.substring(0, 3).toUpperCase() || 'ARR'}</span>
                    </div>
                  </div>

                  <div className="flight-details-info" style={{fontSize: '12px', color: '#888', padding: '8px 0'}}>
                    <div>🧳 Baggage: {flight.baggage}</div>
                    <div>✨ {flight.amenities}</div>
                  </div>

                  <div className="flight-price-action">
                    <div className="flight-price-block">
                      <span className="price">${flight.price}</span>
                      <span className="price-term">Total fare</span>
                    </div>
                    <button 
                      className="btn btn-primary"
                      onClick={() => setSelectedFlight(flight)}
                    >
                      Book Ticket
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Safety & Help Section */}
      <section className="ticketing-help container">
        <div className="help-grid">
          <div className="help-card glass-panel">
            <ShieldCheck className="help-icon" size={28} />
            <h3>Travel Guarantee</h3>
            <p>100% refund on flight cancellations or rescheduling requests done 24h prior to departure.</p>
          </div>
          <div className="help-card glass-panel">
            <HelpCircle className="help-icon" size={28} />
            <h3>24/7 Ticketing Desk</h3>
            <p>Direct contact with flight agents to handle changes, upgrades, baggage additions, and meals.</p>
          </div>
        </div>
      </section>

      {/* Passenger Booking Modal */}
      {selectedFlight && (
        <div className="modal-overlay">
          <div className="modal-content glass-panel animate-fadeIn">
            <button className="modal-close-btn" onClick={() => setSelectedFlight(null)}>
              <X size={20} />
            </button>
            
            <div className="modal-header">
              <h2 className="modal-title">Passenger Details</h2>
              <p className="modal-subtitle">Flight Reservation with {selectedFlight.airline}</p>
            </div>

            <form onSubmit={handleBookFlight} className="modal-form">
              <div className="form-group">
                <label className="form-label">Full Name (as in Passport)</label>
                <input 
                  type="text" 
                  placeholder="Johnathan Doe" 
                  className="form-control"
                  required
                  value={passengerDetails.fullName}
                  onChange={(e) => setPassengerDetails({...passengerDetails, fullName: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Passport Number</label>
                <input 
                  type="text" 
                  placeholder="A1234567" 
                  className="form-control"
                  required
                  value={passengerDetails.passport}
                  onChange={(e) => setPassengerDetails({...passengerDetails, passport: e.target.value})}
                />
              </div>

              <div className="ticket-summary glass-panel">
                <div className="ticket-summary-header">Flight Details Summary</div>
                <div className="summary-row">
                  <span>Airline:</span>
                  <span className="summary-value">{selectedFlight.airline}</span>
                </div>
                <div className="summary-row">
                  <span>Route:</span>
                  <span className="summary-value">{searchParams.from.toUpperCase()} to {searchParams.to.toUpperCase()}</span>
                </div>
                <div className="summary-row">
                  <span>Cabin / Pax:</span>
                  <span className="summary-value">{searchParams.cabinClass} / {searchParams.passengers} Pax</span>
                </div>
                <div className="summary-row divider" />
                <div className="summary-row total-row">
                  <span>Total Amount</span>
                  <span className="text-gradient">${selectedFlight.price * parseInt(searchParams.passengers)}</span>
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-full submit-booking-btn">
                <span>Book Flight via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
