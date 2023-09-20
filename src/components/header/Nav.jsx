import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './nav.scss';

export default function Header() {

  return (
    <>
      <nav className="navbar navbar-light bg-light navbar-header">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-end" href="#">
            <img src="../../../src/assets/images/wherebnb-logo.png" alt="" height="30" className="d-inline-block align-text-top" />
            <span>wherebnb</span>
          </a>
        </div>
    </nav>
    </>
  )
}
