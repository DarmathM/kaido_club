import videoBg from "./assets/night-ride.mp4";

function Hero() {
    return (
        <section className="hero-section flex flex-row items-center px-10 py-22.5 min-h-dvh relative w-full overflow-hidden" id="home">
            <div className="absolute inset-0 z-[-5] bg-black opacity-50"></div>
            
            <video muted autoPlay loop preload="metadata" className="absolute  object-cover size-full inset-0 -z-10 pointer-events-none">
                <source src={videoBg} type="video/mp4" />
            </video>
            
            <div className="flex flex-col gap-8 mt-8">
                <div className="bg-(--primary) flex uppercase px-5 py-1 self-start tracking-[5px] font-bold border-l-4 border-(--primary-light) text-[0.7rem]">Tokyo's Premier JDM Experience</div>
                <h1 className="flex flex-col gap-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-orbitron tracking-tighter uppercase">
                    <span className="block text-5xl md:text-7xl">Tokyo </span>
                    <span className="block text-5xl md:text-7xl lg:text-8xl">UnderGround </span>
                    <span className="block text-5xl md:text-7xl">Experience</span>
                </h1>
                <div className="pl-6 border-l-4 border-(--primary)">
                    <p className="text-(--muted) max-w-md mx-auto lg:mx-0 text-pretty">
                        Immerse yourself in authentic Tokyo car culture. Private tours in legendary JDM machines through neon-lit streets.
                    </p>
                </div>
                <button className="primary-btn self-start px-20 py-2">Book Your Ride</button>
            </div>
        </section>
    );
}

export default Hero;
