
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Wedding Muhurtham: 26 November 2026, 07:48 AM IST
const WEDDING_DATE = new Date('2026-11-26T07:48:00+05:30');

function getTimeLeft() {
  const diff = WEDDING_DATE.getTime() - Date.now();

  if (diff <= 0) {
    return { d: 0, h: 0, m: 0, s: 0, completed: true };
  }

  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
    completed: false,
  };
}

function pad(n) {
  return String(n).padStart(2, '0');
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const units = [
    { label: 'Days', val: pad(time.d), subtitle: 'Solar Days' },
    { label: 'Hours', val: pad(time.h), subtitle: 'Hours' },
    { label: 'Minutes', val: pad(time.m), subtitle: 'Minutes' },
    { label: 'Seconds', val: pad(time.s), subtitle: 'Seconds', isLive: true },
  ];

  return (
    <section id="countdown">
      <div className="wrap">
        <motion.div
          className="countdown-badge"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-flourish">✦</span>
          <span>Auspicious Muhurtham</span>
          <span className="badge-flourish">✦</span>
        </motion.div>

        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Counting Down Every Moment
        </motion.p>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          The Sacred Muhurtham
        </motion.h2>

        <div className="rule ornate-rule">
          <span className="rule-dot"></span>
          <span className="rule-symbol">❖</span>
          <span className="rule-dot"></span>
        </div>

        <div className="countdown-royal-card">
          <div className="royal-corner-decor tl"></div>
          <div className="royal-corner-decor tr"></div>
          <div className="royal-corner-decor bl"></div>
          <div className="royal-corner-decor br"></div>

          {time.completed ? (
            <div className="countdown-completed">
              <h3>శుభ ముహూర్తం ప్రారంభమైంది!</h3>
              <p>The auspicious wedding Muhurtham has begun!</p>
            </div>
          ) : (
            <div className="countdown-grid">
              {units.map((u, i) => (
                <motion.div
                  key={u.label}
                  className={`countdown-box ${u.isLive ? 'is-live-unit' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
                >
                  <div className="box-inner-glow"></div>

                  <div className="num-wrapper">
                    <span className="countdown-num">{u.val}</span>
                    {u.isLive && (
                      <span className="pulse-indicator" title="Ticking live"></span>
                    )}
                  </div>

                  <span className="countdown-label">{u.label}</span>
                  <span className="countdown-sublabel">{u.subtitle}</span>
                </motion.div>
              ))}
            </div>
          )}

          <motion.div
            className="muhurtham-plaque"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="plaque-icon">🪔</div>

            <div className="plaque-content">
              <span className="plaque-title">
                Sumuhurtham · శుభ ముహూర్తం
              </span>

              <p className="plaque-time">
                Thursday, 26 November 2026 &nbsp;|&nbsp;
                <strong>07:48 AM – 09:56 AM</strong>
              </p>

              <p className="plaque-venue">
                PVR Kalyana Mandapam · Kovur Mandal, Nellore District
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
