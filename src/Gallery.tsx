import skyline from "./assets/skyline.jpg";
import r33 from "./assets/r33.jpg";
import r35 from "./assets/r35.jpg";
import rasso from "./assets/rasso.jpg";
import car2 from "./assets/r34.jpg";
import supra from "./assets/supra-mk4.jpg";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";


export function Gallery() {

    const galleryContainer = useRef<HTMLDivElement | null>(null);
    const sectionRef = useRef<HTMLElement | null>(null);

    
    useLayoutEffect(() => {
        const section = sectionRef.current;
        const gallery = galleryContainer.current;
       


        if (!section || !gallery) return;

        const ctx = gsap.context(() => {
            
            gsap.set(gallery.children, {opacity: 0, y:100})
            


            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: gallery,
                    start: "top 110%",
                    end: "bottom 100%",
                    scrub: 0.7,
                },
            });

            const changeBg = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 60%",
                    end: "top 1%",
                    scrub: 0.7,
                },
            });

            changeBg.to(section, {background:"#010205", duration: 10, ease:"power1.inOut"});

            timeline

                .to(gallery.children, { opacity: 1, y: 0, stagger: 2, duration: 5, ease: "power3.inOut" }, 0.90);
                
        }, gallery);

        

        return () => ctx.revert();
    }, []);

    return (
        <section className="flex flex-col gap-20 sm:px-20 lg:px-24 pt-20 min-h-dvh" ref={sectionRef} id="gallery">
            <div className=" border border-(--primary) w-[50%] opacity-50 self-center"></div>
            <h2 className="text-3xl flex items-center gap-4" >Tokyo Midnight Archive <div className="w-20 border-(--primary) border"></div></h2>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 grid-rows-[repeat(3,_650px)] gap-8" ref={galleryContainer}>

                {/* BIG CARD */}
                <div className="group relative rounded-3xl overflow-hidden">

                    <img src={skyline} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 bg-[linear-gradient(to_top,_rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.8)_8.1%,rgba(0,0,0,0.8)_15.5%,rgba(0,0,0,0.8)_22.5%,rgba(0,0,0,0.78)_29%,rgba(0,0,0,0.73)_35.3%,rgba(0,0,0,0.67)_41.2%,rgba(0,0,0,0.6)_47.1%,rgba(0,0,0,0.52)_52.9%,rgba(0,0,0,0.44)_58.8%,rgba(0,0,0,0.33)_64.7%,rgba(0,0,0,0.22)_71%,rgba(0,0,0,0.12)_77.5%,rgba(0,0,0,0.05)_84.5%,rgba(0,0,0,0.01)_91.9%,rgba(0,0,0,0)_100%)]"></div>

                    <div className="absolute top-0 left-0 w-full h-40 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 bg-[linear-gradient(rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.8)_8.1%,rgba(0,0,0,0.8)_15.5%,rgba(0,0,0,0.8)_22.5%,rgba(0,0,0,0.78)_29%,rgba(0,0,0,0.73)_35.3%,rgba(0,0,0,0.67)_41.2%,rgba(0,0,0,0.6)_47.1%,rgba(0,0,0,0.52)_52.9%,rgba(0,0,0,0.44)_58.8%,rgba(0,0,0,0.33)_64.7%,rgba(0,0,0,0.22)_71%,rgba(0,0,0,0.12)_77.5%,rgba(0,0,0,0.05)_84.5%,rgba(0,0,0,0.01)_91.9%,rgba(0,0,0,0)_100%)]"></div>

                    <div className="absolute bottom-6 left-6 z-10 text-white">

                        <span className="bg-red-600 px-2 py-1 text-xs uppercase">
                            Featured
                        </span>

                        <h2 className="text-3xl font-bold mt-3">
                            Midnight Run in Shibuya
                        </h2>

                    </div>

                </div>

                {/* SMALL CARDS */}
                <div className="group h-auto relative rounded-3xl overflow-hidden">
                    <img src={r33} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 bg-[linear-gradient(to_top,_rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.8)_8.1%,rgba(0,0,0,0.8)_15.5%,rgba(0,0,0,0.8)_22.5%,rgba(0,0,0,0.78)_29%,rgba(0,0,0,0.73)_35.3%,rgba(0,0,0,0.67)_41.2%,rgba(0,0,0,0.6)_47.1%,rgba(0,0,0,0.52)_52.9%,rgba(0,0,0,0.44)_58.8%,rgba(0,0,0,0.33)_64.7%,rgba(0,0,0,0.22)_71%,rgba(0,0,0,0.12)_77.5%,rgba(0,0,0,0.05)_84.5%,rgba(0,0,0,0.01)_91.9%,rgba(0,0,0,0)_100%)]"></div>

                    <div className="absolute top-0 left-0 w-full h-40 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 bg-[linear-gradient(rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.8)_8.1%,rgba(0,0,0,0.8)_15.5%,rgba(0,0,0,0.8)_22.5%,rgba(0,0,0,0.78)_29%,rgba(0,0,0,0.73)_35.3%,rgba(0,0,0,0.67)_41.2%,rgba(0,0,0,0.6)_47.1%,rgba(0,0,0,0.52)_52.9%,rgba(0,0,0,0.44)_58.8%,rgba(0,0,0,0.33)_64.7%,rgba(0,0,0,0.22)_71%,rgba(0,0,0,0.12)_77.5%,rgba(0,0,0,0.05)_84.5%,rgba(0,0,0,0.01)_91.9%,rgba(0,0,0,0)_100%)]"></div>
                </div>

                <div className="group relative rounded-3xl overflow-hidden">
                    <img src={r35} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 bg-[linear-gradient(to_top,_rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.8)_8.1%,rgba(0,0,0,0.8)_15.5%,rgba(0,0,0,0.8)_22.5%,rgba(0,0,0,0.78)_29%,rgba(0,0,0,0.73)_35.3%,rgba(0,0,0,0.67)_41.2%,rgba(0,0,0,0.6)_47.1%,rgba(0,0,0,0.52)_52.9%,rgba(0,0,0,0.44)_58.8%,rgba(0,0,0,0.33)_64.7%,rgba(0,0,0,0.22)_71%,rgba(0,0,0,0.12)_77.5%,rgba(0,0,0,0.05)_84.5%,rgba(0,0,0,0.01)_91.9%,rgba(0,0,0,0)_100%)]"></div>

                    <div className="absolute top-0 left-0 w-full h-40 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 bg-[linear-gradient(rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.8)_8.1%,rgba(0,0,0,0.8)_15.5%,rgba(0,0,0,0.8)_22.5%,rgba(0,0,0,0.78)_29%,rgba(0,0,0,0.73)_35.3%,rgba(0,0,0,0.67)_41.2%,rgba(0,0,0,0.6)_47.1%,rgba(0,0,0,0.52)_52.9%,rgba(0,0,0,0.44)_58.8%,rgba(0,0,0,0.33)_64.7%,rgba(0,0,0,0.22)_71%,rgba(0,0,0,0.12)_77.5%,rgba(0,0,0,0.05)_84.5%,rgba(0,0,0,0.01)_91.9%,rgba(0,0,0,0)_100%)]"></div>
                </div>

                <div className="group relative rounded-3xl overflow-hidden">
                    <img src={supra} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 bg-[linear-gradient(to_top,_rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.8)_8.1%,rgba(0,0,0,0.8)_15.5%,rgba(0,0,0,0.8)_22.5%,rgba(0,0,0,0.78)_29%,rgba(0,0,0,0.73)_35.3%,rgba(0,0,0,0.67)_41.2%,rgba(0,0,0,0.6)_47.1%,rgba(0,0,0,0.52)_52.9%,rgba(0,0,0,0.44)_58.8%,rgba(0,0,0,0.33)_64.7%,rgba(0,0,0,0.22)_71%,rgba(0,0,0,0.12)_77.5%,rgba(0,0,0,0.05)_84.5%,rgba(0,0,0,0.01)_91.9%,rgba(0,0,0,0)_100%)]"></div>

                    <div className="absolute top-0 left-0 w-full h-40 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 bg-[linear-gradient(rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.8)_8.1%,rgba(0,0,0,0.8)_15.5%,rgba(0,0,0,0.8)_22.5%,rgba(0,0,0,0.78)_29%,rgba(0,0,0,0.73)_35.3%,rgba(0,0,0,0.67)_41.2%,rgba(0,0,0,0.6)_47.1%,rgba(0,0,0,0.52)_52.9%,rgba(0,0,0,0.44)_58.8%,rgba(0,0,0,0.33)_64.7%,rgba(0,0,0,0.22)_71%,rgba(0,0,0,0.12)_77.5%,rgba(0,0,0,0.05)_84.5%,rgba(0,0,0,0.01)_91.9%,rgba(0,0,0,0)_100%)]"></div>
                </div>

                <div className="group relative rounded-3xl overflow-hidden">
                    <img src={car2} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 bg-[linear-gradient(to_top,_rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.8)_8.1%,rgba(0,0,0,0.8)_15.5%,rgba(0,0,0,0.8)_22.5%,rgba(0,0,0,0.78)_29%,rgba(0,0,0,0.73)_35.3%,rgba(0,0,0,0.67)_41.2%,rgba(0,0,0,0.6)_47.1%,rgba(0,0,0,0.52)_52.9%,rgba(0,0,0,0.44)_58.8%,rgba(0,0,0,0.33)_64.7%,rgba(0,0,0,0.22)_71%,rgba(0,0,0,0.12)_77.5%,rgba(0,0,0,0.05)_84.5%,rgba(0,0,0,0.01)_91.9%,rgba(0,0,0,0)_100%)]"></div>

                    <div className="absolute top-0 left-0 w-full h-40 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 bg-[linear-gradient(rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.8)_8.1%,rgba(0,0,0,0.8)_15.5%,rgba(0,0,0,0.8)_22.5%,rgba(0,0,0,0.78)_29%,rgba(0,0,0,0.73)_35.3%,rgba(0,0,0,0.67)_41.2%,rgba(0,0,0,0.6)_47.1%,rgba(0,0,0,0.52)_52.9%,rgba(0,0,0,0.44)_58.8%,rgba(0,0,0,0.33)_64.7%,rgba(0,0,0,0.22)_71%,rgba(0,0,0,0.12)_77.5%,rgba(0,0,0,0.05)_84.5%,rgba(0,0,0,0.01)_91.9%,rgba(0,0,0,0)_100%)]"></div>
                </div>

                <div className="group relative rounded-3xl overflow-hidden">
                    <img src={rasso} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 bg-[linear-gradient(to_top,_rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.8)_8.1%,rgba(0,0,0,0.8)_15.5%,rgba(0,0,0,0.8)_22.5%,rgba(0,0,0,0.78)_29%,rgba(0,0,0,0.73)_35.3%,rgba(0,0,0,0.67)_41.2%,rgba(0,0,0,0.6)_47.1%,rgba(0,0,0,0.52)_52.9%,rgba(0,0,0,0.44)_58.8%,rgba(0,0,0,0.33)_64.7%,rgba(0,0,0,0.22)_71%,rgba(0,0,0,0.12)_77.5%,rgba(0,0,0,0.05)_84.5%,rgba(0,0,0,0.01)_91.9%,rgba(0,0,0,0)_100%)]"></div>

                    <div className="absolute top-0 left-0 w-full h-40 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 bg-[linear-gradient(rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.8)_8.1%,rgba(0,0,0,0.8)_15.5%,rgba(0,0,0,0.8)_22.5%,rgba(0,0,0,0.78)_29%,rgba(0,0,0,0.73)_35.3%,rgba(0,0,0,0.67)_41.2%,rgba(0,0,0,0.6)_47.1%,rgba(0,0,0,0.52)_52.9%,rgba(0,0,0,0.44)_58.8%,rgba(0,0,0,0.33)_64.7%,rgba(0,0,0,0.22)_71%,rgba(0,0,0,0.12)_77.5%,rgba(0,0,0,0.05)_84.5%,rgba(0,0,0,0.01)_91.9%,rgba(0,0,0,0)_100%)]"></div>
                </div>

            </div>

        </section>
    );
}