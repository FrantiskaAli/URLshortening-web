import Saved from './saved'



export default function Search() {
    return (
      <section className='self-center md:w-4/5 md:-mt-32 '>
            <article style={{backgroundImage: "url('bg-shorten-desktop.svg')", backgroundRepeat: "no-repeat",backgroundSize:"cover"}} className='md:py-16 bg-purple-950 self-center flex justify-between rounded-xl md:mt-10 md:px-20'>
                <input className="h-10 w-4/5 self-center rounded-lg p-6" type="text" placeholder='Shorten a link here...'/>
                <button className="bg-teal-400 font-bold text-white h-12 px-8 self-center rounded-lg hover:bg-teal-200">Shorten It!</button>
            </article>
      <Saved />
      </section>
    )
  }
  