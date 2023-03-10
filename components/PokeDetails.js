import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function PokeDetails({ index, details }) {
  const displayAbilities = () => {
    return details.abilities.map((ele) => {
      return (
        <span
          key={ele.slot}
          className="bg-blue-100 text-blue-800 text-l font-medium m-2 h-10 px-3.5 py-1.5 rounded dark:bg-blue-900 dark:text-blue-300"
        >
          {ele.ability["name"]}
        </span>
      );
    });
  };

  const displayStats = () => {
    return details.stats.map((ele) => {
      return (
        <div key={ele.stat.name + 1} className="text-left">
          <p>{ele.stat.name.toUpperCase()}</p>
          <div
            key={ele.stat.name}
            className="bg-blue-100 text-blue-800 text-l font-medium m-2 h-10 px-3.5 py-1.5 rounded dark:bg-blue-900 dark:text-blue-300"
            style={{ width: `${ele["base_stat"]}%` }}
          >
            <div className="bg-slate-900 text-center">{ele["base_stat"]}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="flex justify-around border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
      <Image
        className="rounded-t-lg"
        priority
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${index}.png`}
        alt={`${details.name}`}
        width={600}
        height={600}
      />

      <div className="p-5 w-2/4">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {details.name.toUpperCase()}: {index}
          </h5>
        </div>
        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Abilities : {displayAbilities()}
        </div>
        <div className="mb-3 font-normal w-full text-gray-700 dark:text-gray-400">
          Stats : {displayStats()}
        </div>
        <Link
          href={"/"}
          className="inline-flex ml-20 m-10 items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
            />
          </svg>
          Go Back
        </Link>
      </div>
    </div>
  );
}
