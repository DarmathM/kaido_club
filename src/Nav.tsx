import logo from "./assets/kaido_club_logo_.png";

type NavProps = {
    onMenuClick: () => void;
};

export function Nav({onMenuClick}: NavProps) {
   


    return (
        <nav className="grid grid-cols-3 items-center px-10 py-5 absolute top-0 left-0 w-full z-90">

            {/* LEFT */}
            <ul className="flex justify-start items-center gap-4 text-[2rem] font-light">
                <span onClick={onMenuClick} className="material-symbols-outlined cursor-pointer">menu</span>
                <a href="#fleet" className="text-[0.9rem] tracking-[5px] font-medium hover:text-(--primary) transition-colors duration-500 uppercase">menu</a>
            </ul>

            {/* CENTER */}

            <div>
                <img src={logo} alt="kaido_club_logo" className="w-30 aspect-square absolute left-[50%] -top-5 transform-[translateX(-50%)]" />
            </div>

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
