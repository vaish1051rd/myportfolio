import React from 'react'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import { Aboutcontent } from '../components/Aboutcontent'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT" text="I am a Full-Stack Web and App Developer, Programmer and a final-year undergraduate at the Electrical department of HBTU Kanpur."/>
      <Aboutcontent />
      <Footer />
    </div>
  )
}

export default About