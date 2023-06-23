'use client'
import Saved from './saved';
import React, { useState } from 'react';
type Viewport = {
  windowWidth :number
}

type SearchedLinks = {
  short: string;
  original: string
}[]

export default function Search({windowWidth}: Viewport) {

  const [inputValue, setInputValue] = useState("");
  const [searched, setSearched] = useState<SearchedLinks>([]) //this will save searched values
  const [empty, setEmpty] = useState(false)

  const bgPic = windowWidth > 1000 ? 'bg-shorten-desktop.svg' : 'bg-shorten-mobile.svg';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }
  const handleInput = () => {
    if (inputValue.length < 5) {
      setEmpty(true)
    } else setEmpty(false)
  }

  const handleClick = async () => {
    try {
      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
      const shortened = await response.json();
      const final = await shortened.result.full_short_link;

      setSearched(prev => [...prev, { original: inputValue, short: final }])// setting original link array
      console.log(final)
    } catch (error) { console.error('Error:', error); alert("I am sorry, you need to enter valid link"); setEmpty(true) }
  }


  return (
    <section className='self-center w-11/12 md:w-4/5 h-fit md:-mt-28 -mt-16 mb-20 Poppins'  >
      <article style={{ backgroundImage: "url('bg-shorten-desktop.svg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" } } className=' md:h-auto bg-purple-950 self-center flex flex-col items-center py-8 px-4 md:flex-row md:justify-between rounded-xl md:mt-10 md:px-20'>
        <section className='flex flex-col mb-6 md:mb-0 md:w-4/5 w-full'>
          <input name="link" className={empty ? "rounded-md md:rounded-lg py-2 px-4 mt-4 w-full  focus:outline-none ring-2 ring-red-500" : "w-full rounded-md md:rounded-lg  p-4 focus:outline-none focus:border-none focus:ring-2 focus:ring-purple-700"} onClick={() => handleInput()} value={inputValue} onChange={handleChange} type="text" placeholder='Shorten a link here...' />
          {empty ? <label htmlFor="link" className="text-red-500 font-bold text-sm Poppins ">Please add a link</label> :<label></label>}
        </section>
        <button onClick={() => handleClick()} className="bg-teal-400 Poppins font-bold text-white h-12 px-12 self-center rounded-lg hover:bg-teal-200 w-full md:w-fit">Shorten It!</button>
      </article>
      <Saved searched={searched} />
    </section>
  )
}
