import React from "react";

const CustomNotFound = () => {
  return (
    <div>
      <div className="flex text-center justify-center mt-6 items-center py-4 px-7 h-full flex-col">
        <img src="/assets/404.png" className="w-full md:w-3/12" />
        <h1 className=" text-xl md:text-2xl font-semibold mt-7 pb-4 ">
          The page you're looking for can&apos;t be found!
        </h1>
      </div>
    </div>
  );
};

export default CustomNotFound;
