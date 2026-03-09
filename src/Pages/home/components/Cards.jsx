import React from 'react'
import { Link } from 'react-router-dom'

const Cards = () => {
  const cards = [
    {
      id: 1,
      title: 'Fit-Out',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
      link: '/fit-out'
    },
    {
      id: 2,
      title: 'Maintenance',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a782?q=80&w=800&auto=format&fit=crop',
      link: '/maintenance'
    },
    {
      id: 3,
      title: 'Cleaning',
      image: 'https://images.unsplash.com/photo-1581578731117-104f2a863a11?q=80&w=800&auto=format&fit=crop',
      link: '/cleaning'
    },
    {
      id: 4,
      title: 'Real Estate',
      image: 'https://images.unsplash.com/photo-1600596542815-6ad4c7213aa8?q=80&w=800&auto=format&fit=crop',
      link: '/real-estate'
    }
  ]

  return (
    <section className="w-full px-4 sm:px-6 lg:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4 sm:gap-0 min-h-auto sm:min-h-[60vh] lg:min-h-[80vh]">
        {cards.map((card) => (
          <Link
            key={card.id}
            to={card.link}
            className="relative group w-full h-64  sm:h-96 lg:h-full overflow-hidden block"
          >
            {/* Background Image */}
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />

            {/* Base dim overlay */}
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-300"></div>

            {/* Top black blur gradient */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 sm:h-32 lg:h-40 bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-[1px]"></div>

            {/* Bottom black blur gradient */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-32 lg:h-40 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[1px]"></div>

            {/* Label */}
            <div className="absolute inset-0 z-10 flex items-center justify-center p-3 sm:p-4">
              <h3 className="text-white text-base sm:text-xl lg:text-2xl font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] border-b-2 border-transparent group-hover:border-white/50 pb-2 transition-all duration-300 text-center">
                {card.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Cards