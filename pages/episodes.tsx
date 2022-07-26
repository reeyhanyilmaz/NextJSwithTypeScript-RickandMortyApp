import React from "react";
import Layout from "../components/Layout";
import { GetServerSideProps } from "next";
import { IEpisodes } from "../types/types";
import styles from "../styles/Episodes.module.css";

const Episodes: React.FC<{ episodes: IEpisodes[] }> = ({ episodes }) => {
      
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
            <p>
              <li>
                {items.characters.map((item) => {
                  return <li key={item}>{item}</li>;
                })}
              </li>
            </p>
          </div>
        );
      })}
    </div>
  );
};

Episodes.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// sık sık değişen verileri getirmek
//ve sayfanın en güncel verileri gösterecek şekilde güncellenmesinde kullanılır..
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch("https://rickandmortyapi.com/api/episode");

  const { results } = await res.json();

  return {
    props: {
      episodes: results,
    },
  };
};

export default Episodes;
