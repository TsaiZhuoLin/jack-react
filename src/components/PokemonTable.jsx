import React from "react";
import PokemonRow from "./PokemonRow";
import { useSelector, useDispatch } from "react-redux";

const PokemonTable = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector(state => state.pokemon);
  const filter = useSelector(state => state.filter);

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
