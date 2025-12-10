export default function Hero() {
  return (
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
        <h1>Bringing You Closer To Home</h1>
        <p>
          Experience the Alagang Philtranco Way where we give you the best service, ensuring a safe and comfortable ride, while helping you get closer to what matters to you most.
        </p>
        <button className="btn-red">Book Now</button>
      </div>
      <button className="hero-nav-arrow hero-nav-right" aria-label="Next">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </section>
  );
}

