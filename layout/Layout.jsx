import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'

const Layout = () => {
  const whatsappNumber = '+971544605759' // Replace with your WhatsApp number
  const whatsappMessage = "Hi! I’m interested in your maintenance services. Can you provide more details?"

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      '_blank'
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 w-full max-w-full mx-auto">
        <Outlet />
      </main>
      <Footer />

      {/* WhatsApp Floating Widget */}
      <div
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 flex items-center cursor-pointer group"
        aria-label="Contact us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        {/* Text bubble */}
        <div className="hidden sm:flex items-center bg-white px-4 py-2 rounded-full shadow-lg mr-2 group-hover:shadow-xl transition-shadow">
          <span className="text-sm text-gray-800">
            Need Help?{' '}
            <span className="font-semibold text-green-600">
              Chat with us
            </span>
          </span>
        </div>

        {/* WhatsApp icon circle */}
        <div className="bg-green-500 group-hover:bg-green-600 text-white rounded-full p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 flex items-center justify-center">
          <i className="fab fa-whatsapp text-2xl sm:text-3xl" />
        </div>
      </div>
    </div>
  )
}

export default Layout