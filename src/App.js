//import logo from './logo.svg';
import React,{useEffect, useState} from "react";

function App() {
  const[windowwidth,setwindowwidth]=useState(window.innerWidth)
  
  const handleresize=()=>{
    setwindowwidth(window.innerWidth)

  }

  useEffect(()=>{
    window.addEventListener('resize',handleresize)
  },[])
  
  return (
    
   <div>{windowwidth}</div>
  );
}

export default App;
