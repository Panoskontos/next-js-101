import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import axios from 'axios';
import { useState, useEffect } from 'react';


export default function Pokemon({data}) {

    const [pokemonName, setPokemonName] = useState(data.name)

    // client side rendering way
    // loading the data after

    // const [pokemonName, setPokemonName] = useState(null)
    // const [abilities, setAbilities] = useState([])

    // useEffect(()=>{
    //     console.log('pokemon loaded')
    //     // name
    //     axios.get('https://pokeapi.co/api/v2/pokemon/raichu')
    //     .then((res)=>{
    //         console.log(res.data.name)
    //         setPokemonName(res.data.name)
    //         setAbilities(res.data.abilities)
    //     })
     
    // }, [])


  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon NEXTJS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content='this is next js'></meta>
      </Head>

      <div>
    <h1>Pokemon</h1>
        This is the Pokemon page for 
        <h4>
        {pokemonName}
        </h4>

        {/* <br/>
        {abilities.length!==0?abilities.map((i)=>{
            return(
                <div>{i.ability.name}</div>
            )
        }):<></>} */}

      </div>

     
    </div>
  )
}

// server side rendering way
// Receive props at build time
// preloading the data
// user has data before 
export async function getStaticProps(){
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/raichu")
    const data = await res.json()
    
    return {
        props:{
            data
        }
    }
}
