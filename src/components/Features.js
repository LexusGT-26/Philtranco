export default function Features() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-[#f3f3f3] overflow-hidden" 
      id="features"
    >
      {/* Faded bus image on the right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block z-0">
        <img 
          src="/Bus.png" 
          alt="Philtranco Bus" 
          className="w-auto h-[400px] object-contain"
        />
      </div>

      {/* Dashed travel line on the left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block z-0">
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
      <div className="max-w-[1200px] mx-auto px-5 relative z-10 w-full pt-0 pb-20">
        {/* Section Title */}
        <h2 className="section-title text-center mb-12 -mt-32 pt-8">Sakay kana</h2>
        
        {/* Cards container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 justify-items-center">
          {/* Card 1 */}
          <div 
            className="rounded-[1.2rem] max-w-[450px] w-full"
            style={{
              background: 'linear-gradient(135deg, #fffffff5, #3a4b8a, #ffffff98)',
              padding: '1px',
              boxShadow: '0px 1rem 1.5rem -0.9rem #000000e1'
            }}
          >
            <div 
              className="rounded-[1.2rem] text-lg"
              style={{
                background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)',
                padding: '2.5rem',
                color: '#bec4cf'
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestiae
              explicabo placeat atque praesentium, dolorum corporis amet non, aliquid
              quasi voluptate delectus nulla exercitationem eius eum, ducimus architecto
              dolores suscipit!
            </div>
          </div>

          {/* Card 2 */}
          <div 
            className="rounded-[1.2rem] max-w-[450px] w-full"
            style={{
              background: 'linear-gradient(135deg, #fffffff5, #3a4b8a, #ffffff98)',
              padding: '1px',
              boxShadow: '0px 1rem 1.5rem -0.9rem #000000e1'
            }}
          >
            <div 
              className="rounded-[1.2rem] text-lg"
              style={{
                background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)',
                padding: '2.5rem',
                color: '#bec4cf'
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestiae
              explicabo placeat atque praesentium, dolorum corporis amet non, aliquid
              quasi voluptate delectus nulla exercitationem eius eum, ducimus architecto
              dolores suscipit!
            </div>
          </div>

          {/* Card 3 */}
          <div 
            className="rounded-[1.2rem] max-w-[450px] w-full"
            style={{
              background: 'linear-gradient(135deg, #fffffff5, #3a4b8a, #ffffff98)',
              padding: '1px',
              boxShadow: '0px 1rem 1.5rem -0.9rem #000000e1'
            }}
          >
            <div 
              className="rounded-[1.2rem] text-lg"
              style={{
                background: 'linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%)',
                padding: '2.5rem',
                color: '#bec4cf'
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestiae
              explicabo placeat atque praesentium, dolorum corporis amet non, aliquid
              quasi voluptate delectus nulla exercitationem eius eum, ducimus architecto
              dolores suscipit!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

