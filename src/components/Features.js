const FEATURES = [
  {
    title: "Safe",
    description:
      "Safety is our top priority. Every bus follows strict maintenance protocols and comprehensive inspections before departure.",
    icon: (
      <svg fill="#e31e24" viewBox="0 0 24 24" width="40" height="40">
        <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9z" />
      </svg>
    ),
  },
  {
    title: "Comfortable",
    description:
      "Experience a relaxed ride with ergonomic seating, generous legroom, and on-board amenities curated for long journeys.",
    icon: (
      <svg fill="#e31e24" viewBox="0 0 24 24" width="40" height="40">
        <path d="M20 2H4C2.9 2 2 2.9 2 4v16l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
      </svg>
    ),
  },
  {
    title: "Premium Service",
    description:
      "Enjoy premium service at reasonable fares—our crew treats every passenger with warmth, respect, and professionalism.",
    icon: (
      <svg fill="#e31e24" viewBox="0 0 24 24" width="40" height="40">
        <path d="m12 17.27 6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3066/3066259.png"
        className="bus-bg"
        alt="Bus illustration"
        loading="lazy"
      />
      <div className="container">
        <div className="features-header">
          <h2>Why ride with us?</h2>
        </div>
        <div className="features-grid">
          {FEATURES.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <div className="icon-box">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

