import videoBg from "./assets/night-ride.mp4";

function Hero() {
    return (
        <section className="hero-section flex flex-row items-center px-10 py-22.5 min-h-dvh relative w-full overflow-hidden" id="home">
            <div className="absolute -z-5 top-0 left-0 w-full h-75  bg-[linear-gradient(rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.8)_8.1%,rgba(0,0,0,0.8)_15.5%,rgba(0,0,0,0.8)_22.5%,rgba(0,0,0,0.78)_29%,rgba(0,0,0,0.73)_35.3%,rgba(0,0,0,0.67)_41.2%,rgba(0,0,0,0.6)_47.1%,rgba(0,0,0,0.52)_52.9%,rgba(0,0,0,0.44)_58.8%,rgba(0,0,0,0.33)_64.7%,rgba(0,0,0,0.22)_71%,rgba(0,0,0,0.12)_77.5%,rgba(0,0,0,0.05)_84.5%,rgba(0,0,0,0.01)_91.9%,rgba(0,0,0,0)_100%)]"></div>
            <div className="absolute inset-0 z-[-5] bg-black opacity-0 "></div>
            
            <video muted autoPlay loop preload="metadata" className="absolute  object-cover size-full inset-0 -z-10 pointer-events-none">
                <source src={videoBg} type="video/mp4" />
            </video>
            
            <div className="flex flex-col gap-8 mt-8 z-5">
                <div className="flex items-center gap-2  uppercase py-1 self-start tracking-[5px] font-bold text-[0.7rem]"><div className="border-t-2 border-(--primary) w-5"></div>Tokyo's Premier<p className="text-(--primary) text-[0.2rem]">JDM Experience</p></div>
                <h1 className="flex flex-col gap-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-orbitron tracking-tighter uppercase">
                    <span className="block text-5xl md:text-7xl">Tokyo </span>
                    <span className="block text-5xl md:text-7xl lg:text-8xl text-(--primary) font-bold underground">UnderGround </span>
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
