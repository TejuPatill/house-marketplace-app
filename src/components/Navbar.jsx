import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse px-5" id="navbarTogglerDemo01">
      <a className="navbar-brand fw-bold" target='_self' href="/">Hidden brand</a>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className='nav-link fw-bold'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/offers" className='nav-link fw-bold'>Offers</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className='nav-link fw-bold'>Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/profile" className='nav-link fw-bold'>Profile</NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success fw-bold" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar
