import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {useState } from 'react'

import PlayPause from './PlayPause';
import LikeButton from './LikeButton';

import { playPause, setActiveSong, list } from '../redux/features/playerSlice';

const SongCard = ({ song, isPlaying, activeSong, data, i, isLike, check, is }) => {
  const {favorites} = useSelector((state) => state.player);
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i}));
    dispatch(playPause(true));
  };
 
  const [o, setO] = useState(() => {
    const o = favorites.find((song) => song.key === is);
    return o;
  })

  const handleLikeClick = () => {
   setO((prevState) => !prevState);
    dispatch(list({song, data, i,o}));     
  };

  return (
    <div className="pt-6">
      <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"> 
        <div className="relative w-full h-55 group">
          <div className={`absolute inset-0 justify-center items-center bg-black rounded-lg bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-white bg-opacity-70' : 'hidden'}`}>
          
            <PlayPause 
              isPlaying={isPlaying}
              activeSong={activeSong}
              song={song}
              handlePause={handlePauseClick}
              handlePlay={handlePlayClick}
            />
          </div> 
         
          <div className="absolute top-2.5 right-1.5 cursor-pointer hover:text-pink-800 ">
            <LikeButton 
            activeSong={activeSong}
            song={song}
            i={i}
            handleLike={handleLikeClick}
            check={isLike}
            checkq={check}
            isl={o}
           
            />
         </div>
        <img alt="song_img" src={song.images?.coverart}  className="rounded-lg "/>
        </div>
        <div className="p-3">
          <h2 className="font-bold text-lg truncate">
            <Link>
              {song.title}
            </Link>
          </h2>
          <p className="pt-2 truncate">
            <Link >
            {song.subtitle}
            </Link>
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default SongCard