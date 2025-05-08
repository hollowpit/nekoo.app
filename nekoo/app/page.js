
'use client';

import { useEffect } from 'react';
import styles from './page.module.css';
import Navbar from './components/Navbar';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

// Animated component with fade-in effect on scroll
function AnimatedSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: { 
          opacity: 1, 
          scale: 1, 
          y: 0,
          transition: { 
            duration: 0.8, 
            delay: delay,
            ease: [0.25, 0.1, 0.25, 1.0]
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

// Animated text with character-by-character reveal
function AnimatedText({ text, className }) {
  const textArray = Array.from(text);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.016,
        delayChildren: 0.2
      }
    }
  };
  
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        damping: 12, 
        stiffness: 100 
      }
    }
  };
  
  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {textArray.map((char, index) => (
        <motion.span key={index} variants={childVariants}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedText text="Aniyomi" className={styles.logo} />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <AnimatedText 
              text="is the new way to stream anime torrents." 
              className={styles.title} 
            />
          </motion.div>
          
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Stream anime torrents real-time with no waiting for downloads.
            Choose your own codec, without any paywall or watermark.
          </motion.p>
          
          <motion.div 
            className={styles.buttonGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button className={styles.primaryButton}>Download now</button>
            <button className={styles.secondaryButton}>Fork release</button>
          </motion.div>
        </div>
      </div>
      
      {/* Platform icons section removed */}

      <div className={styles.features}>
        <AnimatedSection delay={0.1}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <div className={styles.iconPlaceholder}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h3>Tracking</h3>
            <p>Automatically keep track of your series with MyAnimeList, AniList, Kitsu, and more.</p>
            <a href="#" className={styles.featureLink}>Setup tracking →</a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <div className={styles.iconPlaceholder}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3H21V21H3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h3>Customization</h3>
            <p>Make it yours with multiple reading modes, custom color filters, and many other settings.</p>
            <a href="#" className={styles.featureLink}>Get started →</a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <div className={styles.iconPlaceholder}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.25C6.62 2.25 2.25 6.62 2.25 12C2.25 17.38 6.62 21.75 12 21.75C17.38 21.75 21.75 17.38 21.75 12C21.75 6.62 17.38 2.25 12 2.25Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.25 12H21.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2.25C14.4853 2.25 16.5 6.62 16.5 12C16.5 17.38 14.4853 21.75 12 21.75C9.51472 21.75 7.5 17.38 7.5 12C7.5 6.62 9.51472 2.25 12 2.25Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h3>Extensions</h3>
            <p>Bring your own content from a variety of sources with our extensible plugin system.</p>
            <a href="#" className={styles.featureLink}>Browse extensions →</a>
          </div>
        </AnimatedSection>
      </div>

      <footer className={styles.footer}>
        <div>
          <a href="#">Open-source Apache Licensed</a>
          <a href="#">Privacy policy</a>
        </div>
        <div>Copyright © 2025 Mihon App, Aniyomi App</div>
      </footer>
    </main>
  );
}
