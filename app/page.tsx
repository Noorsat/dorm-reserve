"use client"

import Main from './components/Main/Main'
import News from './components/News/News'
import Services from './components/Services/Services'
import Rooms from './components/Rooms/Rooms'
import Footer from './components/Footer/Footer'
import { useEffect } from 'react'

export default function Home() {

  return (
    <>
      <Main />
      <News />
      <Services />
      <Rooms />
      <Footer />
    </>
  )
}
