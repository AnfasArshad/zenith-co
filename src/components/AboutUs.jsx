import React from "react";
import {
  Compass,
  ShieldCheck,
  Award,
  Users,
  MapPin,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Globe2,
  Sparkles,
} from "lucide-react";
import "./AboutUs.css";

export default function AboutUs({ setActiveTab }) {
  const coreValues = [
    {
      icon: Compass,
      title: "Authentic Local Insights",
      desc: "Deep island roots allow us to take you beyond commercial trails into untouched villages, quiet coastlines, and hidden ruins.",
    },
    {
      icon: ShieldCheck,
      title: "Certified & Protected",
      desc: "SLTDA registered guides, 24/7 on-ground assistance, transparent pricing, and comprehensive traveler protection policies.",
    },
    {
      icon: HeartHandshake,
      title: "Sustainable Tourism",
      desc: "Committed to empowering local wildlife conservation efforts, heritage craft artisans, and eco-friendly village stays.",
    },
    {
      icon: Award,
      title: "Handcrafted Excellence",
      desc: "No cookie-cutter templates. Every itinerary is tailored around your specific rhythm, passions, and luxury preferences.",
    },
  ];

  const milestones = [
    { number: "10+", label: "Years Curating Journeys" },
    { number: "50K+", label: "Delighted Global Voyagers" },
    { number: "120+", label: "Exclusive Island Destinations" },
    { number: "99.4%", label: "Positive Experience Rating" },
  ];

  const team = [
    {
      name: "Rohan Jayasinghe",
      role: "Founder & Expedition Director",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      bio: "Lifelong naturalist and trekking lead with over 15 years guiding across the Central Highlands and Knuckles Range.",
    },
    {
      name: "Elena Silva",
      role: "Head of Bespoke Journeys",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      bio: "Luxury hospitality veteran dedicated to crafting one-of-a-kind romantic escapes and cultural heritage tours.",
    },
    {
      name: "Tariq Mansoor",
      role: "Aviation & Ticketing Concierge",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      bio: "Air route strategist handling international connections, seamless terminal logistics, and VIP flight services.",
    },
  ];

  return (
    <div className="about-screen animate-fadeIn">
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <span className="badge badge-indigo">Our Story & Heritage</span>
          <h1 className="about-title">
            Crafting Unforgettable <br />
            <span className="text-gradient">Island Stories</span>
          </h1>
          <p className="about-subtitle">
            Founded with a passion for Ceylon’s storied heritage and raw natural
            beauty, Zenith Tours curates premier journeys that merge boutique
            luxury with genuine local encounters.
          </p>

          {/* Stats Bar */}
          <div className="about-stats-grid glass-panel">
            {milestones.map((stat, idx) => (
              <div key={idx} className="about-stat-item">
                <span className="about-stat-number">{stat.number}</span>
                <span className="about-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="about-story-section container">
        <div className="about-story-grid">
          <div className="story-image-stack">
            <div className="story-image-primary glass-panel">
              <img
                src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=700&q=80"
                alt="Scenic Sri Lanka hills"
              />
            </div>
            <div className="story-badge-card glass-panel">
              <Sparkles className="story-badge-icon" size={24} />
              <div>
                <h4>Official Destination Partner</h4>
                <p>Licensed Sri Lanka Tourism Desk</p>
              </div>
            </div>
          </div>

          <div className="story-text-content">
            <span className="badge badge-purple">Who We Are</span>
            <h2 className="story-heading">
              Your Trusted Gateway to the Wonder of Asia
            </h2>
            <p className="story-paragraph">
              At Zenith Tours, we believe travel is more than checking off
              landmarks. It is about the sensory rush of mist rolling through
              high-altitude tea plantations, the silence of walking ancient
              monolithic palaces at dawn, and warm conversations over spiced
              Ceylon tea.
            </p>
            <p className="story-paragraph">
              Whether you are seeking custom holiday retreats, hassle-free
              international air tickets, or private chauffeured expeditions, our
              team brings personalized care and round-the-clock peace of mind.
            </p>

            <ul className="story-feature-list">
              <li>
                <CheckCircle2 size={18} className="check-icon" />
                <span>
                  Fully customized itineraries with flexible cancellation terms
                </span>
              </li>
              <li>
                <CheckCircle2 size={18} className="check-icon" />
                <span>
                  Certified chauffeurs and multilingual historian guides
                </span>
              </li>
              <li>
                <CheckCircle2 size={18} className="check-icon" />
                <span>
                  Transparent pricing with direct WhatsApp concierge access
                </span>
              </li>
            </ul>

            <div className="story-actions">
              <button
                className="btn btn-primary flex-center gap-2"
                onClick={() => setActiveTab && setActiveTab("travels")}
              >
                <span>Explore Packages</span>
                <ArrowRight size={16} />
              </button>
              <button
                className="btn btn-secondary flex-center gap-2"
                onClick={() => setActiveTab && setActiveTab("contact-us")}
              >
                <span>Talk to Concierge</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Pillars */}
      <section className="about-values-section">
        <div className="container">
          <div className="section-header text-center flex-column-center">
            <h2 className="section-title">The Zenith Standard</h2>
            <p className="section-subtitle">
              The principles that guide every journey we curate
            </p>
          </div>

          <div className="values-grid">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="value-card glass-panel">
                  <div className="value-icon-wrapper">
                    <Icon size={26} />
                  </div>
                  <h3 className="value-title">{val.title}</h3>
                  <p className="value-desc">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team / Curators */}
      <section className="about-team-section container">
        <div className="section-header text-center flex-column-center">
          <h2 className="section-title">Meet Our Curators</h2>
          <p className="section-subtitle">
            Local specialists dedicated to your comfort and wonder
          </p>
        </div>

        <div className="team-grid">
          {team.map((member, idx) => (
            <div key={idx} className="team-card glass-panel">
              <div className="team-image-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                />
                <div className="team-overlay" />
              </div>
              <div className="team-body">
                <h3 className="team-name">{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p className="team-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
