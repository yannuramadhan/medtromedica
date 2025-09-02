// Simple authentication functions
export const users = [
  {
    id: 1,
    username: 'admin',
    password: 'medtromedica2024', // In production, use hashed passwords
    role: 'admin'
  }
];

export const authenticate = (username, password) => {
  const user = users.find(u => u.username === username && u.password === password);
  return user || null;
};

export const isAuthenticated = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
  return false;
};

export const login = (username, password) => {
  const user = authenticate(username, password);
  if (user) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify(user));
    }
    return true;
  }
  return false;
};

export const logout = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
  }
};

export const getCurrentUser = () => {
  if (typeof window !== 'undefined') {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
  return null;
};