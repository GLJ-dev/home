import React from 'react';
import { Link } from "react-router-dom";
import BackgroundImg from '../assets/logo_bociek.png';
import '../styles/Home.css';


function Home() {
    return (
    <div className="home">
        <div className="backgroundBociek" style={{backgroundImage: `url(${BackgroundImg})`}}>
        </div>
        <div className="headerContainer">
            <h1><strong>O nas</strong></h1>
            <p>&ensp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus 
                viverra vitae congue eu consequat ac felis donec et odio pellentesque 
                diam volutpat commodo sed egestas egestas fringilla phasellus faucibus sceleris
                que eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada 
                bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales.
            </p>
            {/*<Link to="/menu"><button>ORDER NOW</button></Link>*/}
        </div> 
    </div>
    );
}

export default Home
