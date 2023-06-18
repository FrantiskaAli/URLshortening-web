import Navigation from "./components/nav";
import Jumbo from "./components/jumbo";
import Search from "./components/search";
import Stats from "./components/stats";
import Prompt from "./components/prompt";
import Footer from "./components/footer";


export default function Home() {
  return (
    <main className="flex flex-col w-screen bg-gray-100">
      <Navigation/>
      <Jumbo/>
      <Search/>
      <Stats />
      <Prompt />
      <Footer/>
    </main>


  )
}
