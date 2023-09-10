import React from 'react';
import { Error, Loader, TopPlay } from '../components';
import { useDispatch, useSelector } from 'react-redux';

import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const Trending = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error  } = useGetTopChartsQuery();
  
  if(isFetching) return <Loader title="Loading songs.." />
  if(error) return <Error />;

  return (
    <div className="w-full p-16">
      <h2 className="text-2xl font-bold">Trending</h2>
    
     <div className="mt-4 flex flex-col gap-1">
          {data?.tracks.slice(0, 5).map((song, i) => (
            <TopPlay
              key={song.key}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
            />
          ))}
      </div>
    </div>

  )
}


export default Trending