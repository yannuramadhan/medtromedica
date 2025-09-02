import Head from 'next/head';
import styles from '../styles/Location.module.css';

export default function Location() {
  return (
    <>
      <Head>
        <title>Lokasi - PT. Medtro Medica Utama</title>
        <meta name="description" content="Find our location and get directions to PT. Medtro Medica Utama facility." />
      </Head>

      <div className={styles.locationPage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <h1 className={styles.heroTitle}>Lokasi Kami</h1>
            <p>Temukan lokasi fasilitas PT. Medtro Medica Utama</p>
          </div>
        </section>

        {/* Location Info */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.locationInfo}>
              <div className={styles.infoCard}>
                <h2 className={styles.addressTitle}>Alamat Lengkap</h2>
                <div className={styles.address}>
                  <strong>PT. Medtro Medica Utama</strong><br/>
                  Kawasan Pergudangan, Jl. Bizpark II<br/>
                  Jl. Raya Penggilingan No.9 Blok A<br/>
                  RT.1/RW.7, Penggilingan<br/>
                  Kec. Cakung, Jakarta Timur<br/>
                  DKI Jakarta 13940
                </div>
                
                <div style={{marginTop: '2rem'}}>
                  <div className={styles.contactItem}>
                    <span className={styles.contactIcon}>📞</span>
                    <span>+62 856-4118-6953</span>
                  </div>
                  <div className={styles.contactItem}>
                    <span className={styles.contactIcon}>✉️</span>
                    <span>info@medtromedica.com</span>
                  </div>
                  <div className={styles.contactItem}>
                    <span className={styles.contactIcon}>🕒</span>
                    <span>Senin - Jumat: 08:00 - 17:00 WIB</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.mapContainer}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.737682469601!2d106.93526727403687!3d-6.164887893825837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c20cde1fd2f%3A0x22f8b9323f1c5d3b!2sJl.%20Raya%20Penggilingan%20No.9%2C%20Penggilingan%2C%20Kec.%20Cakung%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013940!5e0!3m2!1sid!2sid!4v1693668888888!5m2!1sid!2sid"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: "8px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>
          </div>
        </section>

        {/* Facilities Info */}
        <section className={styles.section} style={{background: '#f8f9fa'}}>
          <div className="container">
            <h2 className={styles.sectionTitle} style={{color: '#333'}}>Fasilitas Kami</h2>
            <div className="grid grid-3">
              <div className="card">
                <h4>Raw Material Area</h4>
                <p>Area penyimpanan bahan baku untuk produksi, terletak di garis depan fasilitas produksi kami.</p>
              </div>
              <div className="card">
                <h4>Production Area</h4>
                <p>Ruang produksi dengan staf profesional dan menggunakan anti-static mat untuk mencegah listrik statis.</p>
              </div>
              <div className="card">
                <h4>QC Area</h4>
                <p>Area pengujian produk sebelum pengemasan/pengiriman menggunakan Fluke ESA 620 sebagai alat tester.</p>
              </div>
              <div className="card">
                <h4>Finish Good Warehouse</h4>
                <p>Gudang steril dan standar dengan suhu 23-25°C dan kelembaban 50%.</p>
              </div>
              <div className="card">
                <h4>R&D Room</h4>
                <p>Ruang penelitian dan pengembangan dengan 3D printer Creality untuk mencetak cetakan.</p>
              </div>
              <div className="card">
                <h4>Big Dimension Warehouse</h4>
                <p>Gudang berukuran besar untuk menyimpan produk-produk dengan dimensi besar.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}