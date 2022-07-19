import { useState } from "react";
import { useNavigate } from "react-router-dom";

import About from "./about";

import pic from "../../assets/cinema1.jpg";

const Index = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCleanClick = () => {
    setSearch("");
  };

  const handleSearchClick = () => {
    navigate(`/results/${search}`);
  };

  return (
    <div className="flex">
      <div className="w-2/5">
        <img src={pic} alt="pic.jpg" className="w-full h-screen object-cover" />
      </div>
      <div className="w-3/5 flex justify-center items-center flex-col px-10">
        <h2 className="text-4xl font-bold">Look up a movie...</h2>
        <input
          type="text"
          className="bg-[#f5f0f0] w-full my-3 h-9 p-1 border focus:outline-none focus:ring-2 focus:ring-gray-500 rounded"
          value={search}
          onChange={(e) => handleInputChange(e)}
          placeholder="Search a movie"
        />
        <div className="flex w-full justify-between">
          <button
            onClick={() => handleSearchClick()}
            className="bg-red-500 text-white hover:bg-red-600 w-full shadow-lg h-9 mr-1"
          >
            Search
          </button>
          <button
            onClick={() => handleCleanClick()}
            className="bg-red-500 text-white hover:bg-red-600 w-full shadow-lg h-9 ml-1"
          >
            Clear
          </button>
        </div>
        <div className="mt-4">
          <About />
        </div>
      </div>
    </div>
  );
};

export default Index;
