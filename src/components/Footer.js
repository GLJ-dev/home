import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import Facebook from '@mui/icons-material/Facebook'
import Twitter from '@mui/icons-material/Twitter'
import LinkedIn from '@mui/icons-material/LinkedIn'
import { Link } from "react-router-dom"
import '../styles/Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <a href={"https://www.facebook.com/popolsku.nantes"}>
                    <Facebook />
                </a>
                <InstagramIcon />
                <Twitter />
                <LinkedIn />
            </div>
            
            <p> &copy; 2021 po-polsku.netlify.app</p>
        </div>
    )
}

export default Footer
