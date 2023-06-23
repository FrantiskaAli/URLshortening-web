'use client'
import {useState, useEffect,useRef} from 'react'
import Navigation from "./components/nav";
import Jumbo from "./components/jumbo";
import Search from "./components/search";
import Stats from "./components/stats";
import Prompt from "./components/prompt";
import Footer from "./components/footer";


export default function Home() {

 const [windowWidth, setWindowSize] =  useState(1000);
    
      useEffect(() => {
       
        const handleWindowResize = () => {
        setWindowSize( window.innerWidth) 
        };
    
         window.addEventListener('resize', handleWindowResize) 
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);




  return (
    <main className="flex flex-col w-screen bg-gray-100">
      <Navigation windowWidth={windowWidth}/>
      <Jumbo />
      <Search windowWidth={windowWidth} />
      <Stats />
      <Prompt windowWidth={windowWidth} />
      <Footer/>
    </main>


  )
}
