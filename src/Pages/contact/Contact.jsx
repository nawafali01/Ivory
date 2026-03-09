import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ContactSection from '../home/components/ContactSection'
import LocationSection from './LocationSection'
import Hero from '../home/components/Hero'

const Contact = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [location.hash])

  return (
    <>
    {/* <Hero/> */}
    <ContactSection/>
    <LocationSection/>
    </>
  )
}

export default Contact