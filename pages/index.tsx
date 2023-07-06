import Image from 'next/image'
import { Inter } from 'next/font/google'
import Carousel from '@/Components/Carousel'
import Services from '@/Components/Services'
import AboutDr from '@/Components/AboutDr'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <Carousel/>
   <Services/>
   <AboutDr/>
   </>
  )
}
