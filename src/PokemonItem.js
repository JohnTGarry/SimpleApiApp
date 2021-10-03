export const PokemonItem = ({ name, url }) => {
  return (
    <>
      <a href={url}>{name}</a>
    </>
  );
};
