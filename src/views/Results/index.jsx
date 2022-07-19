import pic from "../../assets/cinema2.jpg";

import { useParams } from "react-router";
import { useFetchMoviesQuery } from "../../redux/api/movies";
import { useNavigate } from "react-router";

import Loading from "./components/loading";
import List from "./components/list";
import ErrorComponent from "./components/error";

const Results = () => {
  const navigate = useNavigate();

  const { title } = useParams();
  const { data, error, isLoading, isFetching, isSuccess } =
    useFetchMoviesQuery(title);

  const renderContent = () => {
    if (error) {
      return <ErrorComponent />;
    }

    if (isLoading || isFetching) {
      return <Loading />;
    }

    if (isSuccess && data?.results) {
      return <List data={data?.results} onListItemClick={handleItemClick} />;
    }
  };

  const handleItemClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <div className="w-3/5 h-screen overflow-y-auto px-10">
        {renderContent()}
      </div>
      <div className="w-2/5">
        <img src={pic} alt="pic.jpg" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Results;
