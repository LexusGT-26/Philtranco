const FEATURES = [
  {
    title: "Safe",
    description:
      "Safety is our top priority. Every bus follows strict maintenance protocols and comprehensive inspections before departure.",
    icon: (
      <svg fill="#e31e24" viewBox="0 0 24 24" width="72" height="72">
        <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
  },
  {
    title: "Comfortable",
    description:
      "Experience a relaxed ride with ergonomic seating, generous legroom, and on-board amenities curated for long journeys.",
    icon: (
      <svg fill="#22c55e" viewBox="0 0 24 24" width="72" height="72">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v16l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 12H9v-2h6v2zm0-4H9V8h6v2z" />
      </svg>
    ),
  },
  {
    title: "Premium Service",
    description:
      "Enjoy premium service at reasonable fares—our crew treats every passenger with warmth, respect, and professionalism.",
    icon: (
      <svg fill="#f59e0b" viewBox="0 0 24 24" width="72" height="72">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#f3f3f3] overflow-hidden" id="features">
      {/* Faded bus image on the right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block">
        <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 200 L150 180 L200 190 L250 185 L300 195 L350 190 L400 200 L450 195 L500 200" stroke="#333" strokeWidth="3" fill="none" strokeDasharray="10,5"/>
          <rect x="50" y="150" width="500" height="120" rx="15" fill="#e31e24" opacity="0.8"/>
          <rect x="80" y="170" width="60" height="40" fill="#fff" opacity="0.9"/>
          <rect x="160" y="170" width="60" height="40" fill="#fff" opacity="0.9"/>
          <rect x="240" y="170" width="60" height="40" fill="#fff" opacity="0.9"/>
          <rect x="320" y="170" width="60" height="40" fill="#fff" opacity="0.9"/>
          <rect x="400" y="170" width="60" height="40" fill="#fff" opacity="0.9"/>
          <circle cx="120" cy="290" r="25" fill="#333"/>
          <circle cx="480" cy="290" r="25" fill="#333"/>
        </svg>
      </div>

      {/* Dashed travel line on the left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block">
        <svg width="200" height="400" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M50 50 Q80 100, 50 150 T50 250 Q80 300, 50 350" 
            stroke="#e31e24" 
            strokeWidth="2" 
            fill="none" 
            strokeDasharray="8,4"
          />
          <circle cx="50" cy="50" r="8" fill="#e31e24"/>
          <path d="M50 42 L50 30 M42 50 L30 50" stroke="#e31e24" strokeWidth="2"/>
        </svg>
      </div>

      {/* Main content container */}
      <div className="max-w-[1200px] mx-auto px-5 relative z-10 w-full">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why ride with us?
          </h2>
        </div>

        {/* Feature cards grid */}
        <div className="flex flex-col md:flex-row gap-12 justify-center items-stretch my-12">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex-1 max-w-lg bg-[#f3f3f3] rounded-xl shadow-md p-12 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-start gap-8">
                {/* Icon on the left */}
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

