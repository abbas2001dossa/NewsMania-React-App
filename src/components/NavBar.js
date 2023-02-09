import React, { Component } from 'react'
import { Link } from 'react-router-dom'


// rcep --- react class export component with proptypes , if you wwant to remove the proptypes , just remove the static part ! 


const NavBar = ()=> {

 
    return (
      <div>
            <nav className="navbar navbar-expand-lg fixed-top  bg-dark text-white" >
            <div className="container-fluid">
                <Link className="navbar-brand"to="/">  NewsMania </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link  className="nav-link" aria-current="page" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link  className="nav-link" aria-current="page" to="/business">Business</Link>
                    </li>
                    <li className="nav-item">
                      <Link  className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link>
                    </li>
                    <li className="nav-item">
                      <Link  className="nav-link" aria-current="page" to="/general">General</Link>
                    </li>
                    <li className="nav-item">
                      <Link  className="nav-link" aria-current="page" to="/health">Health</Link>
                    </li>
                    <li className="nav-item">
                      <Link  className="nav-link" aria-current="page" to="/science">Science</Link>
                    </li>
                    <li className="nav-item">
                      <Link  className="nav-link" aria-current="page"to="/sports">Sports</Link>
                    </li>
                    <li className="nav-item">
                      <Link  className="nav-link" aria-current="page" to="/technology"> Technology </Link>
                    </li>
                    
                </ul>
                {/* NOt making anytype of search in it !  */}
                {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                </div>
            </div>
            </nav>
      </div>
    )
  }



// rcep --- react class export component with proptypes , if you wwant to remove the proptypes , just remove the static part ! 


export default NavBar
