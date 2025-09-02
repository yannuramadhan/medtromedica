import { useState, useEffect } from 'react';
import styles from '../styles/Footer.module.css';
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { SiThreads } from "react-icons/si";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h3>PT. Medtro Medica Utama</h3>
              <p>
                Temukan berbagai pilihan alat kesehatan terbaik & terlengkap disini. 
                Manufacturer perangkat medis dengan pekerja profesional dan alat berkualitas terbaik.
              </p>
              <div className={styles.socialLinks}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <FaFacebookF />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <FaInstagram />
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <FaXTwitter />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <FaYoutube />
                </a>
              </div>
            </div>
            
            <div className={styles.footerSection}>
              <h4>Kontak Kami:</h4>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <span>Telepon: +62 856-4118-6953</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📱</span>
                <span>WhatsApp: +62 856-4118-6953</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <span>info@medtromedica.com</span>
              </div>
            </div>
            
            <div className={styles.footerSection}>
              <h4>Alamat Kami:</h4>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span>
                  Kawasan Pergudangan, Jl. Bizpark II<br/>
                  Jl. Raya Penggilingan No.9 Blok A<br/>
                  Jakarta Timur 13940
                </span>
              </div>
            </div>

            <div className={styles.footerSection}>
              <h4>Produk Utama:</h4>
              <ul>
                <li>Endoscope & Accessories</li>
                <li>Infusion Pump</li>
                <li>Neonatal Incubator</li>
                <li>Surgical Equipment</li>
                <li>Patient Monitors</li>
                <li>Ventilators</li>
                <li>Operating Tables</li>
                <li>Surgical Lamps</li>
              </ul>
            </div>
          </div>
          
          <div className={styles.footerBottom}>
            <p>
              © 2024 PT. Medtro Medica Utama. All Rights Reserved. 
              Published by <a href="#">www.medtromedica.com</a>
            </p>
          </div>
        </div>
      </footer>

      {showBackToTop && (
        <button 
          className={styles.backToTop}
          onClick={scrollToTop}
          title="Back to Top"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default Footer;