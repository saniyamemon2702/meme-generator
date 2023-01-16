import React from 'react';
import '../index.css';
// import Trollface from "trollface.png";

export default function Header(){
return(
    <header className='header px-4 py-1 h-20 flex items-center bg-gradient-to-br from-purple-900 to-purple-600'>
        <img className='h-full mr-8' src="/images/trollface.png" alt="Troll face"/>
        <h4 className='header-title text-white text-3xl'> Meme Generator</h4>
    </header>
)
}