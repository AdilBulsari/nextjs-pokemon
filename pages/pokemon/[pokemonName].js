import PokeDetails from "@/components/PokeDetails";
import React from "react";
import Error from "../_error";

export default function PokemonDetails({ details, errorCode }) {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  const PokemonIndex = ("000" + details.id).slice(-3);

  return <PokeDetails index={PokemonIndex} details={details} />;
}

export const getServerSideProps = async ({ params }) => {
  const pokemonName = params.pokemonName;

  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + pokemonName
    );

    if (!response.ok || response.status !== 200) {
      return { props: { errorCode: response.status } };
    }

    const pokemonDetails = await response.json();
    return {
      props: {
        details: pokemonDetails,
      },
    };
  } catch (error) {
    return Error("erroeq");
  }
};
