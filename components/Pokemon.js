import Link from "next/link";
import Image from "next/image";

export default function Pokemon({ pokemon, index }) {
  const pokeIndex = ("000" + (index + 1)).slice(-3);
  return (
    <Link
      className="flex flex-col m-3 justify-center items-center border rounded shadow hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-900"
      href={`/pokemon/${pokemon.name}`}
    >
      <Image
        priority
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeIndex}.png`}
        alt={`${pokemon.name}`}
        width={200}
        height={200}
      />
      <p className="uppercase subpixel-antialiased text-amber-400 text-center m-2 tracking-widest font-bold">
        {pokemon.name}
      </p>
    </Link>
  );
}
