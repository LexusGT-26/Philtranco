export default function Hero() {
  return (
    <section className="hero">
      <video
        src="/PHILTRANCO OFFICIAL MUSIC VIDEO (1).mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="container hero-content">
        <h1>Bringing You Closer To Home</h1>
        <p>
          Experience the flagship JAC Way—where we give you the best service,
          ensuring a safe and comfortable ride on every journey.
        </p>
        <button className="btn-red">Book Now</button>
      </div>
    </section>
  );
}

