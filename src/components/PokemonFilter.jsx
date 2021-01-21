import React, { useContext } from "react";
import PokemonContext from "../PokemonContext";
import styled from "@emotion/styled";

const PokemonFilter = () => {
  const {
    state: { filter },
    dispatch,
  } = useContext(PokemonContext);
  return (
    <Input
      type="text"
      value={filter}
      onChange={e =>
        dispatch({
          type: "SET_FILTER",
          payload: e.target.value,
        })
      }
    />
  );
};

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

export default PokemonFilter;
