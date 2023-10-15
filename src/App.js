import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Topimg from './Components/top-img.png'
import discount from './Components/discount.png'
import VerticalCard from './Components/VerticalCard';
import CardLinks from './Components/CardLinks.jsx'

function App() {
  return (
    <>
      <Navbar />
      <div className="contents">
        <img className='full-size-images' alt='' src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/4/c697c000-3cf1-48f8-8130-c15ff23306401696438189573-FLAT-300-Off-on-1st-Purchase-Strip--2-.jpg' />
        
        <img className='full-size-images' src={Topimg} alt="" srcset="" />
        
        <img className='full-size-images' alt='' src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/4/6401663d-5123-45d9-944f-1bce5ce39ecb1696438281384-Sponsorship-strip.jpg' />
        <img className='full-size-images' alt='' src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/4/094f8577-046a-43cd-a8a1-fec47b56419e1696437688078-Coupon-Corner.jpg' />
        
        <img className='full-size-images' src={discount} alt="" srcset="" />
        
        <img className='full-size-images' alt='' src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/4/d441b128-d26f-4533-a7f4-1f9679decfeb1696437688115-OMG-Deals.jpg' />
        
        <div className="card-container">
        {CardLinks[0].map(item => (
          <VerticalCard key={item.key} source={item.source} />
          ))}
        </div>
        
        <img className='full-size-images' alt='' src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/4/a45dd85d-7253-47ac-8797-70426db553f21696437688096-Category-Specials.jpg' />
          
        <div className="card-container">
        {CardLinks[1].map(item => (
          <VerticalCard key={item.key} source={item.source} />
          ))}
        </div>

        <img className='full-size-images' alt='' src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/4/673c184f-4970-4534-a3ee-af23ebf95c731696438098430-App-Install-Banner--3-.jpg' />
      </div>

    </>
  );
}

export default App;
