import React from 'react'
import RandomGallery from './RandomGallery';
import { DraggableCardDemo } from './DraggableCardDemo';

const Ourprojects = () => {
  return (
    <div>
      <DraggableCardDemo/>
      {/* <DraggableCardDemo/> */}
      <RandomGallery/>
    </div>
  )
}

export default Ourprojects;