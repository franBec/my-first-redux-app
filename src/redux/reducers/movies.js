import {
  startFetchMovieRating,
  errorFetchMovieRating,
  successFetchMovieRating,
  //------------------
  startFetchMovieDetail,
  successFetchMovieDetail,
  errorFetchMovieDetail,
} from "../actions/movies";

const initialState = {
  isFetching_movieRating: false,
  isLoading_movieRating: true,
  error_movieRating: null,
  success_movieRating: null,
  data_movieRating: {},
  //-------------------
  isFetching_movieDetail: false,
  isLoading_movieDetail: true,
  error_movieDetail: null,
  success_movieDetail: null,
  data_movieDetail: {},
};

const MoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case startFetchMovieRating.toString():
      return {
        ...state,
        isLoading_movieRating: false,
        isFetching_movieRating: true,
      };

    case successFetchMovieRating.toString():
      console.log(action.payload.data);
      return {
        ...state,
        isLoading_movieRating: false,
        isFetching_movieRating: false,
        data_movieRating: action.payload.data,
        success_movieRating: true,
        error_movieRating: null,
      };

    case errorFetchMovieRating.toString():
      return {
        ...state,
        isLoading_movieRating: false,
        isFetching_movieRating: false,
        data_movieRating: {},
        success_movieRating: false,
        error_movieRating: action.payload.error,
      };

    //--------------------------------

    case startFetchMovieDetail.toString():
      return {
        ...state,
        isLoading_movieDetail: false,
        isFetching_movieDetail: true,
      };

    case successFetchMovieDetail.toString():
      return {
        ...state,
        isLoading_movieDetail: false,
        isFetching_movieDetail: false,
        data_movieDetail: action.payload.data,
        success_movieDetail: true,
        error_movieDetail: null,
      };

    case errorFetchMovieDetail.toString():
      return {
        ...state,
        isLoading_movieDetail: false,
        isFetching_movieDetail: false,
        data_movieDetail: {},
        success_movieDetail: false,
        error_movieDetail: action.payload.error,
      };

    default:
      return state;
  }
};

export default MoviesReducer;
