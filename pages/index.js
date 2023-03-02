import Pokemon from "@/components/Pokemon";

export default function Home({ initials }) {
  return <Pokemon initialPokemons={initials} />;
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
