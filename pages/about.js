import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <>
      <Head>
        <title>Fitness</title>
        <meta name='description' content='The blog for people into fitness' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1>About</h1>
      </main>
    </>
  )
}
