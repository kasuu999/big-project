import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-gray-200 p-4">
      <Link to="/" className="mr-4">Home</Link>
      <Link to="/about" className="mr-4">About</Link>
    </nav>
  );
}

export default NavBar;
