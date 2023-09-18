import React from 'react';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';

import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const Home = () => {
  const { activeSong, isPlaying, favorites } = useSelector((state) => state.player);
  const { data, isFetching, error  } = useGetTopChartsQuery();
  
  if(isFetching) return <Loader title="Loading songs.." />
  if(error) return <Error />;
  
  
  let checkedState = favorites.map((song) => song.key)

  return (
    <div className="w-full p-16">
      <h2 className="text-2xl font-bold">Home</h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8 ">
      {data?.tracks.map((song, i) => (
        <SongCard 
          key={song.key}
          song={song}
          isPlaying={isPlaying}
          activeSong={activeSong}
          data = {data} 
          i={i}
          favorites={favorites}
          homeFav={checkedState[i]}
        />
      ))}
      </div>
    </div>
  )
}

export default Home