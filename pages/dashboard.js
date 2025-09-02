import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { isAuthenticated, logout, getCurrentUser } from '../lib/auth';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
    } else {
      setUser(getCurrentUser());
    }
  }, [router]);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Dashboard - PT. Medtro Medica Utama</title>
        <meta name="description" content="Admin dashboard for content management" />
      </Head>

      <div style={{ paddingTop: '80px', minHeight: '100vh', background: '#f8f9fa' }}>
        {/* Dashboard Header */}
        <div style={{
          background: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          padding: '1rem 0'
        }}>
          <div className="container" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h1>Dashboard Admin</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span>Welcome, {user.username}</span>
              <button onClick={handleLogout} className="btn" style={{
                background: '#dc3545',
                padding: '0.5rem 1rem'
              }}>
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="container" style={{ padding: '2rem 20px' }}>
          {/* Dashboard Navigation */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'content', label: 'Content Management' },
              { id: 'products', label: 'Products' },
              { id: 'settings', label: 'Settings' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '0.75rem 1.5rem',
                  border: 'none',
                  borderRadius: '5px',
                  background: activeTab === tab.id ? '#007bff' : 'white',
                  color: activeTab === tab.id ? 'white' : '#333',
                  cursor: 'pointer',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dashboard Content */}
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            {activeTab === 'overview' && (
              <div>
                <h2>Website Overview</h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '1.5rem',
                  marginTop: '2rem'
                }}>
                  <div className="card">
                    <h4>Total Visitors</h4>
                    <p style={{ fontSize: '2rem', color: '#007bff' }}>1,234</p>
                  </div>
                  <div className="card">
                    <h4>Page Views</h4>
                    <p style={{ fontSize: '2rem', color: '#28a745' }}>5,678</p>
                  </div>
                  <div className="card">
                    <h4>Inquiries</h4>
                    <p style={{ fontSize: '2rem', color: '#ffc107' }}>89</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'content' && (
              <div>
                <h2>Content Management</h2>
                <div style={{ marginTop: '2rem' }}>
                  <h3>Website Sections</h3>
                  <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
                    {[
                      'Home Page Hero',
                      'About Company',
                      'Products List',
                      'Vision & Mission',
                      'Contact Information',
                      'Location Details'
                    ].map((section, index) => (
                      <div key={index} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '1rem',
                        border: '1px solid #ddd',
                        borderRadius: '5px'
                      }}>
                        <span>{section}</span>
                        <button className="btn" style={{
                          background: '#28a745',
                          padding: '0.5rem 1rem',
                          fontSize: '0.9rem'
                        }}>
                          Edit
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'products' && (
              <div>
                <h2>Product Management</h2>
                <div style={{ marginTop: '2rem' }}>
                  <button className="btn" style={{ marginBottom: '1rem' }}>
                    Add New Product
                  </button>
                  <div style={{
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    overflow: 'hidden'
                  }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead style={{ background: '#f8f9fa' }}>
                        <tr>
                          <th style={{ padding: '1rem', textAlign: 'left' }}>Product Name</th>
                          <th style={{ padding: '1rem', textAlign: 'left' }}>Category</th>
                          <th style={{ padding: '1rem', textAlign: 'left' }}>Status</th>
                          <th style={{ padding: '1rem', textAlign: 'left' }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          'Endoscope and Accessories',
                          'Infusion Pump',
                          'Neonatal Incubator',
                          'Surgical Lamp'
                        ].map((product, index) => (
                          <tr key={index} style={{ borderTop: '1px solid #ddd' }}>
                            <td style={{ padding: '1rem' }}>{product}</td>
                            <td style={{ padding: '1rem' }}>Medical Device</td>
                            <td style={{ padding: '1rem' }}>
                              <span style={{
                                padding: '0.25rem 0.5rem',
                                background: '#28a745',
                                color: 'white',
                                borderRadius: '3px',
                                fontSize: '0.8rem'
                              }}>
                                Active
                              </span>
                            </td>
                            <td style={{ padding: '1rem' }}>
                              <button style={{
                                padding: '0.25rem 0.5rem',
                                background: '#007bff',
                                color: 'white',
                                border: 'none',
                                borderRadius: '3px',
                                marginRight: '0.5rem',
                                cursor: 'pointer'
                              }}>
                                Edit
                              </button>
                              <button style={{
                                padding: '0.25rem 0.5rem',
                                background: '#dc3545',
                                color: 'white',
                                border: 'none',
                                borderRadius: '3px',
                                cursor: 'pointer'
                              }}>
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <h2>Website Settings</h2>
                <div style={{ marginTop: '2rem' }}>
                  <div className="grid grid-2">
                    <div className="card">
                      <h4>Site Information</h4>
                      <form>
                        <div style={{ marginBottom: '1rem' }}>
                          <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                            Site Title
                          </label>
                          <input
                            type="text"
                            defaultValue="PT. Medtro Medica Utama"
                            style={{
                              width: '100%',
                              padding: '0.5rem',
                              border: '1px solid #ddd',
                              borderRadius: '3px'
                            }}
                          />
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                          <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                            Contact Email
                          </label>
                          <input
                            type="email"
                            defaultValue="info@medtromedica.com"
                            style={{
                              width: '100%',
                              padding: '0.5rem',
                              border: '1px solid #ddd',
                              borderRadius: '3px'
                            }}
                          />
                        </div>
                        <button type="submit" className="btn">
                          Save Changes
                        </button>
                      </form>
                    </div>
                    <div className="card">
                      <h4>Security</h4>
                      <form>
                        <div style={{ marginBottom: '1rem' }}>
                          <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                            Change Password
                          </label>
                          <input
                            type="password"
                            placeholder="New Password"
                            style={{
                              width: '100%',
                              padding: '0.5rem',
                              border: '1px solid #ddd',
                              borderRadius: '3px'
                            }}
                          />
                        </div>
                        <button type="submit" className="btn">
                          Update Password
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}