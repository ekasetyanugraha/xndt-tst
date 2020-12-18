export default function Navbar() {
  return (
    <nav className="navbar box m-0" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu container">
        <div className="navbar-start">
          <a href="/" className="navbar-item">
            Home
          </a>

          <a href="/search" className="navbar-item">
            Search
          </a>

          <a className="navbar-item">
            Something
          </a>
        </div>
      </div>
    </nav>
  );
}
