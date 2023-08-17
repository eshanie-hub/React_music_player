import React from 'react';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const TrendCard = ({ song, i, isPlaying, activeSong, data}) => {
   const dispatch = useDispatch();

   const handlePauseClick = () => {
     dispatch(playPause(false));
   };


   const handlePlayClick = () => {
     dispatch(setActiveSong({ song, data, i}));
     dispatch(playPause(true));
   };
   return (

    <div className={`relative w-full  flex flex-row items-center hover:bg-white/5 bg-opacity-80 backdrop-blur-sm ${activeSong?.title === song.title ? 'bg-white/5' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
        <h3 className="font-bold text-base text-white mr-5">{i + 1}</h3>
        <div className=" flex flex-row justify-between items-center">
          <img src={song?.images?.coverart} className="w-20 h-20 rounded-lg" alt={song?.title} />
            <div className=" flex-1 flex flex-col text-left mx-3 group" />
            <p className="text-xl font-bold text-white truncate">
              {song?.title}
            </p>
            <p className="text-base text-gray-300 mt-1 px-5">
              {song?.subtitle}
            </p>
      <div className="absolute right-0 pr-5">
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
      />
      </div>
      </div>
    </div>

     

  );
}

export default TrendCard