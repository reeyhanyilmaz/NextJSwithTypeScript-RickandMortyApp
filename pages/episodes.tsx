import React from 'react';
import Layout from '../components/Layout';
import { GetServerSideProps} from 'next'
import {IEpisodes} from '../types/types';

const Episodes: React.FC <{episodes : IEpisodes[]}> = ({episodes}) => {
  return (
    // <div>{JSON.stringify(episodes)}</div>
    <div>
        {episodes.map((items) => {
            return (
                <div key={items.id}>
                    <h3>{items.name}</h3>
                    <p>{items.air_date}</p>
                    <p>{items.episode}</p>
                    <p>{items.characters.join(', ')}</p>
                </div>
            )})}
    </div>
  )}

Episodes.getLayout = function getLayout(page:React.ReactElement) {
    return <Layout>{page}</Layout>;
  };


// sık sık değişen verileri getirmek 
//ve sayfanın en güncel verileri gösterecek şekilde güncellenmesinde kullanılır..
  export const getServerSideProps: GetServerSideProps= async (context) => {
      const res = await fetch("https://rickandmortyapi.com/api/episode");

      const  {results} = await res.json();

      return {
          props: {
              episodes: results,
          }
      }

  }

export default Episodes;