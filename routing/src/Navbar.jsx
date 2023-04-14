import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h3 className="logo">Logo</h3>

      <div className="links-wrapper active">
        <ul className="links">
          <li>
            <Link to="/">
              <a href="#">Products List</a>
            </Link>
          </li>
          <li>
            <Link to="/products/cart">
              <a href="#">Cart</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
