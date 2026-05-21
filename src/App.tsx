import Nav from "./Nav";
import Hero from "./Hero";
import { Fleet } from "./Fleet";
import { useEffect } from "react";
import { Showroom } from "./Showroom";
import { Gallery } from "./Gallery";

const backgroundMarks = [
  { text: "首都高", className: "mark mark-hero" },
  { text: "湾岸", className: "mark mark-red mark-right" },
  { text: "深夜", className: "mark mark-small mark-red mark-low" },
 
];

function App() {
  useEffect(() => {
    const background = document.querySelector<HTMLElement>(".japanese-fixed-bg");

    if (!background) {
      return;
    }

    let ticking = false;

    const updateParallax = () => {
      const scroll = window.scrollY;

      background.style.setProperty("--parallax-y", `${scroll * -0.14}px`);
      background.style.setProperty("--parallax-soft-y", `${scroll * -0.055}px`);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    updateParallax();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="japanese-fixed-bg" aria-hidden="true">
        {backgroundMarks.map((mark) => (
          <span className={mark.className} data-text={mark.text} key={mark.text}>
            {mark.text}
          </span>
        ))}
      </div>
      <div className="site-content">
        <Nav />
        <Hero />
        <Showroom/>
        <Gallery/>
        
        
      </div>
    </>
  );
}

export default App;
