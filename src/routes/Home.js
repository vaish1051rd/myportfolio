import React from 'react'
import Navbar from '../components/Navbar'
import Heroimage from '../components/Heroimage'
// import HeroImg2 from '../components/HeroImg2'
import Footer from '../components/Footer'
import Aboutcontent from '../components/Aboutcontent'
import Work from '../components/Work'
const Home = () => {
  return (
    <div>
        <Navbar />
        <Heroimage />
        <Work />
        <hr className='custom-hr'/>
      <Aboutcontent />
      
        <Footer />
    </div>
  )
}

export default Home