import React, { useRef, useState, useEffect } from "react";
import MovieCard from "../Card/MovieCard";
import { FiLoader } from "react-icons/fi";

const GenereCartoon = () => {
  const [allmovie, setAllmovie] = useState([]);
  const [sizex, setSizex] = useState(300);
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    setInterval(() => {
      const wx = window.innerWidth;
      if (wx > 768) {
        setSizex(370);
      } else {
        setSizex(340);
      }
    }, 200);
  }, []);

  useEffect(() => {
    fetch("https://movieforkhapi.vercel.app")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setAllmovie(data.moviedata);
        setIsloading(true);
      })
      .catch((error) =>
        console.error(
          "There has been a problem with your fetch operation:",
          error
        )
      );
  }, [allmovie]);

  const cartoonFilter = allmovie.filter((movie) =>
    movie.genere.toLowerCase().includes("cartoon")
  );

  if (!isloading) {
    return (
      <div className="min-h-[90vh] text-4xl flex items-center justify-center">
        <span className="w-26 h-26 flex items-center justify-center animate-spin">
          <FiLoader />
        </span>
      </div>
    );
  }

  return (
    <>
      <section className="">
        <h1 className="text-xl px-4 border-l-4">Cartoon</h1>
        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-3 mt-4">
          {cartoonFilter?.slice(0, 12).map((m) => (
            <div key={m.id} className="rounded-lg">
              <MovieCard
                hight={sizex}
                id={m.id}
                img={m.img}
                name={m.name}
                rate={m.rate}
                release={m.release}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default GenereCartoon;
