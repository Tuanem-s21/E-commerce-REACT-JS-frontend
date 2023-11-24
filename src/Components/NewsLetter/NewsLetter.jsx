import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='news-letter'>
        <h1>Get Exclusive Offers On Your Mail</h1>
        <p>Subscribe to our newletter stay updated</p>
        <div>
            <input type="email" placeholder='Enter Your Mail'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter