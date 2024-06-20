import React, { useState } from "react";

const Nav = () => {
  const [navclick,setnavclick]=useState(false);
const clicked=()=>{
  setnavclick(!navclick);
}
  return (
    <>
    <nav className="sm:flex shadow-xl  h-auto max-h-30 items-center  w-screen md:flex md:w-auto relative ">
    <div className="md:ml-[3rem]  ml-2  h-14 ">

      <h1 className=" text-3xl {`font-semibold {`font-popins`} mt-4 md:mt-3.5 `}sm:mt-3.5"><span className="">Chirag</span> <span className="text-gray-500 absolute ml-1.5">Poojary</span> </h1>
</div> 

<div className="">
<div className="md:hidden ">
<button onClick={clicked} className="md:hidden absolute  right-10 mt-1.5 transition-opacity duration-700 ">
  <img
    src="menu.png"
    alt="menu" 
    className={`h-7 ${navclick ? 'opacity-0' : 'opacity-100'} transition-opacity duration-700`}
    style={{ marginTop: '-3.5rem', marginLeft: '2.25rem' }} 
  />
  <img
    src="close.png"
    alt="menu"
    className={`h-6 ${navclick ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
    style={{ marginTop: '-1.7rem', marginLeft: '2.25rem' }} 
  />
</button>
</div>
<div className=" relative ease-linear duration-1000 2xl:ml-56 lg:ml-52 md:ml-32 xl:ml-56 sm:ml-32">
      <ul className={`  sm:flex space-x-6 ${navclick ? "block" : "hidden"} transition-max-height 
       overflow-hidden sm:mt-4 md:mt-4 md:-right-44 lg:-ml-15 xl:ml-30 sm:-right-32 2xl:ml-80 `}
      >
  
          
          <li className={`hover:text-slate-400   bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent  hover:transition-all  hover:duration-500
          font-semibold  text-xl mb-1 ${navclick ? 'opacity-100' : 'opacity-0'}transition-opacity duration-700} ml-6 cursor-pointer `}>Home</li>
          <li className={` hover:text-slate-400   hover:transition-all  hover:duration-500 font-semibold  text-xl mb-1 ${navclick ? 'opacity-100' : 'opacity-0'}transition-opacity duration-700 cursor-pointer`}  >About</li>
          <li  className={`hover:text-slate-400  hover:transition-all  hover:duration-500 font-semibold text-xl mb-1 ${navclick ? 'opacity-100' : 'opacity-0'}transition-opacity duration-700 cursor-pointer`}>Projects</li>
          <li  className={`hover:text-slate-400  hover:transition-all  hover:duration-500 font-semibold  text-xl mb-1 ${navclick ? 'opacity-100' : 'opacity-0'}transition-opacity duration-700 cursor-pointer`} >Skills</li>
          <li  className={`hover:text-slate-400  hover:transition-all  hover:duration-500 font-semibold  text-xl mb-1 ${navclick ? 'opacity-100' : 'opacity-0'}transition-opacity duration-700 cursor-pointer`} >Contact</li>
        </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Nav;
 