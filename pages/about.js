import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ABOUT NEXTJS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content='this is next js'></meta>
      </Head>

    <h1 style={{color:"grey"}}>About</h1>
      <p>
        This is the about page
      </p>
      <img src="images/goku.jpg"></img>
    

     
    </div>
  )
}
