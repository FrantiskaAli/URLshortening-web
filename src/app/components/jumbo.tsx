import Image from "next/image"



export default function Jumbo() {
    return (
        <header className="w-screen flex flex-col md:items-center md:flex-col lg:flex-row-reverse Poppins overflow-x-hidden bg-white md:pb-32 pb-20">
            <Image src="illustration-working.svg" height={482} width={733} alt="illustration working" className=" lg:-mr-40"/>
            <section className="md:px-32 md:pt-20 text-center lg:text-left">
                <h1 className="text-black md:font-extrabold md:text-6xl text-4xl font-bold">More than just shorter links</h1>
                <p className="text-gray-500 md:w-full lg:w-4/5 mt-4 md:mb-12" >  Build your brand’s recognition and get detailed insights
                    on how your links are performing.</p>
                <button className="bg-teal-400 font-bold mt-8 md:mt-0 text-white px-8 py-2 rounded-3xl hover:opacity-50"> Get Started</button>
            </section>
        </header>
    )
}
