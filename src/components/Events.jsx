import { motion } from 'framer-motion';
import useInView from '../hooks/useInView';

const EVENTS = [
  {
    title: 'Wedding Ceremony',
    when: 'Thu 26 Nov · 07:48 AM – 09:56 AM',
    where: 'PVR Kalyana Mandapam\nKovur Mandal, Nellore District',
    accent: '#c0a0ad',
    mapUrl: 'https://maps.app.goo.gl/ssXuUMr9mN5Rj1Xb8',
    calUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Ceremony+-+Bhaskar+%26+Ramya&dates=20261126T021800Z/20261126T042600Z&location=PVR+Kalyana+Mandapam,+Kovur,+Nellore',
  },
  {
    title: 'Sathyanarayana swamy pooja & Reception',
    when: 'Sun 29 Nov · Lunch 12 PM Onwards',
    where: 'M Beerepalli, Hindupur',
    accent: '#c0a0ad',
    mapUrl: 'https://maps.app.goo.gl/bb9ieTbmsFWxFHMj7',
    calUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Ceremony+-+Bhaskar+%26+Ramya&dates=20261126T021800Z/20261126T042600Z&location=PVR+Kalyana+Mandapam,+Kovur,+Nellore',
  },
];

const cardVariants = {
  hidden: (i) => ({ opacity: 0, x: i % 2 === 0 ? -46 : 46 }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.2, 0.7, 0.2, 1] },
  },
};

function EventCard({ event, index }) {
  const [ref, inView] = useInView();

  return (
    <motion.div
      ref={ref}
      className={`event-card${inView ? ' in-view' : ''}`}
      style={{ '--accent': event.accent }}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <h3>{event.title}</h3>
      <div className="event-when">{event.when}</div>
      <div className="event-where" style={{ whiteSpace: 'pre-line' }}>
        {event.where}
      </div>
      <div className="event-btns">
        {event.mapUrl && (
          <a
            className="event-btn filled"
            href={event.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 Open in Maps
          </a>
        )}
        <a
          className="event-btn"
          href={event.calUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          📅 Add to Calendar
        </a>
      </div>
    </motion.div>
  );
}

export default function Events() {
  const [titleRef, titleInView] = useInView();

  return (
    <section id="events">
      <div className="wrap">
        <div ref={titleRef}>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            Join the celebration
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 14 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            The Events
          </motion.h2>
          <div className="rule">✦</div>
        </div>

        {EVENTS.map((ev, i) => (
          <EventCard key={ev.title} event={ev} index={i} />
        ))}
      </div>
    </section>
  );
}
