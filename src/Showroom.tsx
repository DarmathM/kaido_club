import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import supraShowroom from "./assets/upscale_toyota.png";
import r34 from "./assets/nissan-r34-upscale.png";

gsap.registerPlugin(ScrollTrigger);


const fleet = [
    {
        id: 1,
        url: supraShowroom,
        name: "Supra mk4",
        price: "40.000",
        engine: "2JZ-GTE",
        config: "gloss black",
        desc: "The 2JZ heart of Tokyo Drift. Twin turbo built, street-ready legend.",
    },
    {
        id: 2,
        url: r34,
        name: "Skyline r34",
        price: "30.000",
        engine: "Skyline r34",
        config: "Brian",
        desc: "RB26 Godzilla Legend",
    }
]

export function Showroom() {
    const [currentCar, setCurrentCar] = useState(0);
    const car = fleet[currentCar];

    function nextCar() {

        setCurrentCar((prev) =>

            prev === fleet.length - 1
                ? 0
                : prev + 1

        );

    }
    function previousCar() {

        setCurrentCar((prev) =>

            prev === 0
                ? fleet.length - 1
                : prev - 1

        );

    }

    const sectionRef = useRef<HTMLElement | null>(null);
    const carRef = useRef<HTMLImageElement | null>(null);
    const copyRef = useRef<HTMLDivElement | null>(null);
    const detailsRef = useRef<HTMLDivElement | null>(null);



    useLayoutEffect(() => {
        const section = sectionRef.current;
        const car = carRef.current;
        const copy = copyRef.current;
        const details = detailsRef.current;


        if (!section || !car || !copy || !details) return;

        const ctx = gsap.context(() => {
            gsap.set([copy.children, details.children], { opacity: 0, y: 48 });
            gsap.set(car, { opacity: 0 });


            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 72%",
                    end: "top 8%",
                    scrub: 0.7,
                },
            });

            timeline

                .to(copy.children, { opacity: 1, y: 0, stagger: 0.5, duration: 0.9, ease: "power3.out" }, 0)
                .to(car, { opacity: 1, duration: 5,ease: "power3.inOut" }, 0.90)
                .to(details.children, { opacity: 1, y: 0, stagger: 1.2, duration: 0.8, ease: "power3.out" }, 0.28);




        }, section);

        return () => ctx.revert();
    }, []);



    return (
        <section className="showroom-section" id="showroom" ref={sectionRef}>
            <div className="absolute z-50 bottom-0 left-0 w-full h-75 bg-[linear-gradient(to_top,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.8)_8.1%,rgba(0,0,0,0.8)_15.5%,rgba(0,0,0,0.8)_22.5%,rgba(0,0,0,0.78)_29%,rgba(0,0,0,0.73)_35.3%,rgba(0,0,0,0.67)_41.2%,rgba(0,0,0,0.6)_47.1%,rgba(0,0,0,0.52)_52.9%,rgba(0,0,0,0.44)_58.8%,rgba(0,0,0,0.33)_64.7%,rgba(0,0,0,0.22)_71%,rgba(0,0,0,0.12)_77.5%,rgba(0,0,0,0.05)_84.5%,rgba(0,0,0,0.01)_91.9%,rgba(0,0,0,0)_100%)]"></div>


            <div onClick={previousCar} className="arrowRight select-none flex justify-center items-center p-2 absolute left-[5%] top-2/4 -translate-y-1/2 rounded-full border-(--primary)/50 backdrop-blur-md border-2 sm:text-2xl lg:text-5xl cursor-pointer z-10 text-(--primary)/50 hover:text-white hover:border-white transition-all duration-200"><span className="material-symbols-outlined">chevron_left</span></div>
            <div onClick={nextCar} className="arrowRight select-none flex justify-center items-center p-2 absolute right-[5%] top-2/4 -translate-y-1/2 rounded-full border-(--primary)/50 backdrop-blur-md border-2 sm:text-2xl lg:text-5xl cursor-pointer z-10 text-(--primary)/50 hover:text-white hover:border-white transition-all duration-200"><span className="material-symbols-outlined">chevron_right</span></div>
            <AnimatePresence>
                <motion.img
                    key={car.id}
                    initial={{
                        opacity: 0,
                        scale: 1.05,
                        filter: "blur(5px)"
                    }}

                    animate={{
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)"
                    }}

                    exit={{
                        opacity: 0,
                        filter: "blur(5px)"
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                    className="showroom-car" src={car.url} alt="Black Toyota Supra MK4 in a white luxury showroom" ref={carRef} />
            </AnimatePresence>
            <AnimatePresence>
                <motion.div
                    key={car.id}
                    initial={{
                        opacity: 0,
                        y: 10,

                    }}

                    animate={{
                        opacity: 1,
                        y: 0,


                    }}

                    exit={{
                        opacity: 0,
                        y: 10,


                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                    className="showroom-shell">
                    <div className="showroom-copy absolute left-10 top-[10%]" ref={copyRef}>
                        <span className="showroom-kicker text-(--primary) uppercase">Showroom</span>
                        <h2>{car.name}</h2>
                        <p>
                            {car.desc}
                        </p>
                        <div className="showroom-actions">
                            <button className="showroom-primary">Select</button>
                            <button className="showroom-secondary">Details</button>
                        </div>
                    </div>

                    <div className="showroom-details absolute top-[10%] right-0" ref={detailsRef} >
                        <div>
                            <span>01</span>
                            <strong>{car.config}</strong>
                        </div>
                        <div>
                            <span>02</span>
                            <strong>{car.engine}</strong>
                        </div>
                        <div>
                            <span>03</span>
                            <strong>Grand Touring</strong>
                        </div>
                    </div>

                    <div className="showroom-price flex flex-col items-center justify-center absolute bottom-[10%] right-[50%] transform-[translateX(50%)] " aria-label="Starting price">
                        <AnimatePresence>
                            <motion.div
                                key={car.id}
                                initial={{
                                    opacity: 0,
                                    y: 50,

                                }}

                                animate={{
                                    opacity: 1,
                                    y: 0,


                                }}

                                exit={{
                                    opacity: 0,
                                    y: 50,

                                }}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeInOut",
                                }}>
                                <span className="block w-full text-center text-(--ink)">From</span>
                                <strong className="text-(--primary) text-7xl">¥ {car.price}</strong>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </AnimatePresence>
        </section >
    );
}
