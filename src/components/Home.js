import React from 'react'
import img1 from '../media/img1.jpg'
import '../App.css'

const Home = () => {
  return (
    <div>
        <img className='home-img' src={img1} alt="" />
        <h5 className='home-text'>
            Welcome TO The Hospital <h4>We Here To Save You!!</h4>
        </h5>
    </div>
  )
}

export default Home