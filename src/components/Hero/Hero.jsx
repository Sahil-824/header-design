import React, { useEffect } from 'react'
import arrow_btn from "../../assets/arrow_btn.png";
import pause from "../../assets/pause_icon.png";
import play from "../../assets/play_icon.png"
import "./Hero.css"
const Hero = ({heroCount,playStatus,setPlayStatus,heroData,setheroCount}) => {

useEffect(() => {
  const interval= setInterval(() => {
    if(heroCount==0){
      setheroCount(1);
    }
    else if(heroCount==1){
      setheroCount(2);
    }

    else {
      setheroCount(0);
    }
   }, 3000);

   return ()=>{

     clearInterval(interval);
   }
}


, [heroCount])

   return(
   <> {playStatus==false?
      <div className='hero'>
   
     <div className="text">
      <p>{heroData.text1}</p>
      <p>{heroData.text2}</p>
     </div>
      
      <div className="explore">
        <div className="explore-more">
           <p>click to explore</p>
        </div>

        <img onClick={()=>setheroCount((heroCount)=>heroCount===2?0:heroCount+1)} src={arrow_btn} alt="" />
      </div>

      <ul className="dots">
        <li onClick={()=>{setheroCount(0)}} className={heroCount===0?"orange-dot":"doti"}></li>
        <li onClick={()=>{setheroCount(1)}} className={heroCount===1?"orange-dot":"doti"}></li>
        <li onClick={()=>{setheroCount(2)}} className={heroCount===2?"orange-dot":"doti"}></li>
      </ul>
            <div className='playpause'>
            <p>play the video</p>
            <img onClick={()=>setPlayStatus((playStatus)=>!playStatus)} src={play} alt="" />
          </div>
          </div>  :
          <div className='playpause'>
            <p>pause the video</p>
            <img onClick={()=>setPlayStatus((playStatus)=>!playStatus)} src={play} alt="" />
          </div> 
          
        } </>)
}

export default Hero