'use client'
import React, { useEffect, useState } from "react";
type savedProps = {
  searched: {
    short: string;
    original: string
  }[]
}


export default function Saved({ searched }: savedProps) {
  const [copied, setCopied] = useState("")
  useEffect(() => {
  }, [searched])
  const handleClick = (link:string) => {
    navigator.clipboard.writeText(link);
    setCopied(link)

  }
  

  return (
    <section className="mt-8">
      {searched.map(link => {
        
        return (
          <article key={link.short} className="flex justify-between md:flex-row flex-col items-center w-full py-2 px-8 bg-white my-2 rounded-lg">
            <section className="md:w-1/2 overflow-hidden text-ellipsis h-6 hover:overflow-visible w-full" style={{ wordWrap: "break-word", whiteSpace: "pre" }}>{link.original}</section>
            <span className="flex md:flex-row flex-col w-full md:w-auto"><a href={link.short} target="_blank" className="text-lg text-teal-400 hover:text-teal-200 my-4 md:my-auto  md:mr-11">{link.short}</a>
              <button className={copied === link.short ?"bg-purple-950 font-bold text-white px-6 py-2 rounded-md md:w-fit" :"bg-teal-400 font-bold text-white px-6 py-2 rounded-md hover:bg-teal-200 md-w-fit"} onClick={()=>handleClick(link.short)}>{copied === link.short ? "Copied!" :"Copy"}</button>
            </span>
          </article>
        )
      })

      }
    </section>
  )
}
