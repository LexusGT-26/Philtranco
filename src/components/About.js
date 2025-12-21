export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className="about-img">
          <img
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80"
            alt="Bus Terminal"
            loading="lazy"
          />
        </div>
        <div className="about-text">
          <h4>About</h4>
          <h2>Philtranco</h2>
          <p>
            Since 1987, Philtranco has been your trusted partner on the
            road, connecting you to key destinations across Southern Tagalog.
            Our commitment to safe, reliable, and comfortable travel remains
            unwavering.
          </p>
          <p>
            We take pride in our modern fleet, meticulous maintenance
            standards, and well-trained personnel who make every ride feel like
            home. Wherever you are headed, the Philtranco Way keeps you moving.
          </p>
        </div>
      </div>
    </section>
  );
}

