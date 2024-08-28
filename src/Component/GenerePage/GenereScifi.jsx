import React, { useRef, useState, useEffect } from "react";
import MovieCard from "../Card/MovieCard";

const GenereScifi = () => {
  const [allmovie, setAllmovie] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/moviedata")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setAllmovie(data))
      .catch((error) =>
        console.error(
          "There has been a problem with your fetch operation:",
          error
        )
      );
  }, [allmovie]);

  const scifiFilter = allmovie.filter((movie) =>
    movie.genere.toLowerCase().includes("sci-fi")
  );

  return (
    <>
      <section className="">
        <h1 className="text-xl px-4 border-l-4">Sci-fi</h1>
        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-3 mt-4">
          {scifiFilter?.slice(0, 10).map((m) => (
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

export default GenereScifi;
