//dosya ismini [] yapma sebebimiz dynamic routes

import { IGetCharacterResults, ICharacters } from "../../types/types";
import Image from "next/image";
import imageLoader from "../../imageLoader";

function CharacterPage({ character }: { character: ICharacters }) {
  return (
    <div>
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

export async function getStaticPaths() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results }: IGetCharacterResults = await res.json();

  return {
    paths: results.map((character) => {
      return { params: { id: String(character.id) } };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );

  const character = await res.json();

  return {
    props: {
        character,
    },
  };
}
export default CharacterPage;
