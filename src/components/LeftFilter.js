import React from "react";
import MovieCard from "./MovieCard";
import MovieDetailCard from "./MovieDetailCard";
import GenreCard from "./GenreCard";
import notification from "../image/Notification 3.png";
import more from "../image/More.png";
import profile from "../image/Profile Picture.png";
import left from "../image/left.png";
import right from "../image/right.png";
import picture from "../image/Picture.png";
import progress from "../image/Progress.png";
import picture1 from "../image/Picture (1).png";
import backpic from "../image/backpic.png";
import backpic2 from "../image/backpic2.png";
import drama from "../image/Drama.png";
import sitcom from "../image/Sitcom.png";
import thriller from "../image/Thriller.png";
import superhero from "../image/Superhero.png";
const IconButton = ({ className, imgSrc, imgAlt, imgClass }) => (
  <button className={className}>
    <img className={imgClass} src={imgSrc} alt={imgAlt} />
  </button>
);
const MovieCardDetails = [
  {
    title: "Supernatural",
    episodes: "320 Ep",
    genre: "Horror, Fantasy",
    backpic: backpic,
  },
  {
    title: "Rick and Morty",
    episodes: "49 Ep",
    genre: "Adventure",
    backpic: backpic2,
  },
  // Add more movie details here...
];
const movies = [
  {
    imgSrc: picture,
    title: "WandaVision",
    episode: "1 Episode left",
    progressSrc: progress,
  },
  {
    imgSrc: picture1,
    title: "WandaVision",
    episode: "1 Episode left",
    progressSrc: progress,
  },
  // Add more movies here...
];
const genres = [
  { name: "Drama", image: drama },
  { name: "Sitcom", image: sitcom },
  { name: "Thriller", image: thriller },
  { name: "Superhero", image: superhero },
];
const LeftFilter = () => {
  return (
    <div className="h-auto w-80 flex-shrink-0 bg-middleblue text-white overflow-hidden ">
      <div className="flex felx-row mt-6 ml-8">
        <IconButton
          className=" inline-flex py-3 px-4 items-start bg-darkgray rounded-2xl "
          imgSrc={notification}
          imgAlt="Notification"
          imgClass="w-4 h-6"
        />
        <div className="flex flex-row w-40 h-12 flex-shrink-0  ml-10 mr-10">
          <h1 className="text-base not-italic font-extrabold my-4">Samantha</h1>
          <IconButton
            className="flex-shrink-0 ml-2 mt-3 mr-6"
            imgSrc={more}
            imgAlt="More"
            imgClass="w-3 h-2"
          />
          <img
            className="w-12 h-12 flex-shrink-0"
            src={profile}
            alt="Profile"
          />
        </div>
      </div>
      <Section title="Continue" movies={movies} />
      <Section title="Top Rated" movieDetails={MovieCardDetails} />
      <Section title="Genres" genres={genres} />
    </div>
  );
};

const Section = ({ title, movies, movieDetails, genres }) => {
  return (
    <>
      <div className="flex flex-row mt-6 ml-8">
        <h1 className="text-lg not-italic font-extrabold  ">{title}</h1>
        <IconButton
          className="flex-shrink-0 ml-5 mt-1"
          imgSrc={left}
          imgAlt=""
          imgClass="w-2 h-3"
        />
        <IconButton
          className="flex-shrink-0 ml-3 mt-1"
          imgSrc={right}
          imgAlt=""
          imgClass="w-2 h-3"
        />
        <label className="text-xs not-italic font-semibold mt-2 ml-20">
          See more
        </label>
        <IconButton
          className=" flex-shrink-0 ml-2 mt-2"
          imgSrc={right}
          imgAlt=""
          imgClass="w-1 h-2"
        />
      </div>
      <div className="flex flex-row mt-4 ml-8 overflow-y-auto scrollbar-hide">
        {movies &&
          movies.map((movie, index) => <MovieCard key={index} {...movie} />)}
        {movieDetails &&
          movieDetails.map((movieDetail, index) => (
            <MovieDetailCard key={index} movieDetail={movieDetail} />
          ))}
        <div className="grid grid-rows-2 grid-flow-col">
          {genres &&
            genres.map((genre, index) => (
              <GenreCard key={index} genre={genre} />
            ))}
        </div>
      </div>
    </>
  );
};
export default LeftFilter;
