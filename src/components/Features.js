export default function Features() {
  return (
    <section className="featured-stories-horizontal" id="features">
      <div className="container">
        {/* Section Title */}
        <h2 className="featured-title-horizontal">FEATURED STORIES</h2>
        
        {/* Stories Horizontal Layout */}
        <div className="stories-horizontal-grid">
          <div className="story-card-horizontal">
            <div className="story-image-overlay">
              <img src="/Bus.png" alt="Victory Liner Partners" />
              <div className="story-text-overlay">
                <h3>Victory Liner Partners with Ceres for Cargo to Visayas and Mindanao</h3>
              </div>
            </div>
          </div>

          <div className="story-card-horizontal">
            <div className="story-image-overlay">
              <img src="/Alatco-old-bus-3a-Colorized.webp" alt="Vintage Alatco Bus" />
              <div className="story-text-overlay">
                <h3>Victory Liner's Vintage Bus Restoration: A Tribute to 78 Years of Excellence</h3>
              </div>
            </div>
          </div>

          <div className="story-card-horizontal">
            <div className="story-image-overlay">
              <img src="/Bus.png" alt="Navigating Your Way" />
              <div className="story-text-overlay">
                <h3>Navigating Your Way: Victory Liner's Inner City and Express Trips Simplify Travel Choices</h3>
              </div>
            </div>
          </div>

          <div className="story-card-horizontal">
            <div className="story-image-overlay">
              <img src="/Bus.png" alt="Bus Rental Service" />
              <div className="story-text-overlay">
                <h3>LET'S MAKE YOUR BUS RENTAL SERVICE EXCITING</h3>
              </div>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="view-more-horizontal">
          <button className="btn-view-more-horizontal">View More</button>
        </div>
      </div>
    </section>
  );
}