import Head from 'next/head'
import Image from 'next/image'
import { useGlobalContext } from '../components/context'
import styles from '../styles/Contact.module.css'

export default function Contact() {
  return (
    <>
      <Head>
        <title> | Contact</title>
        <meta name='description' content='Professional accounting services' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.contactPage}>
        <section className={styles.contact}>
          <div className={styles.formDiv}>
            <h1 className={styles.contactTitle}>Get In Touch</h1>
            <form className={styles.contactForm}>
              <div className={styles.formControl}>
                <label htmlFor='firstName'>First Name: </label>
                <input type='text' id='firstName' id='firstName' />
              </div>
              <div className={styles.formControl}>
                <label htmlFor='lastName'>Last Name: </label>
                <input type='text' id='lastName' name='lastName' />
              </div>
              <div className={styles.formControl}>
                <label htmlFor='email'>Email Address: </label>
                <input type='text' id='email' name='email' />
              </div>
              <div className={styles.formControl}>
                <label htmlFor='message'>Message: </label>
                <textarea name='message' id='message' name='message'></textarea>
              </div>
              <button type='submit'>SUBMIT</button>
            </form>
          </div>
          <div className={styles.infoDiv}>
            <p>123 Main Street</p>
            <p>Somewehere, London</p>
            <p>enquries@wlaccountants.com</p>
            <p>0208 123 456</p>
          </div>
        </section>

        <section>{/* google maps */}</section>
      </main>
    </>
  )
}
