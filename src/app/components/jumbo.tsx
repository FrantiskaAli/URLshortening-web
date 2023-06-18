import Image from "next/image"



export default function Jumbo() {
    return (
        <header className="w-screen flex flex-col md:flex-row-reverse overflow-x-hidden bg-white md:pb-36">
            <Image src="illustration-working.svg" height={482} width={733} alt="illustration working" className="-mr-20"/>
            <section className="md:px-32 md:pt-20">
                <h1 className="text-black font-extrabold md:text-6xl ">More than just shorter links</h1>
                <p className="text-gray-500 md:w-4/5 md:mt-4 md:mb-12" >  Build your brand’s recognition and get detailed insights
                    on how your links are performing.</p>
                <button className="bg-teal-400 font-bold text-white px-8 py-2 rounded-3xl hover:opacity-50"> Get Started</button>
            </section>
        </header>
    )
}
