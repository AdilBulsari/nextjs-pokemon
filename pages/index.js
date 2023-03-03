import Pokemon from "@/components/Pokemon";
import { useState } from "react";

export default function Home({ initials }) {
  const [pokemon, setPokemon] = useState(initials);
  const [offset, setOffset] = useState(0);

  const fetchPokemon = async (url, next) => {
    const response = await fetch(url);
    const loadPokemon = await response.json();
    setOffset(next ? offset + 20 : offset - 20);

    setPokemon(loadPokemon);
  };

  return (
    <div className="dark:bg-gray-800 -m-5">
      <div className="m-5 grid flex justify-center gap-15">
        {pokemon.results.map((singlePokemon, index) => (
          <Pokemon key={index} pokemon={singlePokemon} index={index + offset} />
        ))}
      </div>
      <div className="flex justify-center items-center ">
        <button
          onClick={() => fetchPokemon(pokemon.previous, false)}
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Previous
        </button>
        <button
          onClick={() => fetchPokemon(pokemon.next, true)}
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const pokemons = await response.json();

  return {
    props: {
      initials: pokemons,
    },
  };
}
