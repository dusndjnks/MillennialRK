import { NavLink } from "react-router-dom";
import React from 'react'

const UnderConstruction = () => {
  return (
    <div className="min-h-screen bg-[#5d0008] flex flex-col items-center justify-center text-white px-4">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold animate-pulse text-center">🚧 Under Construction 🚧</h1>
    <p className="mt-4 text-lg sm:text-xl text-gray-200 animate-fade-in text-center">We're working hard to bring something awesome. Stay tuned!</p>
    <div className="mt-10">
      <svg className="w-20 h-20 animate-bounce text-red-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    </div>
    <NavLink to="/" className="mt-8 inline-block bg-white text-[#5d0008] font-semibold px-6 py-2 rounded-full hover:bg-red-500 hover:text-white transition-colors duration-300">Back to Homepage</NavLink>
  </div>
  )
}

export default UnderConstruction

