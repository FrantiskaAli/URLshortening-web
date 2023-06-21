'use client'
import Saved from './saved';
import React, { useState } from 'react';

type SearchedLinks = {
  short: string;
  original: string
}[]

export default function Search() {

  const [inputValue, setInputValue] = useState("");
  const [searched, setSearched] = useState<SearchedLinks>([]) //this will save searched values
  const [empty, setEmpty] = useState(false)

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
    } catch (error) { console.error('Error:', error); alert("I am sorry, you need to enter valid link") }
  }


  return (
    <section className='self-center w-11/12 md:w-4/5 md:-mt-32 -mt-16'>
      <article style={{ backgroundImage: "url('bg-shorten-desktop.svg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className='md:py-16 md:h-48 bg-purple-950 self-center flex flex-col items-center py-8 px-4 md:flex-row md:justify-between rounded-xl md:mt-10 md:px-20'>
        <section className='flex flex-col md:w-4/5 w-full relative mb-10 self-center'>
          <input name="link" className={empty ? "h-10 rounded-md md:rounded-lg p-6 w-full focus:outline-none ring-2 ring-red-500" : "h-10 w-full rounded-md md:rounded-lg  p-6 focus:outline-none focus:border-none focus:ring-2 focus:ring-purple-700"} onClick={() => handleInput()} value={inputValue} onChange={handleChange} type="text" placeholder='Shorten a link here...' />
          {empty && <label className="text-red-500 font-bold text-sm mt-12 absolute top-2">Please add a link</label>}
        </section>
        <button onClick={() => handleClick()} className="bg-teal-400 font-bold text-white h-12 px-12 self-center rounded-lg hover:bg-teal-200 w-full md:w-fit">Shorten It!</button>
      </article>
      <Saved searched={searched} />
    </section>
  )
}
