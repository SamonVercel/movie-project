import React, { useRef, useState, useEffect } from "react";
import MovieCard from "../Card/MovieCard";

const GenereCartoon = () => {
  const [allmovie, setAllmovie] = useState([]);

  useEffect(() => {
    fetch("https://movieforkhapi.vercel.app")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setAllmovie(data.moviedata))
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

  return (
    <>
      <section className="">
        <h1 className="text-xl px-4 border-l-4">Cartoon</h1>
        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-3 mt-4">
          {cartoonFilter?.slice(0, 12).map((m) => (
            <div
              key={m.id}
              className="rounded-lg overflow-hidden max-h-[370px]"
            >
              <MovieCard
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
