
import Link from 'next/link';
import styles from './Navbar.module.css';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className={styles.logo}>
            Nekoo
          </Link>
        </motion.div>
        
        <motion.div 
          className={styles.links}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link href="#features" className={styles.navLink}>Features</Link>
          <Link href="#about" className={styles.navLink}>About</Link>
          <Link href="#extensions" className={styles.navLink}>Extensions</Link>
          <a href="#" className={styles.downloadButton}>Download</a>
        </motion.div>
      </div>
    </nav>
  );
}
