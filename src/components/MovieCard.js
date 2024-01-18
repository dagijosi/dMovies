const MovieCard = ({ imgSrc, title, episode, progressSrc }) => (
  <div className="flex flex-col bg-darkblue rounded-2xl mr-8 w-56">
    <div className="flex felx-row ">
      <img className="w-12 h-16 flex-shrink-0 m-2" src={imgSrc} alt={title} />
      <div className="flex flex-col mr-2">
        <label className="text-base not-italic font-extrabold mt-2">{title}</label>
        <label className="text-xs not-italic font-medium mt-1">{episode}</label>
        <img className="w-28 h-1 flex-shrink-0 mt-2 " src={progressSrc} alt="Progress" />
      </div>  
    </div>
    <div className="flex flex-row m-2">
      <button className="flex w-12 h-10 items-start p-2 bg-darkgray rounded-lg text-sm not-italic font-extrabold ">Drop</button>
      <button className="flex w-32 h-10 items-start flex-shrink-0 text-sm not-italic font-extrabold ml-2 px-10 py-2 bg-lightgreen rounded-lg">Watch</button>
    </div>
  </div>
);
export default MovieCard
