
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Nekoo
        </Link>
        
        <div className={styles.links}>
          <Link href="#features" className={styles.navLink}>Features</Link>
          <Link href="#about" className={styles.navLink}>About</Link>
          <Link href="#extensions" className={styles.navLink}>Extensions</Link>
          <a href="#" className={styles.downloadButton}>Download</a>
        </div>
      </div>
    </nav>
  );
}
