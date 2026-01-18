export default function About() {
  return (
    <section className="about-cards" id="about">
      <div className="container">
        {/* Header Section */}
        <div className="about-header-cards">
          <h2 className="about-title-cards">
            About <span className="text-blue-cards">Penafrancia Bus</span>
          </h2>
          <p className="about-description-cards">
            Penafrancia Tours and Travel Transport Inc., founded in 1989 in Naga City, is one of the major 
            bus companies serving the Bicol Region. As part of the Bicol Isarog group, we connect Metro 
            Manila to various cities and municipalities across Camarines Sur, Albay, Sorsogon, and beyond.
          </p>
        </div>

        {/* Features Cards Grid */}
        <div className="about-features-grid">
          <div className="about-feature-card">
            <div className="feature-icon-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            </div>
            <h3>Safe & Reliable</h3>
            <p>Over 36 years of trusted service with well-maintained buses and experienced drivers.</p>
          </div>

          <div className="about-feature-card">
            <div className="feature-icon-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3>Easy Online Booking</h3>
            <p>Book tickets quickly through online platforms with instant e-ticket confirmation.</p>
          </div>

          <div className="about-feature-card">
            <div className="feature-icon-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3>Multiple Daily Trips</h3>
            <p>Regular departures throughout the day from various Metro Manila terminals.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

