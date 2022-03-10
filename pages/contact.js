import Head from 'next/head'
import Image from 'next/image'
import { useGlobalContext } from '../components/context'
import styles from '../styles/Home.module.css'

export default function Home() {
  const data = useGlobalContext()
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1>contact</h1>
      </main>
    </>
  )
}