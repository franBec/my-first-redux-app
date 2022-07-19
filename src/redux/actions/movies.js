import { createAction } from "@reduxjs/toolkit";

const BASE_URL = "https://moviesdatabase.p.rapidapi.com";
const headers = {
  "X-RapidAPI-Key": process.env.REACT_APP_KEY,
  "X-RapidAPI-Host": process.env.REACT_APP_HOST,
};

export const startFetchMovieRating = createAction("START_FETCH_MOVIE_RATING");
export const successFetchMovieRating = createAction(
  "SUCCESS_FETCH_MOVIE_RATING"
);
export const errorFetchMovieRating = createAction("ERROR_FETCH_MOVIE_RATING");

export const fetchMovieRating = (movieId) => async (dispatch) => {
  try {
    dispatch(startFetchMovieRating());
    const res = await fetch(`${BASE_URL}/titles/${movieId}/ratings`, {
      headers,
    });
    const data = await res.json();
    console.log(data);

    dispatch(successFetchMovieRating({ data }));
  } catch (error) {
    dispatch(errorFetchMovieRating({ error }));
  }
};

//-------------------------------------------------------------

export const startFetchMovieDetail = createAction("START_FETCH_MOVIE_DETAIL");
export const successFetchMovieDetail = createAction(
  "SUCCESS_FETCH_MOVIE_DETAIL"
);
export const errorFetchMovieDetail = createAction("ERROR_FETCH_MOVIE_DETAIL");

export const fetchMoviesDetails = (movieId) => async (dispatch) => {
  try {
    dispatch(startFetchMovieDetail());
    const res = await fetch(`${BASE_URL}/titles/${movieId}?info=mini_info`, {
      headers,
    });

    const data = await res.json();
    dispatch(successFetchMovieDetail({ data }));
  } catch (error) {
    dispatch(errorFetchMovieDetail({ error }));
  }
};
