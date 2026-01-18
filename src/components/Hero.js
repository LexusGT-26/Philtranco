export default function Hero() {
  return (
    <>
      <section id="hero" className="hero">
        <video
          src="/PHILTRANCO OFFICIAL MUSIC VIDEO (1).mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
        <button className="hero-nav-arrow hero-nav-left" aria-label="Previous">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <div className="container hero-content">
          <h1>Byaheng masaya serbisyong subok na !</h1>
          <p>
            Working always for fast, safe, and reliable service since 1914 a legacy of trusted public transportation, providing dependable and comfortable journeys for generations of passengers.
          </p>
          <button className="btn-red">Book Now</button>
        </div>
        <button className="hero-nav-arrow hero-nav-right" aria-label="Next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </section>

      {/* Statistics Section */}
      <section className="hero-stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <div className="stat-content">
                <div className="stat-number">45+</div>
                <div className="stat-label">Modern Buses</div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="stat-content">
                <div className="stat-number">36</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h4m6-6h4a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-4m-6 0V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2Z"></path>
                </svg>
              </div>
              <div className="stat-content">
                <div className="stat-number">38</div>
                <div className="stat-label">Daily Trips</div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="stat-content">
                <div className="stat-number">15</div>
                <div className="stat-label">Travel Counters</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

