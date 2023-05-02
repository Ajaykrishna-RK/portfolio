import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomePage from './HomePage'
import Exp from "./experience/page"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>

<HomePage/>


    
  </>
  )
}
