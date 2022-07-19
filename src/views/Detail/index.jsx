import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchMoviesDetails } from "../../redux/actions/movies";

import ErrorComponent from "../Results/components/error";
import Loading from "../Results/components/loading";

import Info from "./components/info";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    isFetching_movieDetail,
    isLoading_movieDetail,
    error_movieDetail,
    success_movieDetail,
    data_movieDetail,
  } = useSelector((state) => state.MoviesReducer);

  useEffect(() => {
    dispatch(fetchMoviesDetails(id));
  }, [dispatch, id]);

  const renderContent = () => {
    if (error_movieDetail) {
      return <ErrorComponent />;
    }

    if (isLoading_movieDetail || isFetching_movieDetail) {
      return <Loading />;
    }

    if (success_movieDetail && data_movieDetail?.results) {
      return <Info data={data_movieDetail?.results} />;
    }
  };

  return <>{renderContent()}</>;
};

export default Detail;
