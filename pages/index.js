import Pokemon from "@/components/Pokemon";

export default function Home({ initials }) {
  return (
    <div className="m-5 grid gap-5 grid-cols-5">
      {initials.results.map((ele, index) => (
        <Pokemon key={index} pokemon={ele} index={index} />
      ))}
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
