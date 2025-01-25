
import Herosection from '@/components/heroSection'
import ImageGallery from '@/components/imageGallery'
import Products from '@/components/products'
import BrowseRange from '@/components/range'
import HeroSection from '@/components/second'
import { Metadata } from 'next'
import React from 'react'

const page = () => {
  return (
    <div>
   < HeroSection/>
   <BrowseRange/>
      <Products/>
      < Herosection/>
      <ImageGallery/>

    
      
    </div>
  )
}

export default page


export const metadata: Metadata = {
  title: 'Home-Honest_Bazaar',
  description: 'lorem my e-store',
}
