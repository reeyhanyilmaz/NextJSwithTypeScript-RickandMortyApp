import React from "react";
import Layout from "../components/Layout";
import { GetStaticProps} from "next";
import { IEpisodes } from "../types/types";
import styles from "../styles/Episodes.module.css";
import type { NextPageWithLayout } from 'next';

const Episodes: NextPageWithLayout<{ episodes: IEpisodes[] }> = ({ episodes }) => {
      
  return (
    // <div>{JSON.stringify(episodes)}</div>
    <div className={styles.container}>
      {episodes.map((items) => {
        return (
          <div key={items.id} className={styles.content}>
            <h3>{items.name}</h3>
            <p>{items.air_date}</p>
            <p>{items.episode}</p>
            <p>{items.created}</p>
            {items.characters.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </div>
        );
      })}
    </div>
  );
};

Episodes.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://rickandmortyapi.com/api/episode");

  const { results } = await res.json();

  return {
    props: {
      episodes: results,
    },
  };
};

export default Episodes;
