import React, { useState, useEffect } from "react";
import MovieCard from "../Card/MovieCard";
import moviedata from "../../assets/data";

const GenereRomance = () => {
  const [allmovie, setAllmovie] = useState([]);
  const [sizex, setSizex] = useState(300);
  let interval;

  useEffect(() => {
    interval = setInterval(() => {
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
      .then((data) => setAllmovie(data.moviedata))
      .catch((error) =>
        console.error(
          "There has been a problem with your fetch operation:",
          error
        )
      );
  }, [allmovie]);

  const romanceFilter = allmovie.filter((movie) =>
    movie.genere.toLowerCase().includes("romance")
  );

  return (
    <>
      <section className="">
        <h1 className="text-xl px-4 border-l-4">Romance</h1>
        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-3 mt-4">
          {romanceFilter?.slice(0, 12).map((m) => (
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

export default GenereRomance;
