import { useState } from 'react';
import './sidebar.css';
import { Link} from "react-router-dom";
function App() {
  
    const [clicked,setClicked]=useState(false);
    let display_hamburger="none"
    let crossVisible="hidden"
    let breadth="-250px"
    function openMenu(){
        setClicked(true);
    }

    function handleClick(){
        setClicked(false);
    }
    
    if(!clicked) 
    {
      display_hamburger="block";
    }

    if(clicked) {
      breadth="0"
      crossVisible="visible"
    }

  return (
    <>
    <div className="hamburger" style={{display:display_hamburger}} onClick={openMenu}><i className="fa-solid fa-bars"></i></div>
      <div className="side-menu-container" onBlur={handleClick} style={{left:breadth}}>
      <button className='close-button' style={{visibility:crossVisible}} onClick={handleClick}><i class="fa-solid fa-x"></i></button>
        <header className='side-heading'>Menu</header>
        <div className="links">
          <ul className="options">
            <li className="side-item">
              <Link to="/Profile"><i class="fa-regular favicon fa-user"></i> <span className="title">
                Profile</span></Link>
            </li>
            <li className="side-item">
              <Link to="/Wishlist"><i class="fa-regular favicon fa-heart"></i><span className="title">
                Wishlist</span></Link>
            </li>
            <li className="side-item">
              <Link to="/Bag"><i class="fa-solid favicon fa-bag-shopping"></i><span className="title">
                Bag</span></Link>
            </li>
            <li className="side-item">
              <Link to="/Men"><span className="title">
                HOME & LIVING</span></Link>
            </li>
            <li className="side-item">
              <Link to="/Men"><span className="title">
                BEAUTY</span></Link>
            </li>
            <li className="side-item">
              <Link to="/Men"><span className="title">
                STUDIO</span></Link>
            </li>
          </ul>
        </div>

      </div>
    </>
  );
}

export default App;
