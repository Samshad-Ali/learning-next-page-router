import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useContext } from 'react'
import { FormContext } from './Context'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {data }  = useContext(FormContext)
  return (
    <main>
      {data}
    </main>
  )
}
