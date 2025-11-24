const DESTINATIONS = [
  {
    title: "Sol Y Viento",
    location: "Calamba, Laguna",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Ang Mga Bayaning",
    location: "Santa Cruz, Laguna",
    image:
      "https://images.unsplash.com/photo-1597627489373-a49684e292f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "88 Hotspring Resort",
    location: "Calamba, Laguna",
    image:
      "https://images.unsplash.com/photo-1571896349842-6e53ce41e887?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Splash Island",
    location: "Biñan, Laguna",
    image:
      "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Destinations() {
  return (
    <section className="destinations" id="destinations">
      <div className="container">
        <h2 className="section-title">Discover the Wonders of South</h2>
        <p className="subtitle">
          Explore a world of attractions during your journey with us.
        </p>

        <div className="cards-scroller">
          {DESTINATIONS.map((dest) => (
            <div className="dest-card" key={dest.title}>
              <img src={dest.image} alt={dest.title} loading="lazy" />
              <div className="dest-overlay">
                <h4>{dest.title}</h4>
                <span>{dest.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

