"use client"

import Main from './components/Main/Main'
import News from './components/News/News'
import Services from './components/Services/Services'
import Rooms from './components/Rooms/Rooms'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';
import {useState} from 'react';

export default function Home() {
  const [loginModal, setLoginModal] = useState<boolean>(false);

  return (
    <>
      <Header loginModal={loginModal} setLoginModal={setLoginModal} />
      <Main setLoginModal={setLoginModal} />
      <News />
      <Services />
      <Rooms />
      <Footer />
    </>
  )
}
