import React from 'react'
import RandomGallery from './RandomGallery';
import { DraggableCardDemo } from './DraggableCardDemo';
import PortfolioPage from './PortfolioPage';

const Ourprojects = () => {
  return (
    <div>
      <DraggableCardDemo/>
      {/* <DraggableCardDemo/> */}
      <RandomGallery/>
      <PortfolioPage/>
    </div>
  )
}

export default Ourprojects;