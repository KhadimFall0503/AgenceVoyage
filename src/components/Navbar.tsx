function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white p-3 px-5">
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <a href="#" className="navbar-brand text-primary fw-bold">FlightDeck Airport</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item fw-bold">
                <a className="nav-link"  href="#">Vols</a>
              </li>
              <li className="nav-item fw-bold">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item fw-bold">
                <a className="nav-link" href="#">Terminales</a>
              </li>
              <li className="nav-item fw-bold">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
