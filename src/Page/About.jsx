import React from "react";
import img from "../assets/Img/about-image.webp";
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { CgInstagram } from "react-icons/cg";
import { FiInstagram } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";

const About = () => {
  return (
    <>
      <div className="max-w-[1220px] m-auto grid">
        <section className="grid grid-cols-12 gap-8 md:mt-20 mt-10">
          <div className="col-span-7 flex justify-center flex-col">
            <span>ABOUT US</span>
            <p className="mt-2 text-4xl font-medium max-w-[450px]">
              <span className="text-orange-400 font-medium">Moviesforkh</span>,
              launched in 2024, is a free movie streaming site developed by{" "}
              <span className="text-orange-400 font-medium">Samon</span>.
            </p>
            <p className="mt-6">
              The platform offers a vast collection of films across various
              genres, ensuring that movie enthusiasts can easily access and
              enjoy their favorite content without any cost. Designed with user
              experience in mind, Moviesforkh provides a seamless and enjoyable
              viewing experience, making it the go-to destination for free
              online streaming.
            </p>
          </div>
          <div className="col-span-5 flex items-center">
            <img src={img} alt="main-image" />
          </div>
        </section>
        <section className="mt-10">
          <span>CONTACT & FOLLOW US</span>
          <div className="flex gap-2 text-3xl mt-4">
            <span className="hover:text-orange-400 transition">
              <FaFacebook />
            </span>
            <span className="hover:text-orange-400 transition">
              <FaTelegram />
            </span>
            <span className="hover:text-orange-400 transition">
              <FiInstagram />
            </span>
            <span className="w-8 h-8 border-2 rounded-full text-2xl flex justify-center items-center hover:text-orange-400 transition hover:border-orange-400">
              <FaYoutube />
            </span>
          </div>
          <div className="mt-4">
            <span>Email: samonee7777@gmail.com</span>
          </div>
          <div className="mt-3">
            <span>Phone: +85511339845</span>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
