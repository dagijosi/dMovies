import React from 'react';

const GenreCard = ({ genre }) => (
    <div
      className="flex flex-col bg-darkblue rounded-2xl mr-8 mb-4 w-44 h-20"
      style={{ backgroundImage: `url(${genre.image})` }}
    >
      <label className="text-base not-italic font-extrabold mx-14 my-8 ">
        {genre.name}
      </label>
    </div>
  );
  
  export default GenreCard;