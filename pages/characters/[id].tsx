//dosya ismini [] yapma sebebimiz dynamic routes
import { ICharacters } from "../../types/types";
import Image from "next/image";
import { useRouter } from "next/router";
import imageLoader from "../../imageLoader";
import { GetServerSideProps } from "next";
import Layout from "../../components/Layout";
import styles from "../../styles/Character.module.css";
import React from "react";

function CharacterPage({ character }: { character: ICharacters }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1>{character.name}</h1>

      <Image
        loader={imageLoader}
        unoptimized
        src={character.image}
        alt={character.name}
        width="200px"
        height="200px"
      />
    </div>
  );
}

CharacterPage.getLayout = function getLayout(page: typeof CharacterPage | any) {
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
