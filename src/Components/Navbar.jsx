import React from 'react'
import '../App.css'
import brandLogo from './Myntra-logo (1).png';
import Searchbar from './Searchbar';
export default function Navbar() {
  return (
    <div className='navbar-container'>
            <img className='brand-logo' src={brandLogo} alt="" srcset="" />

            <ul className="Links">
                <li className="options">MEN</li>
                <li className="options">WOMEN</li>
                <li className="options">KIDS</li>
                <li className="options">HOME & LIVING</li>
                <li className="options">BEAUTY</li>
                <li className="options">STUDIO</li>
                <li className="new">NEW</li>
            </ul>
            <Searchbar/>

            <ul className="Links corner-links">
                    <li className="options side-links"><i class="fa-regular favicon fa-user"></i> <br /> Profile</li>
                    <li className="options side-links"><i class="fa-regular favicon fa-heart"></i> <br /> Wishlist</li>
                    <li className="options side-links"><i class="fa-solid favicon fa-bag-shopping"></i> <br /> Bag</li>
            </ul>
    </div>
  )
}
