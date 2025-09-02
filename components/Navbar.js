import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Tutup menu ketika link diklik
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>
            Medtromedica
          </Link>
          
          <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
            <li>
              <Link href="/" className={styles.navLink} onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.navLink} onClick={handleLinkClick}>
                Tentang
              </Link>
            </li>
            <li>
              <Link href="/products" className={styles.navLink} onClick={handleLinkClick}>
                Produk
              </Link>
            </li>
            <li>
              <Link href="/vision" className={styles.navLink} onClick={handleLinkClick}>
                Visi Misi
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.navLink} onClick={handleLinkClick}>
                Kontak
              </Link>
            </li>
            <li>
              <Link href="/location" className={styles.navLink} onClick={handleLinkClick}>
                Lokasi
              </Link>
            </li>
          </ul>
          
          <div className={styles.mobileMenu} onClick={toggleMenu}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
