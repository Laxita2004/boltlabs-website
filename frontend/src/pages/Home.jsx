import React from 'react'
import Intro from '../components/Intro'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import OurProjects from '..//components/OurProjects'
import Testimonials from '../components/Testimonials'
import Header from '../components/Header'


function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Services />
      <WhyChooseUs />
      <OurProjects />
      <Testimonials />
    </div>
  )
}

export default Home