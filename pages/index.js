import Head from 'next/head'
import Nav, { siteTitle } from '../components/nav';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Nav home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

      </main>
    </Nav>
  )
}
