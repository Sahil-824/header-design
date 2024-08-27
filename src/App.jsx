import React, { useState } from 'react'
import Background from './components/background/Background';
import Navbar from './components/Navbar/Navbar';

const App = () => {

  let heroData=[

    {text1:"Dive into",text2:"what you"},
    {text1:"Indulge",text2:"Your Passions"},
    {text1:"Give in to",text2:"your Passions"},

  ]

  const [heroCount , setheroCount] = useState(2);
  const [playStatus , setPlayStatus] = useState(true);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
    </div>
  )
}

export default App