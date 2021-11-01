import React, { useState } from 'react'
import Logo from '../assets/logo_bociek_solo.png'
import { Link } from "react-router-dom"
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'

function Navbar() {

    const [openLinks, setOpenLinks] = useState(true);
    
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={Logo} alt="bociek"/>
                <div className="hiddenLinks">
                    <Link to="/">Po Polsku</Link>
                    <Link to="/timeline">Wydarzenia</Link>
                    <Link to="/biblioteka">Biblioteka</Link>
                    <Link to="/kontakt">Kontakt</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/">Po Polsku</Link>
                <Link to="/timeline">Wydarzenia</Link>
                <Link to="/biblioteka">Biblioteka</Link>
                <Link to="/kontakt">Kontakt</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    )
}

export default Navbar
