import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {useState, useEffect } from 'react'

import PlayPause from './PlayPause';
import LikeButton from './LikeButton';

import { playPause, setActiveSong, add, remove} from '../redux/features/playerSlice';

const SongCard = ({ song, isPlaying, activeSong, data, i, isLike, like }) => {

  const dispatch = useDispatch();
  // const [like, setLike] = useState(false);
  const [checkedState, setCheckedState] = useState(
    new Array(data?.tracks.length).fill(false)
  );
 
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i}));
    dispatch(playPause(true));
  };
 

  const handleLikeClick = (k) => {
    const updatedCheckedState = checkedState.map((item, key) => 
    key === k ? !item : item
    );
    // dispatch(favoriteList({song, data, i, isLike}));
    
    setCheckedState(updatedCheckedState);
   
    const indexFav = updatedCheckedState.indexOf(true);
    if(indexFav !== -1 ){
      dispatch(add({song, data, i, indexFav}));
    

    }else{
      dispatch(remove({song, data, i, indexFav}));
      
    }
    
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
          <div className="absolute top-2.5 right-1.5 cursor-pointer hover:text-pink-800">
            <LikeButton 
            activeSong={activeSong}
            song={song}
            i={i}
            handleLike={handleLikeClick}
            checked={checkedState[i]}
            isLike={isLike}
            like={like}
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