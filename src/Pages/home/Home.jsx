import React from 'react'
import Hero from './components/Hero'
// import Cards from './components/Cards'
import Excellence from './components/Excellence'
import SmoothSlider from './components/Slider'
import Awards from './components/Awards'
import Features from './components/Features'
import JourneyTimeline from './components/JourneyTimeline'
import ContactSection from './components/ContactSection'
import LocationSection from '../contact/LocationSection'
import ServicesCard from '../services/ServiceCard'
import StatsSection from './components/StatsSection'




const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      {/* <Cards /> */}
      {/* <Excellence/> */}
     <StatsSection/>
      <ServicesCard/>
      <SmoothSlider/>
      <Awards/>
      <Features/>
    <JourneyTimeline/>
    <ContactSection/>
    <LocationSection/>
    </div>
  )
}

export default Home