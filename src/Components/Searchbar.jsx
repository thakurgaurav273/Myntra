import React from 'react'
import '../App.css'
export default function Searchbar() {
  return (
    <div className='search-bar'>
        <div className='search-icon'><i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <input  className="search-field" type="text" placeholder='Search for products, brands and more '/>

    </div>
  )
}
