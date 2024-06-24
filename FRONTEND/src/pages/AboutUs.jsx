//import React from 'react'

import Biography from "../components/Biography.jsx"
import Hero from "../components/Hero"

const AboutUs = () => {
  return (
    <>
      <Hero title={"Learn more about us ||Raghav HealthCare Institute"} imageUrl={"/about.png"}/>
      <Biography imageUrl={"/whoweare.png"}/>
    </>
  )
}

export default AboutUs
