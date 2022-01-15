import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div>
            </div>
            <div>
                <Link to="/about">About</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </nav>
    )
}

export default Navbar

