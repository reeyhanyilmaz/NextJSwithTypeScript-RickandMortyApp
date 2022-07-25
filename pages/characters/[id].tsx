//dosya ismini [] yapma sebebimiz dynamic routes
import { ICharacters } from "../../types/types";
import Image from "next/image";
import { useRouter } from "next/router";
import imageLoader from "../../imageLoader";
import { GetServerSideProps } from "next";
import Layout from "../../components/Layout";
import styles from "../../styles/CharacterDetails.module.css";
import React from "react";

function CharacterPage({ character }: { character: ICharacters }) {
  const router = useRouter();
  console.log("router :>> ", router);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{character.name}</h1>

        <Image
          loader={imageLoader}
          unoptimized
          src={character.image}
          alt={character.name}
          width="200px"
          height="200px"
          className={styles.image}
        />

        <p>
          * {character.status} - {character.species}
          <br /> <br />
          Gender: {character.gender}
          <br /> <br />
          Origin Name: {character.origin.name}
          <br /> <br />
          Character Type: {character.type}
          <br /> <br />      
          Last know location : {character.location.name}
        </p>
      </div>
      
      <button className={styles.btn} onClick={() => router.back()}>
        back to home page
      </button>
    </div>
  );
};

CharacterPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

//serverSide props sadece server da çalışır.
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${context.query.id}`
  );

  const character = await res.json();

  return {
    props: {
      character,
    },
  };
};
export default CharacterPage;
