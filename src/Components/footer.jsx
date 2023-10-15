import React from 'react'
import '../App.css'
export default function Footer() {
    return (
        <>
            <div className="footer-first-container">
                <div className='footer-container'>
                    <ul className="column">
                        <header>ONLINE SHOPPING</header>
                        <li className="item">Men</li>
                        <li className="item">Women</li>
                        <li className="item">Kids</li>
                        <li className="item">Home & Living</li>
                        <li className="item">Beauty</li>
                        <li className="item">Gift Cards</li>
                        <li className="item">Myntra Ins</li>
                        <header className='header3'>USEFUL LINKS</header>
                        <li className="item">Blog</li>
                        <li className="item">Careers</li>
                        <li className="item">Site Map</li>
                        <li className="item">Corporate Information</li>
                        <li className="item">Whitehat</li>
                    </ul>
                </div>
                <div className='footer-container'>
                    <ul className="column">
                        <header>CUSTOMER POLICIES</header>
                        <li className="item">FAQ</li>
                        <li className="item">T&C</li>
                        <li className="item">Terms Of Use</li>
                        <li className="item">Shipping</li>
                        <li className="item">Cancellation</li>
                        <li className="item">Returns</li>
                        <li className="item">Privacy Policy</li>
                        <li className="item">Grievance Officer</li>
                    </ul>
                </div>
                <div className='footer-container'>
                    <ul className="column">
                        <header>EXPERIENCE MYNTRA APP ON MOBILE</header>
                        <li className="item-1"><a href="/"><img className='download-app' src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="" srcset="" /></a> </li>
                        <li className="item-1"><a href="/"><img className='download-app' src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="" srcset="" /></a> </li>
                        <header className='header2'>KEEP IN TOUCH</header>
                        <li className="social-links">
                            <i class="fa-brands social-media fa-square-facebook"></i>
                            <i class="fa-brands social-media fa-twitter"></i>
                            <i class="fa-brands social-media fa-youtube"></i>
                            <i class="fa-brands social-media fa-instagram"></i>
                        </li>
                    </ul>
                </div>
                <div className='footer-container'>
                    <ul className="column">
                        <li className="item-1">
                            <img className='originality-img'
                                src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt="" srcset="" />
                            <span className='return-policies'>
                                <h4 className='inline-heading'>100% ORIGINAL &nbsp;</h4>
                                guarantee for all products at myntra.com
                            </span>
                        </li>
                        <br />
                        <li className="item-1"><img className='originality-img'
                            src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png" alt="" srcset="" />
                            <span className='return-policies'>
                                <h4 className='inline-heading'>Return within 14days &nbsp;</h4>
                                of receiving your order
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </>



    )
}
