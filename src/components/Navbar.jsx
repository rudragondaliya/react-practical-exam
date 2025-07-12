import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">Student Portal</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link text-white" aria-current="page" href="#">Form</Link>
        </li>
        <li className="nav-item">
          <Link to="/list" className="nav-link text-white" href="#">Lists</Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </>
  );
}

export default Navbar;
