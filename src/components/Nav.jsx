import React from 'react'
import nikelogo from '../assets/image/Nike-Logo.png';


export const Nav = () => {
  return (
    <div>
        <nav className='container'>
            <div className="logo">
                <img src={nikelogo} alt="logo" height={20}/>

            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button>Login</button>
        </nav>
    </div>
  )
}
