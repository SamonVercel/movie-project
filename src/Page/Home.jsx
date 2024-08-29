import React, { useEffect, useState } from "react";
import Trending, { TrendingRight } from "../Component/Trending/Trending";
import MovieCard from "../Component/Card/MovieCard";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useGlobalContext } from "../Context";
import { BsPlayBtnFill, BsPlayCircle } from "react-icons/bs";

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [lastesmovie, setLastestmovie] = useState([]);
  const [slice, setSlice] = useState(24);
  const [type, setType] = useState("");

  useEffect(() => {
    fetch("https://movieforkhapi.vercel.app")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMovie(data.moviedata);
      })
      .catch((error) =>
        console.error(
          "There has been a problem with your fetch operation:",
          error
        )
      );
  }, [movie]);

  useEffect(() => {
    const sortedArray = movie.sort((a, b) => b.id - a.id);
    setLastestmovie(sortedArray);
    if (type) {
      const newtype = movie.filter((movie) => movie.type === type);
      setLastestmovie(newtype);
    }
    document.title = "Moviesforkh - free movie streaming site online";
  }, [movie]);

  function onAllmovie() {
    setType("");
  }

  function onMovie() {
    setType("movie");
  }

  function onTvshow() {
    setType("tv-show");
  }

  function onShowMore() {
    const newSlice = slice + 6;
    setSlice(newSlice);
    console.log(slice);
  }

  return (
    <div className="max-w-[1570px] m-auto">
      <section className="max-w-[1570px] m-auto flex flex-col md:grid grid-cols-12 gap-4 mt-3 px-2">
        <div className=" col-span-8 ">
          <Trending />
        </div>
        <div className=" col-span-4">
          <TrendingRight />
        </div>
      </section>
      <section className="w-full mt-10 px-3">
        <div className="flex gap-3">
          <h1 className="text-2xl font-semibold" onClick={onAllmovie}>
            Treding
          </h1>
          <button
            type="button"
            className="flex gap-1 items-center bg-slate-500 rounded-md px-2 text-white"
            onClick={onMovie}
          >
            <span>
              <BsPlayCircle />
            </span>
            Movie
          </button>
          <button
            type="button"
            className="flex gap-1 items-center bg-slate-500 rounded-md px-2 text-white"
            onClick={onTvshow}
          >
            <span>
              <BsPlayCircle />
            </span>
            Tv-Show
          </button>
        </div>

        <div className="mt-4 grid md:grid-cols-4 lg:grid-cols-6 grid-cols-2 gap-2">
          {lastesmovie
            .slice(0, slice)
            .map(({ id, name, rate, release, img }) => (
              <div key={id} className=" max-h-[370px]">
                <MovieCard
                  name={name}
                  rate={rate}
                  img={img}
                  release={release}
                />
              </div>
            ))}
        </div>
      </section>
      <div className="flex justify-center w-full">
        <button className="mt-8 flex items-center gap-1" onClick={onShowMore}>
          Show More{" "}
          <span className="">
            <MdKeyboardDoubleArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
