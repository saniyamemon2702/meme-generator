import React from 'react';
// import "../index.css";
import memesData from '../memesData';
export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)


    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    

    // setAllMemeImages()
    // console.log("I m clicked!");



  return(  <main className='p-9'>
        <div className='w-3/4 grid grid-cols-2 grid-rows-2 gap-4 mx-auto'>
            <input type="text" placeholder='Top Text' className='rounded-md border-2 border-gray-300 indent-1.5'>
            </input>
            <input type="text" placeholder='Bottom Text' className='rounded-md border-2  border-gray-300 indent-1.5'>
            </input>
            <button className=' text-white p-4 col-span-2 rounded-md cursor-pointer bg-gradient-to-br from-purple-900 to-purple-600 ' onClick={getMemeImage}>Get a new meme image&#127751;</button>
        </div>
        <div className='h-1/5'>
        <img src={meme.randomImage} alt="generated meme" className=' rounded-md mx-auto mt-8 h-96 '></img>
        </div>
            
        
    </main>);
}