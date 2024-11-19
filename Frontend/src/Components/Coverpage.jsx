import React from 'react'
import banner from "../Images/homepage.jpg"
function Coverpage() {
  return (
    <>
<div className="relative inline-block">
  <img src={banner} alt="Banner" className="w-full h-auto" />
  
  {/* Heading */}
  <h1 
    className="absolute top-1/3 left-1/2 
    transform -translate-x-1/2 
    text-white text-4xl font-serif text-center"
  >
    Instant Book Summaries at Your Fingertips
  </h1>
  
  {/* Button */}
  <button 
    className="absolute top-1/2 left-1/2 
    transform -translate-x-1/2 
    bg-orange-500 text-white px-6 py-3 
    rounded hover:bg-orange-600 font-semibold"
  >
    Explore Various Book Summaries
  </button>
</div>


    </>
  )
}

export default Coverpage;
