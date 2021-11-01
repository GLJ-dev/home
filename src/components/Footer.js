import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import Facebook from '@mui/icons-material/Facebook'
import Twitter from '@mui/icons-material/Twitter'
import LinkedIn from '@mui/icons-material/LinkedIn'
import '../styles/Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <InstagramIcon />
                <Facebook />
                <Twitter />
                <LinkedIn />
            </div>
            
            <p> &copy; 2021 PP.com</p>
        </div>
    )
}

export default Footer
