import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <>
      <Head>
        <title>Fitness</title>
        <meta name='description' content='The blog for people into fitness' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1>about</h1>
        <a href='/'>Homepage</a>
      </main>
    </>
  )
}
