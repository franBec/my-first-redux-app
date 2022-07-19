import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchMovieRating } from "../../../redux/actions/movies";

import ErrorComponent from "../../Results/components/error";
import Loading from "../../Results/components/loading";

const Info = ({ data }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    isFetching_movieRating,
    isLoading_movieRating,
    error_movieRating,
    success_movieRating,
    data_movieRating,
  } = useSelector((state) => state.MoviesReducer);

  useEffect(() => {
    dispatch(fetchMovieRating(id));
  }, [dispatch, id]);

  const renderRating = () => {
    if (error_movieRating) {
      return <ErrorComponent />;
    }

    if (isLoading_movieRating || isFetching_movieRating) {
      return <Loading />;
    }

    if (success_movieRating && data_movieRating?.results) {
      return <p>Rating: {data_movieRating?.results?.averageRating}/10 </p>;
    }

    if (success_movieRating && !data_movieRating?.results) {
      return <p>No rating available</p>;
    }
  };

  return (
    <div className="flex flex-row w-full mt-16">
      <div className="w-2/5">
        <img
          className="w-32"
          src={
            data?.primaryImage?.url ??
            "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
          }
          alt="moviePic"
        />
      </div>
      <div className="w-3/5">
        <div>
          <p className="text-3xl">{data?.titleText?.text ?? "Untitled"}</p>
          <p className="text-xl">{data?.releaseYear.year ?? "Unknown"}</p>
          <>{renderRating()}</>
        </div>
        <div className="flex h-full items-end"></div>
      </div>
    </div>
  );
};

export default Info;
