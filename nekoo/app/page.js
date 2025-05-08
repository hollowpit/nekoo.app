
'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Navbar from './components/Navbar';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';

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
          <motion.h1 
            className={styles.logo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedText text="Aniyomi" className={styles.logo} />
          </motion.h1>
          
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <AnimatedText 
              text="Full-featured player and reader, based on Tachiyomi Mihon." 
              className={styles.title} 
            />
          </motion.h2>
          
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Discover and watch anime, cartoons, series, and more – easier than ever on your Android device.
          </motion.p>
          
          <motion.div 
            className={styles.buttonGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <button className={styles.primaryButton}>Get started</button>
            <button className={styles.secondaryButton}>Download</button>
          </motion.div>
        </div>
        
        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.4,
            type: "spring",
            stiffness: 100
          }}
        >
          <Image 
            src="/phone-mockup.png" 
            alt="Aniyomi app on mobile device" 
            width={300}
            height={600}
            className={styles.phoneImage}
            priority
          />
        </motion.div>
      </div>

      <div className={styles.features}>
        <AnimatedSection delay={0.1}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Image src="/file.svg" alt="Tracking icon" width={24} height={24} />
            </div>
            <h3>Tracking</h3>
            <p>Automatically keep track of your series with MyAnimeList, AniList, Kitsu, and more.</p>
            <a href="#" className={styles.featureLink}>Setup tracking →</a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Image src="/window.svg" alt="Customization icon" width={24} height={24} />
            </div>
            <h3>Customization</h3>
            <p>Make it yours with multiple reading modes, custom color filters, and many other settings.</p>
            <a href="#" className={styles.featureLink}>Get started →</a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Image src="/globe.svg" alt="Extensions icon" width={24} height={24} />
            </div>
            <h3>Extensions</h3>
            <p>Bring your own content from a variety of sources.</p>
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
