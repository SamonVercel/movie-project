import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../Trending/Trending.css";
import { BiPlayCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";

const Trending = () => {
  const [movie, setMovie] = useState([]);
  const [trend, setTrend] = useState([]);
  const nextRef = useRef(null);
  const preRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3000/moviedata")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setMovie(data))
      .catch((error) =>
        console.error(
          "There has been a problem with your fetch operation:",
          error
        )
      );
    const newtrend = movie.filter((movie) => movie.trending === true);
    setTrend(newtrend);
  }, [movie]);

  return (
    <div>
      <section className="w-full">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            nextEl: nextRef.current,
            prevEl: preRef.current,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper w-full"
        >
          {trend?.map((m) => (
            <SwiperSlide
              key={m.id}
              className="overflow-hidden bg-no-repeat bg-cover bg-top z-10"
              style={{ backgroundImage: `url(${m.cover})` }}
            >
              <div className="min-w-full md:min-h-[550px] min-h-[400px] bg-gredient flex flex-col justify-end p-3">
                <div className="w-full flex gap-5 items-center">
                  <div className="max-w-[170px]">
                    <img src={m.img} alt="" />
                  </div>
                  <div className="flex gap-4 md:flex-row flex-col">
                    <Link
                      to={`/movie/playpage/${m.name}`}
                      className="text-6xl hover:text-orange-400 h-16 w-16 flex justify-center items-center transition-all duration-300"
                    >
                      <BiPlayCircle />
                    </Link>
                    <div>
                      <div className="text-semibold">
                        <h2 className="text-2xl font-bold">{m.name}</h2>
                        <div className="flex gap-4 mt-4">
                          <h3 className="flex gap-1">
                            <span className="text-lg">
                              <BsStarFill />
                            </span>
                            {m.rate}
                            <span>/10</span>
                          </h3>
                          <h3>,</h3>
                          <h3>{m.runtime}</h3>
                        </div>
                        <p className="mt-4">{m.detail}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div ref={preRef} className="swiper-button-prev cursor-pointer"></div>
          <div
            ref={nextRef}
            className="swiper-button-next cursor-pointer"
          ></div>
        </Swiper>
      </section>
    </div>
  );
};

export const TrendingRight = () => {
  const [trend, setTrend] = useState([]);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/moviedata")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setMovie(data))
      .catch((error) =>
        console.error(
          "There has been a problem with your fetch operation:",
          error
        )
      );
    const newtrend = movie.filter((movie) => movie.trending === true);
    setTrend(newtrend);
  }, [movie]);

  return (
    <>
      <section className="w-full flex flex-col gap-4 min-h-full">
        {trend.slice(0, 3).map((tm) => (
          <Link
            to={`/movie/playpage/${tm.name}`}
            key={tm.id}
            className="grid grid-cols-12 gap-4 bg-slate-900"
          >
            <div className="col-span-3 md:max-h-44 max-h-52 overflow-y-hidden">
              <img className="w-full" src={tm.img} alt={tm.name} />
            </div>
            <div className="col-span-8">
              <h2 className="text-lg">{tm.name}</h2>
              <h2 className="flex items-center gap-1">
                <span className="flex items-center gap-1">
                  <BsStarFill />
                  {tm.rate}/10
                </span>
                , <span>{tm.runtime}</span>
              </h2>
              <p className="text-sm mt-2">{tm.detail.slice(0, 105)} ...</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};

export default Trending;
