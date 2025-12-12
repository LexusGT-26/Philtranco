export default function Features() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#f3f3f3] overflow-hidden" id="features">
      {/* Faded bus image on the right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block">
        <img 
          src="/Bus.png" 
          alt="Philtranco Bus" 
          className="w-auto h-[400px] object-contain"
        />
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
      </div>
    </section>
  );
}

