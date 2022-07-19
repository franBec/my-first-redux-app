import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  "X-RapidAPI-Key": process.env.REACT_APP_KEY,
  "X-RapidAPI-Host": process.env.REACT_APP_HOST,
};

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://moviesdatabase.p.rapidapi.com",
  }),
  endpoints: (builder) => ({
    fetchMovies: builder.query({
      query: (title) => ({
        url: `/titles/search/title/${title}`,
        method: "GET",
        headers,
      }),
    }),
  }),
});

export const { useFetchMoviesQuery } = moviesApi;
