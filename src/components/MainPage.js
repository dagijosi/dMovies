import React from "react";
import thecrown from "../image/TheCrown.png";
import left from "../image/left.png";
import right from "../image/right.png";
import add2 from "../image/Add2.png";
import current from "../image/Current.png";
import two from "../image/Two.png";
import three from "../image/Three.png";
import loki from "../image/Loki.png";
import backpic2 from "../image/backpic2.png";
import add from "../image/Add.png";
import star from "../image/Star.png";
import chernobyl from "../image/Chernobyl.png";
import rick from "../image/Rick.png";
import filter from "../image/Filter.png";
import search from "../image/Search....png"
const IconButton = ({ className, imgSrc, imgAlt, imgClass }) => (
  <button className={className}>
    <img className={imgClass} src={imgSrc} alt={imgAlt} />
  </button>
);
const MovieCard = ({ movie }) => (
  <div
    className="flex flex-col bg-darkblue rounded-2xl mt-6 mr-8 w-52 h-64 pt-3"
    style={{ backgroundImage: `url(${movie.image})` }}
  >
    <div className="ml-2">
      <label className="text-base not-italic font-extrabold mt-2 ">
        {movie.title}
      </label>
      <div className="flex flex-row">
        {Array(movie.rating).fill().map((_, i) => (
          <img key={i} className="" src={star} alt="Star" />
        ))}
      </div>
      <div className="flex flex-row justify-between mt-32">
        <label className="text-xs not-italic font-medium ">{movie.episodes} Ep</label>
        <label className="text-xs not-italic font-medium ml-8 mr-2">
          {movie.genre}
        </label>
      </div>
    </div>
    <div className="flex flex-row mt-3">
      <button className="flex w-12 h-10 items-start px-2 py-1 bg-darkgray rounded-lg ml-2 ">
        <img className="" src={add} alt="Add" />
      </button>
      <button className="flex w-32 h-10 items-start flex-shrink-0 text-sm not-italic font-extrabold ml-3 px-10 py-2 bg-lightgreen rounded-lg">
        Watch
      </button>
    </div>
  </div>
);
const movies = [
  { title: 'Loki', image: loki, rating: 5, episodes: 6, genre: 'Superhero' },
  { title: 'Chernobyl', image: chernobyl, rating: 5, episodes: 5, genre: 'Mini Series' },
  { title: 'Rick and Morty', image: rick, rating: 5, episodes: 49, genre: 'Fantasy' },
  // Add more movies here...
];

const MainPage = () => {
  return (
    <div className="bg-darkblue grow text-white">
      <div className="flex flex-row mt-12 ml-14">
        <div>
          <h1 className="w-20 text-lg not-italic font-semibold mr-12">
            Movies
          </h1>
          <div className="w-20 h-1 flex-shrink-0 bg-teal-500 hidden"></div>
        </div>
        <div>
          <h1 className="w-20 text-lg not-italic font-semibold mr-12">
            TV Shows
          </h1>
          <div className="w-20 h-1 flex-shrink-0 bg-teal-500"></div>
        </div>
        <div>
          <h1 className="w-20 text-lg not-italic font-semibold mr-12">Anime</h1>
          <div className="w-20 h-1 flex-shrink-0 bg-teal-500 hidden"></div>
        </div>
        <div className="flex flex-row mr-12 ml-32 ">
          <IconButton className="w-10 h-12 px-3 py-1 flex-shrink-0 bg-middleblue rounded-l-lg"
          imgSrc={search}
          imgAlt="Search"
          imgClass="w-6 h-4 "/>
          <input className="h-12 bg-middleblue" type="search" placeholder="Search" />
          <IconButton className="w-10 h-12 px-3 py-1 flex-shrink-0 bg-middleblue rounded-r-lg"
            imgSrc={filter}
            imgAlt="Filter"
            imgClass="w-6 h-4 "/>
        </div>
      </div>
      <div
        className="flex-shrink-0 mt-10 mx-16 rounded-xl pt-3 pb-3"
        style={{ backgroundImage: `url(${thecrown})` }}
      >
        <h1 className="text-3xl not-italic font-extrabold ml-10">The Crown</h1>
        <div className="flex flex-row justify-between mt-12">
          <IconButton
            className="w-8 h-8 px-3 py-1 flex-shrink-0 bg-gray-500 ml-5 mt-4 rounded-lg "
            imgSrc={left}
            imgAlt=""
            imgClass="w-2 h-3"
          />

          <IconButton
            className="w-8 h-8 px-3 py-1 flex-shrink-0 bg-gray-500 mr-5 mt-4 rounded-lg"
            imgSrc={right}
            imgAlt=""
            imgClass="w-2 h-3 "
          />
        </div>
        <div className="flex flex-row justify-between mt-12 ">
          <button className="py-5 px-6 h-8 flex-shrink-0 bg-gray-500 ml-5 mt-4 rounded-lg flex items-center justify-center">
            <IconButton
              className="flex-shrink-0 "
              imgSrc={add2}
              imgAlt="Add to watchlist button"
              imgClass="w-3 h-3"
            />
            <p className="ml-2">Watchlist</p>
          </button>
          <div className="flex flex-row bg-gray-500 py-1 px-1 h-fit mt-7 mx-5">
            <img className="w-2 h-2 mr-1" src={current} alt="Current" />
            <img className="w-2 h-2 mr-1" src={two} alt="Two" />
            <img className="w-2 h-2 mr-1" src={three} alt="Three" />
          </div>
          <button className="py-2 px-6 flex-shrink-0 bg-lightgreen mr-5 mt-4 rounded-lg ">
            Watch Now
          </button>
        </div>
      </div>
      <div className="ml-12">
      <h1 className="text-3xl not-italic font-extrabold mt-12">
        Popular on TinyMoviez
      </h1>
      <div className="grid grid-cols-3 mt-4">
    {movies.map((movie, i) => (
      <MovieCard key={i} movie={movie} />
    ))}
  </div>
      </div>
    </div>
  );
};

export default MainPage;
