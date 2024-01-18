import add from "../image/Add.png";

const MovieDetailCard = ({ movieDetail }) => (
  <div
    className="flex flex-col bg-darkblue rounded-2xl mr-8 w-52"
    style={{ backgroundImage: `url(${movieDetail.backpic})` }}
  >
    <div className="ml-2">
      <label className="text-base not-italic font-extrabold mt-2 ">
        {movieDetail.title}
      </label>
      <div className="flex flex-row justify-between">
        <label className="text-xs not-italic font-medium mt-5">
          {movieDetail.episodes}
        </label>
        <label className="text-xs not-italic font-medium mt-5 ml-12">
          {movieDetail.genre}
        </label>
      </div>
    </div>
    <div className="flex flex-row m-2">
      <button className="flex w-12 h-10 items-start px-2 py-1 bg-darkgray rounded-lg ">
        <img className="" src={add} alt="Add" />
      </button>
      <button className="flex w-32 h-10 items-start flex-shrink-0 text-sm not-italic font-extrabold ml-2 px-10 py-2 bg-lightgreen rounded-lg">
        Watch
      </button>
    </div>
  </div>
);
export default MovieDetailCard