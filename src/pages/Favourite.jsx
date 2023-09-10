import React from 'react'
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';

import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const Favourite = () => {
  const {isPlaying,activeSong, favorites, isLike, favList} = useSelector((state) => state.player);
  const { data, isFetching, error  } = useGetTopChartsQuery();
  
  if(isFetching) return <Loader title="Loading songs.." />
  if(error) return <Error />;

  return (
    <div className="w-full p-16">
      <h2 className="text-2xl font-bold">Favourite</h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
      {favorites?.map((song, i) => (
        <SongCard 
          key={song.key}
          song={song}
          isPlaying={isPlaying}
          activeSong={activeSong}
          data = {data} 
          i={i}
          favList={favList}
          isLike={isLike}
        />
      ))}
      </div>
      </div>
  )
}

export default Favourite