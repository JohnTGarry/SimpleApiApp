import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PageNavigator from "./PageNavigator";
import PokemonList from "./PokemonList";

// GET https://pokeapi.co/api/v2/pokemon/{id or name}/

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [prevPageUrl, setPrevPageUrl] = useState("");
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setIsLoading(false);
        setPokemonList(res.data.results);
        setPrevPageUrl(res.data.previous);
        setNextPageUrl(res.data.next);
      })
      .catch((err) => console.error(err));

    return () => {
      cancel();
    };
  }, [currentPageUrl]);

  const fetchPrevPage = () => {
    setCurrentPageUrl(prevPageUrl);
  };

  const fetchNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };

  if (isLoading) return <p>{"Loading..."}</p>;

  return (
    <div className="App">
      <PokemonList pokemonList={pokemonList} />
      <PageNavigator
        fetchPrevPage={fetchPrevPage}
        fetchNextPage={fetchNextPage}
        prevDisabled={!prevPageUrl}
        nextDisabled={!nextPageUrl}
      />
    </div>
  );
}
