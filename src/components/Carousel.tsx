import { useEffect, useRef, useState } from "react";

const images = [
  "/tazacafe.jpg",
  "/image.png",
  "/tazacafe.jpg",
  "/tazacafe.jpg",
  "/tazacafe.jpg",
];

const Carousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const positionRef = useRef(0);

  useEffect(() => {
    const speed = 0.75;

    const animate = () => {
      if (!isPaused && containerRef.current) {
        positionRef.current -= speed;

        const totalWidth =
          containerRef.current.scrollWidth / 2;

        if (Math.abs(positionRef.current) >= totalWidth) {
          positionRef.current = 0;
        }

        containerRef.current.style.transform =
          `translateX(${positionRef.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  return (
    <section className="bg-[#E8E3DC] py-5">
      <div className="max-w-7xl mx-auto px-8">

        {/* TÍTULO */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-[#4A2E1F] mb-6">
            Nuestra Experiencia
          </h2>
          <p className="text-[#6B4C3B] max-w-2xl mx-auto text-lg leading-relaxed">
            Vive el aroma, el proceso y la pasión detrás de cada taza.
          </p>
        </div>

        {/* CARRUSEL */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={containerRef}
            className="flex gap-8 w-max"
          >
            {[...images, ...images].map((img, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src={img}
                  alt="experiencia"
                  className="h-[280px] w-[380px] object-cover transition-transform duration-500 ease-out hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Carousel;
