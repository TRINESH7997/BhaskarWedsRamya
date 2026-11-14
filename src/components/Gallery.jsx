const PHOTOS = ['/assets/photo1.jpeg', '/assets/photo2.jpeg', '/assets/photo3.jpeg'];

export default function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-title">
      <div className="wrap">
        <h2 id="gallery-title" className="section-title">Gallery</h2>
        <div className="rule" aria-hidden="true">✦</div>
        <div className="gallery-grid">
          {PHOTOS.map((src, index) => (
            <div
              key={src}
              className={`gallery-item${index === 0 ? ' wide' : ''}`}
            >
              <img
                src={src}
                alt={`Wedding gallery photo ${index + 1}`}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
