import React from "react";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function MovieCard(props) {
  const { img, name, rate, release } = props;
  return (
    <>
      <Link
        to={`/movie/playpage/${name}`}
        className=" relative w-full h-[300px] group movieLink"
      >
        <div className="h-full w-full overflow-hidden ">
          <img className="w-full" src={img} alt={name} />
        </div>
        <div className="my-linear absolute w-full h-full top-0 left-0 flex flex-col justify-end p-3 text-sm">
          <span className="mt-2 block font-bold text-lg leading-5">{name}</span>
          <span className="mt-1 flex items-center text-white gap-1">
            <span className="text-xl text-orange-400">
              <BsStarFill />
            </span>
            <span className="font-bold">{rate}/10</span>
          </span>
          <span className="mt-1 block">{release}</span>
        </div>
        <div className="bg-red-500 w-24 font-semibold hidden group-hover:block rounded-2xl px-3 py-1 text-sm absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center cursor-pointer readmore">
          Play Now
        </div>
      </Link>
    </>
  );
}

export default MovieCard;
