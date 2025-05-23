import React from 'react';

const navItems: string[] = ['Vols', 'Services', 'Terminales', 'Contact'];

const Navbar: React.FC = () => {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        padding: '1rem 2rem',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        letterSpacing: '0.05em',
        zIndex: 1030,
      }}
    >
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <a href="#" className="navbar-brand text-primary fw-bold fs-4">
          FlightDeck Airport
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ outline: 'none' }}
        >
          <span
            className="navbar-toggler-icon"
            style={{
              filter: 'invert(40%) sepia(90%) saturate(500%) hue-rotate(190deg) brightness(90%) contrast(85%)',
            }}
          />
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav text-uppercase fw-semibold">
            {navItems.map((item) => (
              <li key={item} className="nav-item mx-2">
                <a
                  href="#"
                  className="nav-link"
                  style={{
                    color: '#2c3e50',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#007bff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#2c3e50')}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
