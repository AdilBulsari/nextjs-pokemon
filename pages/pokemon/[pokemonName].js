// import Image from "next/image";
import PokeDetails from "@/components/PokeDetails";
import React from "react";

export default function PokemonDetails({ details }) {
  const PokemonIndex = ("000" + details.id).slice(-3);

  return (
    <div>
      <PokeDetails index={PokemonIndex} details={details} />
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const pokemonName = params.pokemonName;
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + pokemonName
  );

  const pokemonDetails = await response.json();
  return {
    props: {
      details: pokemonDetails,
    },
  };
};
