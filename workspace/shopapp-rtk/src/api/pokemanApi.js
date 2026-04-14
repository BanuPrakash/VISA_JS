import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (build) => ({
    getInfinitePokemon: build.infiniteQuery({
      infiniteQueryOptions: {
        initialPageParam: 0,
        // Calculate the next offset based on the last response
        getNextPageParam: (lastPage) => {
          if (!lastPage.next) return undefined;
          const url = new URL(lastPage.next);
          return parseInt(url.searchParams.get('offset') || '0', 10);
        },
      },
      // Receive both queryArg and the current pageParam
      query: ({ pageParam }) => `pokemon?limit=20&offset=${pageParam}`,
    }),
  }),
});

export const { useGetInfinitePokemonInfiniteQuery } = pokemonApi;
