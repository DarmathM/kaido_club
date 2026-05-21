export function Nav() {
    return (
        <nav className="grid grid-cols-3 items-center px-10 py-5 absolute top-0 left-0 w-full bg-(--ink) z-90">

            {/* LEFT */}
            <div>
                Logo
            </div>

            {/* CENTER */}
            <ul className="flex justify-center gap-12">
                <a href="#home" className="text-[0.8rem] hover:text-(--primary) transition-colors duration-500">HOME</a>
                <a href="#tours" className="text-[0.8rem] hover:text-(--primary) transition-colors duration-500">CAR TOURS</a>
                <a href="#fleet" className="text-[0.8rem] hover:text-(--primary) transition-colors duration-500">FLEET</a>
            </ul>

            {/* RIGHT */}
            <div className="flex justify-end">
                <button className="primary-btn px-8 py-1 text-[0.8rem]">
                    Book Now
                </button>
            </div>
        </nav>
    );

}

export default Nav;
