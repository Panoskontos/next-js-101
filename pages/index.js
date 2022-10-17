import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content='this is next js'></meta>
      </Head>

      <h1>Home</h1>
      <p>
        This is the home page
      </p>

     
    </div>
  )
}
