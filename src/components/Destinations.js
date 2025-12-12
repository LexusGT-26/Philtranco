import ThreeDHoverGallery from "./ThreeDHoverGallery";

const DESTINATION_IMAGES = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1260&h=750&q=80",
  "https://images.unsplash.com/photo-1597627489373-a49684e292f1?auto=format&fit=crop&w=1260&h=750&q=80",
  "https://images.unsplash.com/photo-1571896349842-6e53ce41e887?auto=format&fit=crop&w=1260&h=750&q=80",
  "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&w=1260&h=750&q=80",
  "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1260&h=750&q=80",
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1260&h=750&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1260&h=750&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1260&h=750&q=80",
];

export default function Destinations() {
  return (
    <section className="destinations" id="destinations">
      <div className="container">
        <div className="text-center mb-16 -mt-8">
          <h2 className="section-title">Discover the Wonders of South</h2>
          <p className="subtitle">
            Explore a world of attractions during your journey with us.
          </p>
        </div>

        <ThreeDHoverGallery
          images={DESTINATION_IMAGES}
          itemWidth={10}
          itemHeight={25}
          gap={1}
          perspective={50}
          hoverScale={15}
          transitionDuration={1.25}
          grayscaleStrength={1}
          brightnessLevel={0.5}
          activeWidth={45}
          enableKeyboardNavigation={true}
          autoPlay={false}
          className="destinations-gallery"
          style={{ minHeight: "600px" }}
        />
      </div>
    </section>
  );
}

