import Head from 'next/head';
import styles from '../styles/Vision.module.css';

export default function Vision() {
  const products = [
    'Endoscope and Accessories',
    'Infusion Pump',
    'Neonatal Incubator',
    'Infant Radiant Warmer',
    'Powered Emergency Ventilator',
    'Anesthetic Cabinet, Table or Tray',
    'Electrosurgical Cutting & Coagulation Device',
    'Surgical Lamp',
    'Operating Tables & Accessories',
    'Surgical Smoke Precipitator',
    'Powered Suction Pump',
    'Electrocardiograph',
    'Cardiac Monitor',
    'Automated External Defibrillator System',
    'Ultrasonic Pulse Echo Imaging System',
    'Fetal Ultrasonic Monitor'
  ];

  return (
    <>
      <Head>
        <title>Visi Misi - PT. Medtro Medica Utama</title>
        <meta name="description" content="Learn more Vision PT. Medtro Medica Utama, our products, vision, mission, and contact information." />
      </Head>

      <div className={styles.visionPage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <h1 className={styles.heroTitle}>Visi Misi</h1>
            <p>Visi Misi Perusahaan PT. Medtro Medica Utama</p>
          </div>
        </section>

        {/* Company Info */}
        {/* <section className={`${styles.section} ${styles.companyInfo}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Profil Perusahaan</h2>
            <div className="grid grid-2">
              <div className="card">
                <h3 style={{ color: '#28a745', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Tentang Kami</h3>
                <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
                  PT. Medtro Medica Utama adalah perusahaan manufaktur perangkat medis yang berfokus 
                  pada produksi produk terbaik untuk pelanggan berharga kami. Kami menggunakan pekerja 
                  profesional dan alat berkualitas terbaik dalam proses produksi.
                </p>
                <p style={{ lineHeight: '1.7' }}>
                  Produksi kami berdasarkan kategori produk yang terdaftar di CPAKB, memastikan 
                  kepatuhan terhadap standar perangkat medis.
                </p>
              </div>
              <div className="card">
                <h3 style={{ color: '#28a745', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Target Pasar</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    padding: '15px', 
                    background: '#f8f9fa', 
                    borderRadius: '10px',
                    border: '2px solid #28a745'
                  }}>
                    <span style={{ 
                      fontSize: '2rem', 
                      fontWeight: 'bold', 
                      color: '#28a745', 
                      marginRight: '1rem' 
                    }}>90%</span>
                    <span>Pemerintah</span>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    padding: '15px', 
                    background: '#f8f9fa', 
                    borderRadius: '10px',
                    border: '2px solid #007bff'
                  }}>
                    <span style={{ 
                      fontSize: '2rem', 
                      fontWeight: 'bold', 
                      color: '#007bff', 
                      marginRight: '1rem' 
                    }}>6.5%</span>
                    <span>Rumah Sakit Swasta</span>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    padding: '15px', 
                    background: '#f8f9fa', 
                    borderRadius: '10px',
                    border: '2px solid #ffc107'
                  }}>
                    <span style={{ 
                      fontSize: '2rem', 
                      fontWeight: 'bold', 
                      color: '#ffc107', 
                      marginRight: '1rem' 
                    }}>3.5%</span>
                    <span>Instansi Lainnya</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Products Section */}
        {/* <section id="products" className={`${styles.section} ${styles.products}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Produk Kami</h2>
            <p className="text-center" style={{marginBottom: '3rem', fontSize: '1.1rem', color: '#666'}}>
              Kami memproduksi berdasarkan kategori produk yang terdaftar di CPAKB
            </p>
            <div className={styles.productGrid}>
              {products.map((product, index) => (
                <div key={index} className={styles.productCard}>
                  <div style={{ 
                    fontSize: '3rem', 
                    color: '#28a745', 
                    marginBottom: '1rem' 
                  }}>🏥</div>
                  <h4>{product}</h4>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Vision Mission */}
        <section id="vision" className={`${styles.section} ${styles.visionMission}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Visi & Misi</h2>
            <div className={styles.vmGrid}>
              <div className={styles.vmCard}>
                <h3>Visi</h3>
                <p style={{ textAlign: 'center', fontSize: '1.1rem', lineHeight: '1.7', color: '#555' }}>
                  Menjadi perusahaan manufaktur perangkat medis terdepan di Indonesia yang 
                  menghasilkan produk berkualitas tinggi untuk mendukung sistem kesehatan nasional.
                </p>
              </div>
              <div className={styles.vmCard}>
                <h3>Misi</h3>
                <ul>
                  <li>Memproduksi perangkat medis berkualitas tinggi</li>
                  <li>Menggunakan teknologi dan peralatan terdepan</li>
                  <li>Memberikan pelayanan terbaik kepada pelanggan</li>
                  <li>Berkontribusi pada kemajuan dunia kesehatan Indonesia</li>
                  <li>Mengembangkan inovasi berkelanjutan</li>
                  <li>Mempertahankan standar kualitas internasional</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        {/* <section id="contact" className={`${styles.section} ${styles.contact}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Kontak Kami</h2>
            <div className={styles.contactInfo}>
              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>📍</div>
                <h4>Alamat</h4>
                <p>
                  Kawasan Pergudangan, Jl. Bizpark II<br/>
                  Jl. Raya Penggilingan No.9 Blok A<br/>
                  RT.1/RW.7, Penggilingan, Kec. Cakung<br/>
                  Jakarta Timur 13940
                </p>
              </div>
              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>📞</div>
                <h4>Telepon</h4>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#28a745' }}>
                  +62 856-4118-6953
                </p>
                <p style={{ marginTop: '1rem', color: '#666' }}>
                  Senin - Jumat: 08:00 - 17:00 WIB
                </p>
              </div>
              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>✉️</div>
                <h4>Email</h4>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#28a745' }}>
                  info@medtromedica.com
                </p>
                <p style={{ marginTop: '1rem', color: '#666' }}>
                  Respon dalam 24 jam
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="hero-section" style={{ padding: '60px 0' }}>
          <div className="container text-center">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
              Siap Melayani Kebutuhan Alat Kesehatan Anda
            </h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
              Hubungi kami untuk konsultasi dan penawaran terbaik
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/location" className="btn">Kunjungi Lokasi</a>
              <a href="tel:+6285641186953" className="btn btn-secondary">Hubungi Sekarang</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}