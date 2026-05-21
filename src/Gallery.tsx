import skyline from "./assets/skyline.jpg";
import r33 from "./assets/r33.jpg";
import r35 from "./assets/r35.jpg";
import rasso from "./assets/rasso.jpg";
import car2 from "./assets/r34.jpg";
import supra from "./assets/supra-mk4.jpg";
export function Gallery() {
    return (
        <section className="flex flex-col gap-20 p-8">
            <div className=" border border-(--primary) w-[50%] opacity-50 self-center"></div>
            <div className="grid grid-cols-3 grid-rows-3 gap-4 h-screen">

                {/* BIG CARD */}
                <div className="group relative col-span-2 row-span-2 rounded-3xl overflow-hidden">

                    <img
                        src={skyline}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black opacity-50 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 "></div>

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
                <div className="group relative rounded-3xl overflow-hidden">
                    <img src={r33} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    <div className="absolute inset-0 bg-black opacity-50 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 "></div>
                </div>

                <div className="group relative rounded-3xl overflow-hidden">
                    <img src={r35} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    <div className="absolute inset-0 bg-black opacity-50 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 "></div>
                </div>

                <div className="group relative rounded-3xl overflow-hidden">
                    <img src={supra} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    <div className="absolute inset-0 bg-black opacity-50 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 "></div>
                </div>

                <div className="group relative rounded-3xl overflow-hidden">
                    <img src={car2} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    <div className="absolute inset-0 bg-black opacity-50 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 "></div>
                </div>

                <div className="group relative rounded-3xl overflow-hidden">
                    <img src={rasso} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    <div className="absolute inset-0 bg-black opacity-50 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 "></div>
                </div>

            </div>

        </section>
    );
}