
import { motion } from 'framer-motion';

const PHOTOS = ['/assets/bhaskar.jpeg'];

export default function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-title">
      <div className="wrap">

        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Beautiful Moments
        </motion.p>

        <motion.h2
          id="gallery-title"
          className="section-title"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Wedding Gallery
        </motion.h2>

        <div className="rule" aria-hidden="true">✦</div>

        <div className="gallery-grid">
          {PHOTOS.map((src, index) => (
            <motion.div
              key={src}
              className={`gallery-item${index === 0 ? ' wide' : ''}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={src}
                alt="Traditional Indian wedding ceremony illustration"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
