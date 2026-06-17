
type SideBarProps = {
    isOpen: boolean;
    onClose: ()=> void;
};

export function Sidebar({isOpen, onClose}: SideBarProps){
    return(
        <div className={`${isOpen ? "translate-x-0 opacity-100"  : "-translate-x-full opacity-0"} fixed flex flex-col px-10 pt-20 left-0 h-full w-100 bg-(--text) z-100 transition-all duration-300`}>
            <div className="absolute flex flex-row items-center top-0 left-0 w-full bg-(--light-contrast) p-2"><span onClick={onClose} className="material-symbols-outlined p-20 bg-(--muted) rounded-full cursor-pointer ">close</span></div>
            <ul className="flex flex-col gap-12 ">
                <a  href="#showroom" className="flex items-center justify-between text-[1.3rem] text-(--ink)  bg-(--light-contrast) p-4 rounded-2xl font-medium">Fleet<span className="material-symbols-outlined cursor-pointer flex items-center">chevron_right</span></a>
                <a href="#contact" className="flex items-center justify-between text-[1.3rem] text-(--ink)  bg-(--light-contrast) p-4 rounded-2xl font-medium">Book<span className="material-symbols-outlined cursor-pointer flex items-center">chevron_right</span></a>
                <a href="#tours" className="flex items-center justify-between text-[1.3rem] text-(--ink)  bg-(--light-contrast) p-4 rounded-2xl font-medium">Car Tours<span className="material-symbols-outlined cursor-pointer flex items-center">chevron_right</span></a>
                <a href="#gallery" className="flex items-center justify-between text-[1.3rem] text-(--ink)  bg-(--light-contrast) p-4 rounded-2xl font-medium">Gallery<span className="material-symbols-outlined cursor-pointer flex items-center">chevron_right</span></a>
                <a className="flex items-center justify-between text-[1.3rem] text-(--ink)  bg-(--light-contrast) p-4 rounded-2xl font-medium">About<span className="material-symbols-outlined cursor-pointer flex items-center">chevron_right</span></a>
            </ul>
        </div>
    );
}