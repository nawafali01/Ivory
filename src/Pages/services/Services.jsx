import React from 'react'
import ServicesCard from './ServiceCard'
import Servicehero from './Servicehero'
import MaintenanceServicesSection from './export default function MaintenanceServicesSection'
import WhyChooseSection from './WhyChooseSection'
import WorkflowSection from './WorkflowSection'
import CTASection from './CTASection'

const Services = () => {
  return (
    <>
    <Servicehero/>
   <MaintenanceServicesSection/>
   <WhyChooseSection/>
   <WorkflowSection/>
   <CTASection/>
    <ServicesCard/>
    </>
  )
}

export default Services