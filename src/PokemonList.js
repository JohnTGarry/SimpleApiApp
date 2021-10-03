import { PokemonItem } from "./PokemonItem";

export const PokemonList = ({ pokemonList }) => {
  return (
    <ul>
      {pokemonList.map((pokemonItem) => {
        const { name, url } = pokemonItem;
        return (
          <li key={name}>
            <PokemonItem name={name} url={url} />
          </li>
        );
      })}
    </ul>
  );
};

export default PokemonList;
