import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center flex-col h-full">
      <div
        className="w-16 h-16 border-4 border-red-400 border-solid rounded-full animate-spin"
        style={{ borderTopColor: "transparent" }}
      />
      <p className="mt-3">Hey it is loading</p>
    </div>
  );
};

export default Loading;
