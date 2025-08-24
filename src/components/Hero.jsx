import React from 'react'

import amazon from '../assets/image/amazon.png';    
import flipkart from '../assets/image/flipkart.png';
import shoes from '../assets/image/shoe_image.png'
const Hero = () => {
  return (
    <main className="hero">
        <div className='hero-content'>
            <div className='left'>
                 <h1>YOUR FEET DESERVE THE BEST</h1>
                  <p>Your feet deserve the best and we're here to help you with our shoes.</p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
               </div>

               <div className="shopping">
                    <p>Also Available on</p>

                   <div className="brand-icon">
                       <img src={amazon} alt="Amazon" />
                       <img src={flipkart} alt="Flipkart" />
                 </div>
             </div>
            </div>

            <div className='right'>
               <div className='hero-image'>
                     <img src={shoes} alt="Shoes" />
               </div>
          </div>
            
      </div>

     
    </main>
  )
}

export default Hero