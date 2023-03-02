import Link from "next/link";
import React from "react";

export default function Pokemon({ initialPokemons }) {
  return (
    <div>
      <div className="bg-black-100 m-3 grid gap-5 grid-cols-4 grid-rows-3">
        {initialPokemons.results.map((ele, i) => (
          <Link
            key={ele.name + i}
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            href={`/pokemons/${ele.name}`}
          >
            <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {ele.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
