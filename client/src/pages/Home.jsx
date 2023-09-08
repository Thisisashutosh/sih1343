import React from 'react'
import Homenav from '../components/Homenav'
import Header from '../components/Header'
import Info from '../components/Info'
import Details from '../components/Details'
import AYS from '../components/AYS'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-5'>
      <Homenav/>
      <Header/>
      <Info/>
      <Details/>
      <AYS/>
      <Footer/>
    </div>
  )
}

export default Home