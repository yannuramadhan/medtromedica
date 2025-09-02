import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const products = [
    'Endoscope and Accessories',
    'Infusion Pump',
    'Neonatal Incubator',
    'Infant Radiant Warmer',
    'Powered Emergency Ventilator',
    'Anesthetic Cabinet',
    'Electrosurgical Device',
    'Surgical Lamp',
    'Operating Tables',
    'Surgical Smoke Precipitator',
    'Powered Suction Pump',
    'Electrocardiograph',
    'Cardiac Monitor',
    'Automated External Defibrillator',
    'Ultrasonic Imaging System',
    'Fetal Ultrasonic Monitor'
  ];

  return (
    <>
      <Head>
        <title>PT. Medtro Medica Utama - Medical Device Manufacturer</title>
        <meta name="description" content="PT. Medtro Medica Utama adalah manufacturer perangkat medis terbaik dengan pekerja profesional dan alat berkualitas tinggi." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Selamat Datang di Website</h1>
              <h2 className="hero-subtitle">PT. Medtro Medica Utama</h2>
              <p className="hero-description">
                Kami memproduksi perangkat medis terbaik dengan pekerja profesional dan alat berkualitas tinggi. 
                Solusi lengkap peralatan medis untuk rumah sakit & klinik Anda.
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="#products" className="btn">Cari Produk Alat Kesehatan</a>
                <a href="/about" className="btn btn-secondary">More Info</a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="container">
            <h2 className="section-title">Mengapa Memilih Kami</h2>
            <div className="grid grid-3">
              <div className="feature-card">
                <span className="feature-icon">🏥</span>
                <h3 className="feature-title">Berkualitas</h3>
                <p className="feature-description">
                  Perangkat medis berkualitas tinggi yang diproduksi dengan presisi dan perhatian detail
                </p>
              </div>
              <div className="feature-card">
                <span className="feature-icon">📦</span>
                <h3 className="feature-title">Stok Lengkap</h3>
                <p className="feature-description">
                  Berbagai pilihan alat kesehatan terbaik & terlengkap untuk kebutuhan medis Anda
                </p>
              </div>
              <div className="feature-card">
                <span className="feature-icon">👥</span>
                <h3 className="feature-title">Tim Profesional</h3>
                <p className="feature-description">
                  Tenaga ahli berpengalaman yang berdedikasi menghasilkan produk terbaik
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="search-section">
          <div className="container">
            <h2 className="section-title">Cari Produk Alat Kesehatan</h2>
            <div className="search-container">
              <input 
                type="text" 
                className="search-input" 
                placeholder="Masukkan nama produk yang dicari..."
              />
              <button className="search-btn">🔍</button>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="products-section">
          <div className="container">
            <h2 className="section-title">Produk Kami</h2>
            <div className="grid grid-4">
              {products.map((product, index) => (
                <div key={index} className="product-card">
                  <div className="product-image">
                    <span style={{ color: '#999', fontSize: '3rem' }}>🏥</span>
                  </div>
                  <div className="product-content">
                    <h4 className="product-title">{product}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="features-section">
          <div className="container">
            <h2 className="section-title">Tentang Perusahaan Kami</h2>
            <div className="grid grid-2">
              <div className="card">
                <h3 style={{ color: '#28a745', marginBottom: '1rem' }}>Profil Perusahaan</h3>
                <p style={{ marginBottom: '1rem' }}>
                  PT. Medtro Medica Utama adalah perusahaan manufaktur perangkat medis yang berfokus 
                  pada produksi produk terbaik untuk pelanggan berharga kami.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Kami melayani terutama institusi pemerintah (90%), rumah sakit swasta (6.5%), 
                  dan fasilitas medis lainnya (3.5%).
                </p>
                <a href="/about" className="btn">Selengkapnya</a>
              </div>
              <div className="card">
                <h3 style={{ color: '#28a745', marginBottom: '1rem' }}>Fasilitas Produksi</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#28a745' }}>✓</span>
                    Raw Material Area
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#28a745' }}>✓</span>
                    Production Area dengan Anti-Static Mat
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#28a745' }}>✓</span>
                    QC Area dengan Fluke ESA 620
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#28a745' }}>✓</span>
                    Finish Good Warehouse (23-25°C)
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#28a745' }}>✓</span>
                    R&D Room dengan 3D Printer
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="hero-section" style={{ padding: '60px 0' }}>
          <div className="container text-center">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
              Solusi Lengkap Peralatan Medis
            </h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
              Untuk Rumah Sakit & Klinik Anda
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/about#contact" className="btn">Hubungi Kami</a>
              <a href="/location" className="btn btn-secondary">Lokasi Kami</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}