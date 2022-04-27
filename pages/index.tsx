import type { NextPage } from 'next'
import Image from 'next/image'
import { HeroLeft } from '../components/HeroLeft'
import { Navbar } from '../components/Navbar'
import logo from '../assets/images/hero3.png'
import { Companies } from '../components/Companies'
import { FeaturesLeft } from '../components/FeaturesLeft'
import { FeaturesRight } from '../components/FeaturesRight'
import { SectionOne } from '../components/SectionOne'
import { SectionTwo } from '../components/SectionTwo'
import { Download } from '../components/Download'


const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className='flex items-center justify-between my-8 px-8 md:px-0 md:w-2/3 mx-auto'>
          <HeroLeft />
          <div className="w-1/2 hidden md:block">
          <Image src={logo} objectFit="fill" alt=""/>
          </div>
        </div>
        <Companies />
        <div className='px-8 md:px-0 md:w-2/3 mx-auto flex flex-col space-y-5 md:space-y-0 md:flex-row items-center justify-between md:space-x-8 py-10'>
          <FeaturesLeft />
          <FeaturesRight />
        </div>
        <SectionOne />
        <SectionTwo />
        <div className='bg-green-100'>
          <Download />
        </div>
      </div>
    </div>
  )
}

export default Home
