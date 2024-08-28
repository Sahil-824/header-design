import React, { useState } from 'react'
import Background from './components/background/Background';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

const App = () => {

  let heroData=[

    {text1:"Dive into",text2:"what you Love"},
    {text1:"Indulge",text2:"Your Passions"},
    {text1:"Give in to",text2:"your Passions"},

  ]

  const [heroCount , setheroCount] = useState(2);
  const [playStatus , setPlayStatus] = useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero heroCount={heroCount} setheroCount={setheroCount} playStatus={playStatus} setPlayStatus={setPlayStatus} heroData={heroData[heroCount]}/>
    </div>
  )
}

export default App