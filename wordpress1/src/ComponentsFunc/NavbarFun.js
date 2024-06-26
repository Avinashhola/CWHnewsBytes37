// ----------------------------------------(FUNCTI0N BASED)-----------------------------------------------------------//

import React,{useState} from 'react'
import {
  Link
} from "react-router-dom";



const  NavbarFun =()=> {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Home">Channel 37</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">News-Bytes</Link>
              </li>
              <li className="nav-item"> <Link className="nav-link" to="/business">Business</Link></li>
              <li className="nav-item"> <Link className="nav-link" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"> <Link className="nav-link" to="/general">General</Link></li>
              <li className="nav-item"> <Link className="nav-link" to="/health">Health</Link></li>
              {/* <li className="nav-item"> <Link className="nav-link" to="/science">Science</Link></li>
              <li className="nav-item"> <Link className="nav-link" to="/sports">Sports</Link></li>
              <li className="nav-item"> <Link className="nav-link" to="/technology">Technology</Link></li> */}


              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                <li className="nav-item"> <Link className="nav-link" to="/science">Science</Link></li>
              <li className="nav-item"> <Link className="nav-link" to="/sports">Sports</Link></li>
              <li className="nav-item"> <Link className="nav-link" to="/technology">Technology</Link></li>
                </ul>
              </li>
  
            </ul>
        
          </div>
        </div>
      </nav>
    )
  }

export default NavbarFun;

