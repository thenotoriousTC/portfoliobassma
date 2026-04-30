import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useRef } from 'react';

// Data for the portfolio items
const portfolioItems = [
  {
    id: 1,
    title: 'Delivery Service Ad',
    category: 'Commercial • Video',
    description: 'A fast-paced, dynamic commercial shot for a leading delivery company highlighting speed and reliability.',
    src: '/2026-04-30 15.40.04.mp4',
    portrait: false,
  },
  {
    id: 2,
    title: 'Professional Webinar',
    category: 'Event • Documentation',
    description: 'High-quality multi-camera recording and editing for an educational webinar, capturing the essence of the speakers.',
    src: '/DSCF2321_1.mp4',
    portrait: true,
  },
  {
    id: 3,
    title: 'Course Promo Motion',
    category: 'Promotional • Motion',
    description: 'A cinematic motion picture ad designed to promote an online course, using engaging visuals and smooth transitions.',
    src: '/2026-04-30 15.42.15.mp4',
    portrait: false,
  },
  {
    id: 4,
    title: 'Podcast Episode 08',
    category: 'Podcast • Interview',
    description: 'Intimate and professional studio recording for a business podcast, featuring a high-profile company owner.',
    src: '/Sequence 08_3.mp4',
    portrait: false,
  },
  {
    id: 5,
    title: 'Live Event Interview',
    category: 'Corporate • Event',
    description: 'On-the-fly, professional interview with a corporate representative at a major industry event.',
    src: '/C3617_5.mp4',
    portrait: true,
  }
];

function GalleryItem({ item }: { item: typeof portfolioItems[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div 
      className="gallery-item"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div 
        className={`video-wrapper ${item.portrait ? 'portrait' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video 
          ref={videoRef}
          className="gallery-video"
          src={item.src}
          muted
          loop
          playsInline
        />
      </div>
      
      <div className="item-details">
        <motion.span 
          className="item-category"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {item.category}
        </motion.span>
        
        <motion.h3 
          className="item-title serif"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {item.title}
        </motion.h3>
        
        <motion.p 
          className="item-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {item.description}
        </motion.p>
        
        <motion.button 
          className="play-btn"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          onClick={handleMouseEnter}
        >
          <div className="play-icon-circle">
            <Play size={18} fill="currentColor" />
          </div>
          Watch Project
        </motion.button>
      </div>
    </motion.div>
  );
}

function App() {
  return (
    <>
      <nav className="nav-header">
        <div className="logo serif">B. Sahraoui</div>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Bassma<br/>
              Sahraoui.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Photographer, videographer, and voiceover artist based in Setif, Algeria. 
              Crafting visual narratives that captivate and inspire.
            </motion.p>
          </div>
          
          <motion.div 
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <img src="/pf.jpg" alt="Bassma Sahraoui" className="hero-image" />
          </motion.div>
        </div>

        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
          <div className="scroll-line"></div>
        </motion.div>
      </section>

      <section id="work" className="gallery-section">
        <motion.h2 
          className="gallery-title serif"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Selected Works
        </motion.h2>
        
        <div className="gallery-grid">
          {portfolioItems.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </div>
      </section>

      <footer id="contact" className="footer">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="footer-title serif">Let's create together.</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            Available for freelance opportunities and collaborations.
          </p>
          <a href="mailto:contact@example.com" className="footer-contact">
            contact@bassmasahraoui.com
          </a>
        </motion.div>
      </footer>
    </>
  );
}

export default App;
