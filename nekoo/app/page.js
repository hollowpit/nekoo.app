
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Nekoo</h1>
          <h2 className={styles.subtitle}>
            Discover and read manga, comics, webtoons, and more – 
            easier than ever on your device.
          </h2>
          <div className={styles.buttonGroup}>
            <button className={styles.primaryButton}>Get started</button>
            <button className={styles.secondaryButton}>Download</button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image 
            src="/phone-mockup.png" 
            alt="Nekoo app on mobile device" 
            width={300}
            height={600}
            className={styles.phoneImage}
            priority
          />
        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <Image src="/file.svg" alt="Tracking icon" width={24} height={24} />
          </div>
          <h3>Library Management</h3>
          <p>Automatically keep track of your manga with MyAnimeList, AniList, Kitsu, and more.</p>
          <a href="#" className={styles.featureLink}>Setup library &rarr;</a>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <Image src="/window.svg" alt="Customization icon" width={24} height={24} />
          </div>
          <h3>Customization</h3>
          <p>Make it yours with multiple reading modes, custom color filters, and many other settings.</p>
          <a href="#" className={styles.featureLink}>Get started &rarr;</a>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <Image src="/globe.svg" alt="Extensions icon" width={24} height={24} />
          </div>
          <h3>Extensions</h3>
          <p>Bring your own content from a variety of sources.</p>
        </div>
      </div>

      <footer className={styles.footer}>
        <div>
          <a href="#">Open-source Apache Licensed</a>
          <a href="#">Privacy policy</a>
        </div>
        <div>Copyright © 2025 Nekoo App</div>
      </footer>
    </main>
  );
}
