import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <Link className="navbar-brand" to="/">Fabrik Assignment</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <NavLink className="nav-link" to="/all">All 3-D Models <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/upload">Upload a 3-d Model</NavLink>
            </li>
            </ul>
        </div>
        </nav>
        </div>
    )
}

export default Navigation
