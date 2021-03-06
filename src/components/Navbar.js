import React, { useState } from 'react'
import Logo from '../assets/logo_bociek.png'
import { Link } from "react-router-dom"
import '../styles/Navbar.css'

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
                    <Link className="nav-links" to="/">Po Polsku</Link>
                    <Link className="nav-links" to="/timeline">Wydarzenia</Link>
                    <Link className="nav-links" to="/biblioteka">Biblioteka</Link>
                    <Link className="nav-links" to="/kontakt">Kontakt</Link>
                </ul>
            </nav>
        )
    }
}

export default Navbar