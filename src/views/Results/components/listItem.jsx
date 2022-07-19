import React from "react";

const ListItem = ({ data, onListItemClick }) => {
  const handleButtonClick = () => {
    onListItemClick(data.id);
  };

  return (
    <div className="flex flex-row w-full mt-16" style={{ minWidth: 650 }}>
      <div className="w-1/6">
        <img
          className="w-32"
          src={
            data?.primaryImage?.url ??
            "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
          }
          alt="moviePic"
        />
      </div>
      <div className="flex flex-col items-start w-5/6 py-1 px-4">
        <div>
          <p className="text-3xl">{data?.titleText?.text ?? "Untitled"}</p>
        </div>
        <div className="flex h-full items-end">
          <button
            onClick={handleButtonClick}
            className="border-red-400 hover:bg-red-400 hover:text-white rounded-md-48 h-10 text-xl border-2 text-red-400"
          >
            See more...
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
