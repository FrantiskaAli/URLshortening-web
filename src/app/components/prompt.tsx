
type Viewport = {
  windowWidth: number
}
export default function Prompt({windowWidth}: Viewport) {
    return (
     <section style={windowWidth > 1000 ?{backgroundImage: "url(bg-boost-desktop.svg"}:{backgroundImage: "url(bg-boost-mobile.svg"} } className="flex flex-col h-60 bg-purple-950 items-center bg-cover justify-center md:text-left text-center">
        <h4 className="text-4xl font-bold text-white mb-8 ">Boost your links today</h4>
        <button className="bg-teal-400 text-lg font-bold w-fit text-white px-8 py-2 rounded-3xl hover:bg-teal-200">Get Started</button>
        </section>
    )
  }
  