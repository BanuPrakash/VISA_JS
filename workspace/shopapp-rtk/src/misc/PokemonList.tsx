import React from 'react';
import { useGetInfinitePokemonInfiniteQuery } from '../api/pokemanApi';

export const PokemonList = () => {
  const { 
    data, 
    isLoading, 
    isFetching, 
    fetchNextPage, 
    hasNextPage 
  } = useGetInfinitePokemonInfiniteQuery(1);

  if (isLoading) return <p>Loading initial pokemon...</p>;

  return (
    <div>
      {/* data.pages contains an array of each fetch's results */}
      {data?.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.results.map((pokemon: any) => (
            <div key={pokemon.name}>{pokemon.name}</div>
          ))}
        </React.Fragment>
      ))}

      <button 
        onClick={() => fetchNextPage()} 
        disabled={!hasNextPage || isFetching}
      >
        {isFetching ? 'Loading more...' : 'Load More'}
      </button>
    </div>
  );
};
