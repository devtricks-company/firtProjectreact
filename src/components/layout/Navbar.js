import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Navbar = props => {
    
    const {title,icon} = props;
    

        return (
           <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
              <a href="/" className="navbar-brand">
                  <i className={icon}></i>
                  <span className="pl-3">{title}</span>
                  </a>

                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                      <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                  </ul>
           </nav>
        )
 
}

Navbar.defaultProps = {
    title:"GitHub Finder",
    icon:"fab fa-github"
}

 Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
}

export default Navbar
