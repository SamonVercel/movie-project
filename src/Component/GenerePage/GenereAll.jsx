import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";
import MovieCard from "../Card/MovieCard";
import { Link } from "react-router-dom";

const GenereAll = () => {
  const [allmovie, setAllmovie] = useState([]);
  const [scifiFilter, setScifiFilter] = useState();
  const [cartoonFilter, setCartoonFilter] = useState();
  const [romanceFilter, setRomanceFilter] = useState();
  const [actionFilter, setActionFilter] = useState();

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
    const scifiFi = allmovie.filter((cartoon) =>
      cartoon.genere.toLowerCase().includes("sci-fi")
    );
    const cartoon = allmovie.filter((cartoon) =>
      cartoon.genere.toLowerCase().includes("cartoon")
    );
    const romance = allmovie.filter((movie) =>
      movie.genere.toLowerCase().includes("romance")
    );
    const action = allmovie.filter((movie) =>
      movie.genere.toLowerCase().includes("action")
    );
    setScifiFilter(scifiFi);
    setCartoonFilter(cartoon);
    setRomanceFilter(romance);
    setActionFilter(action);
  }, [allmovie]);

  const nextRef = useRef(null);
  const preRef = useRef(null);

  return (
    <>
      {/* Sci-Fi  */}
      <div className="flex items-center w-full justify-between mt-10">
        <h1 className="w-32 px-4 border-l-4 text-xl">Shi-fi</h1>
        <Link to={"sci-fi"} className="flex items-center gap-1">
          <span>Show all</span>
          <BsArrowRight />
        </Link>
      </div>
      {/* Romance List */}
      <section className="w-full mt-2">
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            1024: {
              slidesPerView: 6,
            },
            768: {
              slidesPerView: 4,
            },
            391: {
              slidesPerView: 3,
            },
          }}
          style={{ minHeight: "100px" }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper w-full sm:max-h-auto max-h-[280px]"
        >
          {scifiFilter?.slice(0, 10).map((m) => (
            <SwiperSlide
              key={m.id}
              className="rounded-lg md:max-h-[290px]  border"
            >
              <MovieCard
                id={m.id}
                img={m.img}
                name={m.name}
                rate={m.rate}
                release={m.release}
              />
            </SwiperSlide>
          ))}
          <SwiperSlide className="min-h-full">
            <div className="flex h-[290px] items-center justify-center">
              <Link to="sci-fi" className="flex items-center">
                <span>Show more</span>
                <BsArrowRight />
              </Link>
            </div>
          </SwiperSlide>
          <div
            ref={preRef}
            className="swiper-button-prev cursor-pointer"
            style={{ color: "white", fontSize: "16px" }}
          ></div>
          <div
            ref={nextRef}
            className="swiper-button-next cursor-pointer"
            style={{ color: "white", fontSize: "16px" }}
          ></div>
        </Swiper>
      </section>

      {/* Cartoon  */}
      <div className="flex items-center w-full justify-between md:mt-20 mt-8">
        <h1 className="w-32 px-4 border-l-4 text-xl">Cartoon</h1>
        <Link to={"cartoon"} className="flex items-center gap-1">
          <span>Show all</span>
          <BsArrowRight />
        </Link>
      </div>
      {/* Cartoon List */}
      <section className="w-full mt-2">
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            1024: {
              slidesPerView: 6,
            },
            768: {
              slidesPerView: 4,
            },
            391: {
              slidesPerView: 3,
            },
          }}
          style={{ minHeight: "100px" }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper w-full sm:max-h-auto max-h-[280px]"
        >
          {cartoonFilter?.slice(0, 10).map((m) => (
            <SwiperSlide
              key={m.id}
              className="rounded-lg overflow-hidden max-h-[290px]"
            >
              <MovieCard
                id={m.id}
                img={m.img}
                name={m.name}
                rate={m.rate}
                release={m.release}
              />
            </SwiperSlide>
          ))}
          <SwiperSlide className="min-h-full">
            <div className="flex h-[290px] items-center justify-center">
              <Link to="cartoon" className="flex items-center">
                <span>Show more</span>
                <BsArrowRight />
              </Link>
            </div>
          </SwiperSlide>
          <div ref={preRef} className="swiper-button-prev cursor-pointer"></div>
          <div
            ref={nextRef}
            className="swiper-button-next cursor-pointer"
          ></div>
        </Swiper>
      </section>

      {/* Romance  */}
      <div className="flex items-center w-full justify-between md:mt-20 mt-8">
        <h1 className="w-32 px-4 border-l-4 text-xl">Romance</h1>
        <Link to={"romance"} className="flex items-center gap-1">
          <span>Show all</span>
          <BsArrowRight />
        </Link>
      </div>
      {/* Romance List */}
      <section className="w-full mt-2">
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            1024: {
              slidesPerView: 6,
            },
            768: {
              slidesPerView: 4,
            },
            391: {
              slidesPerView: 3,
            },
          }}
          style={{ minHeight: "100px" }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper w-full sm:max-h-auto max-h-[280px]"
        >
          {romanceFilter?.slice(0, 10).map((m) => (
            <SwiperSlide
              key={m.id}
              className="rounded-lg overflow-hidden max-h-[290px]"
            >
              <MovieCard
                id={m.id}
                img={m.img}
                name={m.name}
                rate={m.rate}
                release={m.release}
              />
            </SwiperSlide>
          ))}
          <SwiperSlide className="min-h-full">
            <div className="flex h-[290px] items-center justify-center">
              <Link to="romance" className="flex items-center">
                <span>Show more</span>
                <BsArrowRight />
              </Link>
            </div>
          </SwiperSlide>
          <div ref={preRef} className="swiper-button-prev cursor-pointer"></div>
          <div
            ref={nextRef}
            className="swiper-button-next cursor-pointer"
          ></div>
        </Swiper>
      </section>

      {/* ACtion  */}
      <div className="flex items-center w-full justify-between md:mt-20 mt-8">
        <h1 className="w-32 px-4 border-l-4 text-xl">Action</h1>
        <Link to={"sci-fi"} className="flex items-center gap-1">
          <span>Show all</span>
          <BsArrowRight />
        </Link>
      </div>
      {/* ACtion List */}
      <section className="w-full mt-2">
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            1024: {
              slidesPerView: 6,
            },
            768: {
              slidesPerView: 4,
            },
            391: {
              slidesPerView: 3,
            },
          }}
          style={{ minHeight: "100px" }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper w-full sm:max-h-auto max-h-[280px]"
        >
          {actionFilter?.slice(0, 10).map((m) => (
            <SwiperSlide
              key={m.id}
              className="rounded-lg overflow-hidden max-h-[290px]"
            >
              <MovieCard
                id={m.id}
                img={m.img}
                name={m.name}
                rate={m.rate}
                release={m.release}
              />
            </SwiperSlide>
          ))}
          <SwiperSlide className="min-h-full">
            <div className="flex h-[290px] items-center justify-center">
              <Link to="sci-fi" className="flex items-center">
                <span>Show more</span>
                <BsArrowRight />
              </Link>
            </div>
          </SwiperSlide>
          <div ref={preRef} className="swiper-button-prev cursor-pointer"></div>
          <div
            ref={nextRef}
            className="swiper-button-next cursor-pointer"
          ></div>
        </Swiper>
      </section>
    </>
  );
};

export default GenereAll;
