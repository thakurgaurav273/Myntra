import React from 'react'
import '../App.css'
export default function VerticalCard({key,source}) {
  return (
    <div className='Card' key={key}>
      <img src={source} alt={`${key}`} />
    </div>
  )
}
