import React, { useState } from 'react'
import Logo from '../assets/logo_bociek.png'
import { Link } from "react-router-dom"
import '../styles/Navbar.css'
import { ThreeSixty } from '@mui/icons-material';

class Navbar extends React.Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
    return (
            <nav className="NavbarItems">
                <div className="navbar-logo">
                    <Link to="/"><img src={Logo} alt="bociek"/></Link>
                </div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <Link className="nav-links" to="/home">P P</Link>
                    <Link className="nav-links" to="/timeline">Events</Link>
                    <Link className="nav-links" to="/biblioteka">Library</Link>
                    <Link className="nav-links" to="/kontakt">Contact</Link>
                </ul>
            </nav>
        )
    }
}

export default Navbar