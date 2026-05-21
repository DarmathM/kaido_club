import supra from "./assets/supra-mk4.jpg";
import gtr from "./assets/nissan-r34.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft } from "./components/chevron";
import { ChevronRight } from "./components/chevron";
import { useState } from "react";

const fleet = [
    {
        id: 1,
        name: "Nissan GT-R R34",
        nickname: "Godzilla",
        image: gtr,
        specs: {
            power: "565 HP",
            engine: "3.8L V6 Twin-Turbo",
            year: "2024",
        },
        description: "The modern icon. All-wheel drive perfection meets 3.8L twin-turbo fury.",
    },
    {
        id: 2,
        name: "Toyota Supra MK4",
        nickname: "The Legend",
        image: supra,
        specs: {
            power: "520 HP",
            engine: "2JZ-GTE Turbo",
            year: "1998",
        },
        description: "The 2JZ heart of Tokyo Drift. Single turbo built, street-ready legend.",
    },
]


export function Fleet() {
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



    return (
        <section className="fleet-section flex flex-col gap-20 px-10 py-4" id="fleet">
            <div className=" border border-(--primary) w-[50%] opacity-50 self-center"></div>
            {/* Title*/}
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4 items-center">
                <div className="flex justify-center items-center self-center uppercase px-4 rounded-3xl border-2 border-(--primary) bg-(--primary-light) font-semibold tracking-[4px] text-[0.7rem]">Vehicles</div>
                <h2 className=" text-2xl lg:text-7xl">Legendary Fleet</h2>
                <p className="text-(--muted) text-[1rem]">Hand-selected JDM icons. Each maintained to competition standards.</p>
            </motion.div>

            {/* Car fleet*/}
            <div className="grid grid-cols-1 sm:justify-items-center md:justify-items-normal lg:grid-cols-2 gap-8">

                <motion.div

                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="group flex rounded-3xl aspect-square max-w-175 overflow-hidden relative p-6">
                    <div className="flex pl-4 px-10 bg-(--primary)/75 z-2 absolute left-4 to-15% text-[0.7rem] border-l-2 border-(--primary-light) uppercase italic">Popular</div>
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={car.id}

                            initial={{
                                opacity: 0,
                                scale: 1.05,
                                filter: "blur(10px)"
                            }}

                            animate={{
                                opacity: 1,
                                scale: 1,
                                filter: "blur(0px)"
                            }}

                            exit={{
                                opacity: 0,
                                scale: 0.95,
                                filter: "blur(10px)"
                            }}
                            src={car.image} alt="supra mk4" className="object-cover inset-0 size-full select-none absolute saturate-50" />
                    </AnimatePresence>
                    <ChevronLeft onClick={previousCar} />
                    <ChevronRight onClick={nextCar} />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                    <p className=" text-(--text) z-2 self-end text-[1.2rem] md:text-2xl lg:text-3xl font-medium font-obitron transform-[translateY(50%)] opacity-0 group-hover:transform-[translateY(0)] group-hover:opacity-100 transition-all duration-500">{car.name}</p>
                    <div className="absolute z-1 w-full h-75 bottom-0 bg-linear-to-t from-red-500 to-transparent left-0 opacity-0 transform-[translateY(100%)] group-hover:opacity-100 group-hover:transform-[translateY(0)] transition-all duration-500 "></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6 justify-center">


                    <p className="text-(--muted)">{car.description}</p>
                    <div className="grid grid-cols-3 gap-8">
                        <div className="card relative bg-(--bg-muted) border-2 border-zinc-800 p-4 flex flex-col items-center justify-center gap-2 text-(--primary) text-3xl lg:text-5xl">
                            <span className="material-symbols-outlined ">speed_4</span>
                            <h2 className="text-(--text) text-[0.8rem] lg:text-[1rem]">{car.specs.power}</h2>
                            <p className="text-(--muted) text-[0.7rem]">Power</p>
                        </div>
                        <div className="card relative bg-(--bg-muted) border-2 border-zinc-800 p-4 flex flex-col items-center justify-center gap-2 text-(--primary) text-3xl lg:text-5xl">
                            <span className="material-symbols-outlined">local_gas_station</span>
                            <h2 className="text-(--text) text-[0.8rem] lg:text-[1rem]">{car.specs.engine}</h2>
                            <p className="text-(--muted) text-[0.7rem]">Engine</p>
                        </div>
                        <div className="card relative bg-(--bg-muted) border-2 border-zinc-800 p-4 flex flex-col items-center justify-center gap-2 text-(--primary)  text-3xl lg:text-5xl">
                            <span className="material-symbols-outlined ">calendar_today</span>
                            <h2 className="text-(--text) text-[0.8rem] lg:text-[1rem]">{car.specs.year}</h2>
                            <p className="text-(--muted) text-[0.7rem]">Year</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-8">
                        <button className="flex items-center gap-4 text-(--muted) bg-(bg-muted) px-10 py-2 border border-zinc-500 text-2xl"><span className="material-symbols-outlined ">play_circle</span><p>Rev Engine</p></button>
                        <button className="primary-btn px-10 py-2">Book Your ride</button>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
