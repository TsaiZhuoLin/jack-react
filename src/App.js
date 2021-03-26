import React, { useEffect } from "react";
import "./App.css";
import styled from "@emotion/styled";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";

import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

const pokemonReducer = (
  state = {
    pokemon: [],
    filter: "",
    selectedPokemon: null,
  },
  action,
) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_POKEMON":
      return {
        ...state,
        pokemon: action.payload,
      };
    case "SET_SELECTED_POKEMON":
      return {
        ...state,
        selectedPokemon: action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(pokemonReducer);

function App() {
  const dispatch = useDispatch();
  const pokemon = useSelector(state => state.pokemon);

  useEffect(() => {
    fetch("http://localhost:3000/jack-react/pokemon.json")
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: "SET_POKEMON",
          payload: data,
        }),
      );
  });

  if (!pokemon) {
    return <div>Loading data</div>;
  }

  return (
    <Container>
      <Title>pokemon Search</Title>
      <TwoColumnLayout>
        <div>
          <PokemonFilter />
          <PokemonTable />
        </div>

        <PokemonInfo />
      </TwoColumnLayout>
    </Container>
  );
}

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: "1rem";
`;
