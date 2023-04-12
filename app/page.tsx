import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Main from './components/Main/Main'
import News from './components/News/News'
import Services from './components/Services/Services'
import Rooms from './components/Rooms/Rooms'
import Footer from './components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

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
