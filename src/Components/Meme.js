import React from 'react';
// import "../index.css";
import memesData from '../memesData';
export default function Meme(){

    const [memeImage, setMemeImage]=React.useState("");



function getMemesImage(){
    const memesArray=memesData.data.memes;
    const randomImage= memesArray[Math.floor(Math.random()*memesArray.length)].url;
    console.log(randomImage);
    setMemeImage(randomImage);
    // console.log("I m clicked!");
}


  return(  <main className='p-9'>
        <div className='w-3/4 grid grid-cols-2 grid-rows-2 gap-4 mx-auto'>
            <input type="text" placeholder='Top Text' className='rounded-md border-2 border-gray-300 indent-1.5'>
            </input>
            <input type="text" placeholder='Bottom Text' className='rounded-md border-2  border-gray-300 indent-1.5'>
            </input>
            <button className=' text-white p-4 col-span-2 rounded-md cursor-pointer bg-gradient-to-br from-purple-900 to-purple-600 ' onClick={getMemesImage}>Get a new meme image&#127751;</button>
        </div>
        <div className='h-1/5'>
        <img src={memeImage} alt="generated meme" className=' rounded-md mx-auto mt-8 h-96 '></img>
        </div>
            
        
    </main>);
}