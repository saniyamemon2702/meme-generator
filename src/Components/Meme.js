import React from 'react';
// import "../index.css";

export default function Meme(){
  return(  <main className='p-9'>
        <form className='w-3/4 grid grid-cols-2 grid-rows-2 gap-4 mx-auto'>
            <input type="text" placeholder='Top Text' className='rounded-md border-2 border-gray-300 indent-1.5'>
            </input>
            <input type="text" placeholder='Bottom Text' className='rounded-md border-2  border-gray-300 indent-1.5'>
            </input>
            <button className=' text-white p-4 col-span-2 rounded-md cursor-pointer bg-gradient-to-br from-purple-900 to-purple-600 '>Get a new meme image&#127751;</button>
        </form>
        
    </main>);
}