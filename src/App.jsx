import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { SideBar, Menu , MusicPlayer } from './components';
import{ Home, Favourite, Trending } from './pages'

const App = () => {
  const { activeSong } = useSelector((state) => state.player);
  return (

    <div className="flex bg-[#21201E]">
    <SideBar />
    <div className="w-full h-full bg-[#21201E] ">
    <div className="h-[calc(100vh-99px)] overflow-y-scroll">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Favourite" element={<Favourite />} />
        <Route path="/Trending" element={<Trending />} />


      </Routes>
      </div>
      </div>
      {activeSong?.title && (
      <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slidup bg-gradient-to-br from-white/10 to-[#4b288d] backdrop-blur-lg rounded-t-3xl z-10">
        <MusicPlayer />
      </div>
     )}

     </div>

);
} 

export default App