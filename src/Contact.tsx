import { motion } from "framer-motion";


const timeSlots = ["20:00", "21:00"];
const cars = ["Nissan Skyline R34", "Toyota Supra MK4"];

const fieldClass = "grid min-w-0 gap-2";
const labelClass = "text-(--text) text-[0.68rem] font-extrabold tracking-[0.18em] uppercase";
const controlClass = "min-h-12 w-full rounded-none border border-white/15 bg-white/7 px-3.5 py-3 font-semibold text-(--muted) outline-none transition-[border-color,background,box-shadow] duration-250 focus:border-(--primary) focus:bg-white/10 focus:shadow-[0_0_0_3px_rgba(190,24,24,0.18)]";

export function Contact() {
    return (
        <section
            className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#010205] px-[clamp(18px,6vw,88px)] py-[clamp(96px,12vw,160px)] max-[940px]:items-end max-[560px]:px-4 max-[560px]:py-[88px_32px]"
            id="contact"
        >
            
            <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_60%_70%,rgba(180,24,24,0.2),transparent_34%)]"></div>

            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mx-auto grid w-[min(1180px,100%)] grid-cols-[minmax(0,0.95fr)_minmax(360px,0.72fr)] items-end gap-[clamp(32px,6vw,88px)] max-[940px]:grid-cols-1"
            >
                <div className="grid max-w-[630px] gap-[18px] max-[560px]:gap-3.5">
                    <span className="inline-flex w-fit border-l-2 border-(--primary) pl-3.5 text-[0.72rem] font-extrabold tracking-[0.34em] text-(--primary) uppercase max-[560px]:text-[0.58rem] max-[560px]:tracking-[0.18em]">
                        Book your ride
                    </span>
                    <h2 className="m-0 max-w-[650px] text-[clamp(3rem,7.4vw,7.2rem)] leading-[0.86] tracking-normal text-(--text) uppercase max-[940px]:text-[clamp(2.6rem,11vw,5rem)] max-[560px]:text-[clamp(2.2rem,12vw,3.45rem)]">
                        Tokyo Night Drive
                    </h2>
                    <p className="m-0 max-w-[500px] text-[clamp(1rem,1.35vw,1.22rem)] leading-[1.6] text-(--muted) max-[560px]:text-[0.9rem]">
                        Reserve a premium JDM experience through the neon corridors of Tokyo.
                        Select your crew, and the vehicle waiting for you tonight.
                    </p>

                    <div className="mt-[22px] grid w-fit gap-1.5 border-l-2 border-(--primary) bg-white/[0.055] px-[22px] py-[18px] backdrop-blur-2xl">
                        <span className="text-[0.68rem] font-extrabold tracking-[0.24em] text-(--primary)">
                            KAIDO CLUB
                        </span>
                        <strong className="font-obitron text-[0.9rem] font-bold tracking-[0.08em] uppercase">
                            JDM experience
                        </strong>
                    </div>
                </div>

                <form className="grid grid-cols-2 gap-3.5 bg-(--text)/5  p-[clamp(30px,6vw,40px)] shadow-[0_28px_80px_rgba(0,0,0,0.42)] backdrop-blur-2xl max-[940px]:max-w-[620px] max-[560px]:grid-cols-1 max-[560px]:p-4">
                    <label className={fieldClass}>
                        <span className={labelClass}>Nbr. Personn</span>
                        <input className={controlClass} type="number" min="1" max="4" placeholder="2" />
                    </label>

                    <label className={fieldClass}>
                        <span className={labelClass}>SCHEDULE</span>
                        <select className={controlClass} defaultValue="">
                            <option className="text-(--ink)" value="" disabled>
                                Select an hour
                            </option>
                            {timeSlots.map((slot) => (
                                <option className="text-(--ink)" key={slot} value={slot}>
                                    {slot}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label className={`${fieldClass} col-span-full`}>
                        <span className={labelClass}>Your car</span>
                        <select className={controlClass} defaultValue="">
                            <option className="text-(--muted)" value="" disabled>
                                Select A Vehicle
                            </option>
                            {cars.map((car) => (
                                <option className="text-(--ink)" key={car} value={car}>
                                    {car}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label className={`${fieldClass} col-span-full`}>
                        <span className={labelClass}>Private Message</span>
                        <textarea
                            className={`${controlClass} min-h-28 resize-y`}
                            placeholder="Pickup, ambiance, itineraire details.."
                            rows={4}
                        ></textarea>
                    </label>

                    <button
                        className="col-span-full min-h-[52px] border border-(--primary-light) bg-[linear-gradient(135deg,_#7a0c0c,_#d41414)] text-[0.78rem] tracking-[0.22em] text-(--text) transition-[transform,filter] duration-250 hover:-translate-y-0.5 hover:brightness-110"
                        type="submit"
                    >
                        Reserve your night
                    </button>
                </form>
            </motion.div>
        </section>
    );
}
