import React from 'react'
import HeroSection from './components/Herosection'
import Featureproduct from './components/Featureproduct'
import Latestproducts from './components/Latestproducts'


const page = () => {
  return (
    <div>
      <HeroSection/>
      <Featureproduct/>
      <Latestproducts/>
    </div>
  )
}

export default page
