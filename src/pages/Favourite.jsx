import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';

import { useGetTopChartsQuery } from '../redux/services/shazamCore';


const Favourite = () => {
  const dispatch = useDispatch();
  const {isPlaying,activeSong, favorites, } = useSelector((state) => state.player);
  const { data, isFetching, error  } = useGetTopChartsQuery();
  
  if(isFetching) return <Loader title="Loading songs.." />
  if(error) return <Error />;

  // const checkedState = favList.map((i) => i = true)
  // console.log(checkedState)

  return (
    <div className="w-full p-16">
      <h2 className="text-2xl font-bold">Favourite</h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
      {favorites?.map((song,) => (
        <SongCard 
          key={song.key}
          song={song}
          isPlaying={isPlaying}
          activeSong={activeSong}
          data = {data} 
          // check={check}
        />
      ))}
      </div>
      </div>
  )
}

export default Favourite