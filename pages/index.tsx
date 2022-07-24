import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ICharacters, IGetCharacterResults } from '../types/types'

//character prop aldı, bu propta ICharacter type'a eşit [] bu array anlamına gelir.
const Home: NextPage<{characters: ICharacters[]}> = ({characters}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ricky and Morty</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {JSON.stringify(characters)}
    </div>
  )  
}


export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const {results}:IGetCharacterResults = await res.json();

  return {
    props: {
        characters: results,
    }
  }
}

export default Home;
