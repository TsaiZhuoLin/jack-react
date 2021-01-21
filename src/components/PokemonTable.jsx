import React, { useContext } from "react";
import PokemonContext from "../PokemonContext";
import PokemonRow from "./PokemonRow";

const PokemonTable = () => {
  const {
    state: { pokemon, filter },
    dispatch,
  } = useContext(PokemonContext);
  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {pokemon
          .filter(pokemon =>
            pokemon.name.english.toLocaleLowerCase().includes(filter),
          )
          .slice(0, 20)
          .map((pokemon, index) => (
            <PokemonRow
              key={index}
              pokemon={pokemon}
              onClick={pokemon =>
                dispatch({
                  type: "SET_SELECTED_POKEMON",
                  payload: pokemon,
                })
              }
            />
          ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;