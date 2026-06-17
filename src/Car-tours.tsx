import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { MapPin, Camera, Flag, Clock, Car } from "lucide-react";

type Stop = {
  step: string
  title: string
  subtitle: string
  description: string
  image: string
  imageAlt: string
  icon: React.ReactNode
  meta?: string
}

const stops: Stop[] = [
  {
    step: "01",
    title: "Shibuya Pickup & Rainbow Bridge",
    subtitle: "The journey begins",
    description:
      "We collect you in the heart of Shibuya and slip straight into the night. Within minutes you're gliding across the illuminated Rainbow Bridge, its cables glowing above Tokyo Bay while the skyline shimmers on the water. Windows down, engine humming — this is the opening scene of your private Tokyo film.",
    image: "/tours/rainbow-bridge.png",
    imageAlt: "JDM Sports car crossing Tokyo's illuminated Rainbow Bridge at night",
    icon: <MapPin className="size-5" aria-hidden="true" />,
    meta: "Pickup in Shibuya",
  },
  {
    step: "02",
    title: "Daikoku PA Stop (1 Hour)",
    subtitle: "Japan's legendary car meet",
    description:
      "Roll into Daikoku Parking Area, the world-famous hub of Japanese car culture wrapped in its iconic glowing highway loop. Soak in the rumble of legendary machines from every era, and stand where enthusiasts travel across the globe just to visit. It's authentic, and unforgettable.",
    image: "/tours/daikoku-pa.png",
    imageAlt: "Daikoku Parking Area at night with JDMs Cars",
    icon: <Car className="size-5" aria-hidden="true" />,
    meta: "Car culture",
  },
  {
    step: "03",
    title: "Tokyo Tower Photo Stop",
    subtitle: "Your 15-minute photo & video shoot",
    description:
      "Pull up beneath the glowing orange Tokyo Tower for a dedicated 15-minute photo and video session. Walk away with content worthy of your feed and memories that last far longer.",
    image: "/tours/tokyo-tower.png",
    imageAlt: "JDM sports car parked in front of the glowing Tokyo Tower at night",
    icon: <Camera className="size-5" aria-hidden="true" />,
    meta: "15 min photo / video shoot",
  },
  {
    step: "04",
    title: "Drop Back to Shibuya",
    subtitle: "The perfect finale",
    description:
      "We cruise back through the neon-soaked streets and return you to Shibuya, buzzing from the ride. No stress, no logistics — just step out, camera roll full, ready for the rest of your night. The end of the tour, the start of the story you'll be telling for years.",
    image: "/tours/shibuya.png",
    imageAlt: "Shibuya crossing in Tokyo at night",
    icon: <Flag className="size-5" aria-hidden="true" />,
    meta: "Return to Shibuya",
  },
]

export function CarTours() {
    const sectionRef = useRef<HTMLOListElement | null>(null);

    
    useLayoutEffect(() => {

        const section = sectionRef.current;
        
        if (!section) return;

        const ctx = gsap.context(() => {
            
            gsap.set(section.children, {opacity: 0, y:100})
   
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 110%",
                    end: "bottom 100%",
                    scrub: 0.7,
                },
            });
            timeline.to(section.children, { opacity: 1, y: 0, stagger: 2, duration: 5, ease: "power3.inOut" }, 0.90);
                
        }, section);

        

        return () => ctx.revert();
    }, []);
  return (
    <section
      aria-labelledby="car-tours-heading"
      className="relative w-full bg-(--bg) py-16 sm:py-20 lg:py-28"
      id="tours"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            Tokyo Night Drive
          </span>
          <h2
            id="car-tours-heading"
            className="mt-6 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            The Car Tour Experience
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-(--text)">
            A curated route through Tokyo&apos;s most iconic night scenes — four
            unforgettable stops, one private car, and memories you&apos;ll be chasing
            long after the engine stops.
          </p>
        </div>

        {/* Timeline of stops */}
        <ol className="relative mt-14 flex flex-col gap-10 lg:mt-20 lg:gap-16" ref={sectionRef}>
          {stops.map((stop, index) => (
            <li
              key={stop.step}
              className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-12"
            >
              {/* Image */}
              <div
                className={
                  "group relative overflow-hidden rounded-2xl border border-border " +
                  (index % 2 === 1 ? "lg:order-2" : "")
                }
              >
                <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
                  <img
                    src={stop.image || "/placeholder.svg"}
                    alt={stop.imageAlt}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                    {stop.icon}
                    {stop.meta}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-4">
                  <span className="font-heading text-4xl font-bold text-(--primary) sm:text-5xl">
                    {stop.step}
                  </span>
                  <span className="text-sm font-medium uppercase tracking-widest text-(--primary)">
                    {stop.subtitle}
                  </span>
                </div>
                <h3 className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                  {stop.title}
                </h3>
                <p className="mt-4 text-pretty leading-relaxed text-(--muted)">
                  {stop.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center sm:p-12 lg:mt-24">
          <div className="inline-flex items-center gap-2 text-sm text-(--primary)">
            <Clock className="size-4 text-primary" aria-hidden="true" />
            Approx. 3 hours · Hotel pickup available
          </div>
          <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Ready to ride through Tokyo?
          </h3>
          <p className="max-w-md text-pretty leading-relaxed text-(--muted)">
            Limited slots each night. Lock in your private car tour and experience the
            city the way it was meant to be seen.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="py-3 px-4 primary-btn font-semibold">
              Book your tour
            </a>
            <a href="#showroom" className="py-3 px-4 border-2 border-amber-50 font-semibold">
              View pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
