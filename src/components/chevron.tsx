type ChevronProps = {
    onClick?: () => void;
};


export function ChevronLeft({onClick}: ChevronProps) {
    return (
        <div onClick={onClick} className="arrowLeft select-none flex justify-center items-center p-2 absolute left-2 top-2/4 -translate-y-1/2 rounded-full border-white/50 backdrop-blur-md border-2 sm:text-2xl lg:text-5xl cursor-pointer z-10 text-white/70 hover:text-white hover:border-white transition-all duration-200"><span className="material-symbols-outlined ">chevron_left</span></div>
    );
}

export function ChevronRight({onClick}: ChevronProps) {
    return (
        <div onClick={onClick} className="arrowRight select-none flex justify-center items-center p-2 absolute right-2 top-2/4 -translate-y-1/2 rounded-full border-white/50 backdrop-blur-md border-2 sm:text-2xl lg:text-5xl cursor-pointer z-10 text-white/70 hover:text-white hover:border-white transition-all duration-200"><span className="material-symbols-outlined ">chevron_right</span></div>

    );
}