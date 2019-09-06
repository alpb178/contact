import React, { Component } from 'react'
import {Link} from 'react-router-dom'

function Header(props){
    const {titlePage}=props
    return(
        <nav className="nav navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
            <a href="/" className="navbar-brand">
            {titlePage}
            </a>
        <div>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                      <i className="fas fa-home"/> home </Link> 
                </li>
                <li className="nav-item">
                  <Link to="/addcontacts" className="nav-link">
                  <i className="fas fa-plus"/>   Add Contact </Link>   
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link"> 
                  <i className="fas fa-question"/>About</Link>   
                </li>
                <li className="nav-item">
                  <Link to="/test" className="nav-link"> 
                  <i className="fas fa-question"/>Test</Link>   
                </li>
           
            </ul>
        </div>
        </div>
        </nav>
    );
}

export default Header;