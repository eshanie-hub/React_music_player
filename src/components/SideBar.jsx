import React, { useState } from 'react';
import { logo } from '../assets';
import { NavLink } from 'react-router-dom';

import { HiOutlineMenu } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';


const links = [
  { name: 'Home', to:'/' },
  { name: 'Favorite', to:'/Favourite'},
  { name: 'Trending', to: 'Trending'},
];

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink 
       key={item.name}
       to={item.to}
       className="flex flex-row justify-start items-center my-8 text-m font-medium hover:text-purple-400"
       onClick={() => handleClick && handleClick()}
      >
        {item.name}
      </NavLink>
    ))}
  </div>
);

const SideBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
   <>
    <div className="relative  text-white bg-[#21201E] h-screen w-[300px] md:flex hidden" >
    <div className="absolute border-r-4 border-purple-700 h-screen  blur pl-60"></div>
      <div className="relative p-10 ">
      <img src={logo} className="w-[90px]"/>
      <NavLinks/>
    </div>
    </div> 
    {/* Mobile sidebar */}
    <div className="absolute md:hidden block top-6 right-3">
      {!mobileMenu ? (
        <HiOutlineMenu className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenu(true)}/>
      ) : (
        <RiCloseLine className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenu(false)}/>
      )}
    </div>
    <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenu ? 'left-0' : '-left-full'}`}>
        <NavLinks handleClick={() => setMobileMenu(false)} />
      </div>
    </>

  )
}

export default SideBar