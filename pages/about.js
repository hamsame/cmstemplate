import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { renderOptions } from '../components/renderOptions'

const client = createClient({
  space: process.env.NEXT_PUBLIC_SPACE_SECRET,
  accessToken: process.env.NEXT_PUBLIC_CMS_SECRET,
})

export const getStaticProps = async () => {
  const res = await client.getEntry('6a5seM5c8Cikh7mv9JEyl3')
  const data = await res
  return {
    props: { aboutText: data },
  }
}

export default function About({ aboutText }) {
  return (
    <>
      <Head>
        <title>Fitness</title>
        <meta name='description' content='The blog for people into fitness' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1>About</h1>
        <section className={styles.userContent}>
          {documentToReactComponents(aboutText.fields.aboutText, renderOptions)}
        </section>
      </main>
    </>
  )
}
