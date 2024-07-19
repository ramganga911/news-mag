import React from 'react';

const Navbar = ({ setCategory }) => {
  const navLinkStyle = { cursor: 'pointer' };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className="badge bg-light text-dark">Daily News</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 w-100 d-flex justify-content-between">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style={navLinkStyle}>Home</a>
            </li>
            <li className="nav-item">
              <div className="nav-link" style={navLinkStyle} onClick={() => setCategory("technology")}>Technology</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" style={navLinkStyle} onClick={() => setCategory("business")}>Business</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" style={navLinkStyle} onClick={() => setCategory("sports")}>Sports</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" style={navLinkStyle} onClick={() => setCategory("health")}>Health</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" style={navLinkStyle} onClick={() => setCategory("entertainment")}>Entertainment</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;




