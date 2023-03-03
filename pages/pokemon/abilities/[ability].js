import React from "react";

export default function ability({ details }) {
  console.log(details);
  return <div>ability</div>;
}

export const getServerSideProps = async ({ params }) => {
  const abilityType = params.ability;
  const response = await fetch(
    "https://pokeapi.co/api/v2/ability/" + abilityType
  );
  // const data = await response.json();
  const abilityDetails = await response.json();
  return {
    props: {
      details: abilityDetails,
    },
  };
};
