import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cart }) => {
  const itemCount = cart.length;

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand fs-2" href="/">Restaurant</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 fs-5 text-center">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">Food-Item</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Order</Link>
            </li>
          </ul>
        </div>
        <Link to="/cart" className="btn-dark position-relative">
          <i className="fa-solid fa-cart-shopping fs-2"></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
            {itemCount}
            <span className="visually-hidden">unread messages</span>
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
