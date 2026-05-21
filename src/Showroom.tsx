import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import supraShowroom from "./assets/upscale_toyota.png";
import r34 from "./assets/nissan-r34-upscale.png";
import bg from "./assets/showroom_bg.png";
import { ChevronLeft } from "./components/chevron";
import { ChevronRight } from "./components/chevron";
import { AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);


const fleet = [
    {
        id: 1,
        url: supraShowroom,
        name: "Supra mk4",
        price: "40.000",
        engine: "2JZ-GTE",
        config: "gloss black",
    },
    {
        id: 2,
        url: r34,
        name: "Skyline r34",
        price: "30.000",
        engine: "Skyline r34",
        config: "Brian",
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
    const backgroundRef = useRef<HTMLDivElement | null>(null);
    const carRef = useRef<HTMLImageElement | null>(null);
    const copyRef = useRef<HTMLDivElement | null>(null);
    const detailsRef = useRef<HTMLDivElement | null>(null);
    const floorRef = useRef<HTMLDivElement | null>(null);
    const rafRef = useRef<number | null>(null);
    const parallaxRef = useRef({
        targetCarY: 0,
        targetCarScale: 1,
        targetCarRotateX: 0,
        targetBgY: 0,
        targetFloorY: 0,
        currentCarY: 0,
        currentCarScale: 1.08,
        currentCarRotateX: 0,
        currentBgY: 0,
        currentFloorY: 0,
    });

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const background = backgroundRef.current;
        const car = carRef.current;
        const copy = copyRef.current;
        const details = detailsRef.current;
        const floor = floorRef.current;

        if (!section || !background || !car || !copy || !details || !floor) return;

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
                .to(car, { opacity: 1, duration: 1.5, y: 0, ease: "power3.in" }, 0)
                .to(copy.children, { opacity: 1, y: 0, stagger: 0.5, duration: 0.9, ease: "power3.out" }, 0.90)
                .to(details.children, { opacity: 1, y: 0, stagger: 1, duration: 0.8, ease: "power3.out" }, 0.28);

            gsap.to(section, {
                "--showroom-line": "100%",
                scrollTrigger: {
                    trigger: section,
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                },
            });



        }, section);

        const updateTargets = () => {
            const rect = section.getBoundingClientRect();
            const viewport = window.innerHeight || 1;
            const progress = Math.min(1, Math.max(0, (viewport - rect.top) / (viewport + rect.height)));
            const centered = progress - 0.5;

            parallaxRef.current.targetCarY = centered * -70;
            parallaxRef.current.targetCarScale = 1.08 + progress * 0.035;
            parallaxRef.current.targetCarRotateX = centered * 1.8;
            parallaxRef.current.targetBgY = centered * 28;
            parallaxRef.current.targetFloorY = centered * -120;

            if (rafRef.current === null) {
                rafRef.current = window.requestAnimationFrame(renderParallax);
            }
        };

        const renderParallax = () => {
            const state = parallaxRef.current;
            state.currentCarY += (state.targetCarY - state.currentCarY) * 0.09;
            state.currentCarScale += (state.targetCarScale - state.currentCarScale) * 0.08;
            state.currentCarRotateX += (state.targetCarRotateX - state.currentCarRotateX) * 0.08;
            state.currentBgY += (state.targetBgY - state.currentBgY) * 0.08;
            state.currentFloorY += (state.targetFloorY - state.currentFloorY) * 0.08;


            background.style.transform = `translate3d(0, ${state.currentBgY}px, 0)`;
            floor.style.transform = `perspective(900px) rotateX(62deg) translate3d(0, ${state.currentFloorY}px, 0)`;


            const settled =
                Math.abs(state.targetCarY - state.currentCarY) < 0.08 &&
                Math.abs(state.targetCarScale - state.currentCarScale) < 0.0008 &&
                Math.abs(state.targetCarRotateX - state.currentCarRotateX) < 0.02 &&
                Math.abs(state.targetBgY - state.currentBgY) < 0.08 &&
                Math.abs(state.targetFloorY - state.currentFloorY) < 0.08;

            if (settled) {
                rafRef.current = null;
                return;
            }

            rafRef.current = window.requestAnimationFrame(renderParallax);
        };

        updateTargets();
        window.addEventListener("scroll", updateTargets, { passive: true });
        window.addEventListener("resize", updateTargets);

        return () => {
            window.removeEventListener("scroll", updateTargets);
            window.removeEventListener("resize", updateTargets);

            if (rafRef.current !== null) {
                window.cancelAnimationFrame(rafRef.current);
            }

            ctx.revert();
        };
    }, []);



    return (
        <section className="showroom-section" id="showroom" ref={sectionRef}>
            <AnimatePresence>
                <div onClick={previousCar} className="arrowRight select-none flex justify-center items-center p-2 absolute left-[5%] top-2/4 -translate-y-1/2 rounded-full border-(--primary)/50 backdrop-blur-md border-2 sm:text-2xl lg:text-5xl cursor-pointer z-10 text-(--primary) hover:text-white hover:border-white transition-all duration-200"><span className="material-symbols-outlined">chevron_left</span></div>
                <div onClick={nextCar} className="arrowRight select-none flex justify-center items-center p-2 absolute right-[5%] top-2/4 -translate-y-1/2 rounded-full border-(--primary)/50 backdrop-blur-md border-2 sm:text-2xl lg:text-5xl cursor-pointer z-10 text-(--primary) hover:text-white hover:border-white transition-all duration-200"><span className="material-symbols-outlined">chevron_right</span></div>
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
                <div className="showroom-ambient" aria-hidden="true" ref={backgroundRef}>
                    <span className="showroom-horizon" />
                </div>
                <div className="showroom-floor" ref={floorRef} aria-hidden="true" />

                <div className="showroom-shell">
                    <div className="showroom-copy absolute left-10 top-[10%]" ref={copyRef}>
                        <span className="showroom-kicker text-(--primary) uppercase">Toyota Heritage Program</span>
                        <h2>{car.name}</h2>
                        <p>
                            The 2JZ heart of Tokyo Drift. Twin turbo built, street-ready legend.
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

                    <div className="showroom-price flex flex-col items-center justify-center absolute bottom-[15%] right-[50%] transform-[translateX(50%)] " aria-label="Starting price">
                        <motion.div
                            key={car.id}
                            initial={{
                                opacity: 0,
                                y: 200,

                            }}

                            animate={{
                                opacity: 1,
                                y: 0,


                            }}

                            exit={{
                                opacity: 0,

                            }}
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut",
                            }}>
                            <span className="block w-full text-center text-(--ink)">From</span>
                            <strong className="text-(--primary) text-7xl">¥ {car.price}</strong>
                        </motion.div>
                    </div>
                </div>
            </AnimatePresence>
        </section>
    );
}
