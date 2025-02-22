import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const cards = [
  {
    url: "../assets/evoltt.png",
    title: "EVOLT",
    description: "Offers efficient EV charging, seamless battery swaps, and high-quality EV rentals.s",
    tools: "Reactjs &nbsp;&nbsp; TailwindCss &nbsp;&nbsp; Firebase",
    link: "https://ecocharge-18a51.web.app/",
    id: 1,
    color: "text-white",
    shadow: "yes",
  },
  {
    url: "../assets/deaf.png",
    title: "DEAF VOICE",
    description: "Developed a video calling web platform for sign language communication using WebRTC, JavaScript, and WebSocket.",
    tools: "HTML &nbsp;&nbsp;CSS &nbsp;&nbsp;JAVASCRIPT &nbsp;PYTHON ",
    link: "https://bespoke-baklava-cc2b6c.netlify.app/",
    id: 2,
    color: "text-white",
    shadow: "yes",
  },
  {
    url: "../assets/bike.png",
    title: "ELECTROBIKE",
    description: "Developed a responsive ElectroBike web application with dynamic product showcases and optimized performance using HTML, CSS, and JavaScript.",
    tools: "HTML &nbsp;&nbsp;CSS &nbsp;&nbsp;JAVASCRIPT",
    link: "https://celadon-paletas-e08a1f.netlify.app/",
    id: 3,
    color: "text-white",
    shadow: "yes",
  },
  {
    url: "../assets/weather.png",
    title: "WEATHER APP",
    description: " Created a weather app displaying real-time temperature, humidity, wind speed, and precipitation globally using a weather service API",
    tools: "React; ",
    link: "https://fabulous-sawine-dd09de.netlify.app/",
    id: 4,
    color: "text-black",
    shadow: "no",
  },
];

const Projects = () => {
  const scrollRef = useRef(null);
  const [isLeftButtonActive, setIsLeftButtonActive] = useState(false);
  const [isRightButtonActive, setIsRightButtonActive] = useState(true);

  useEffect(() => {
    const handleWheel = (event) => {
      const element = scrollRef.current;
      const isScrollingHorizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY);

      if (isScrollingHorizontal) {
        element.scrollLeft += event.deltaX;
        event.preventDefault();
      }
    };

    const element = scrollRef.current;
    element.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      element.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const element = scrollRef.current;
      const maxScrollLeft = element.scrollWidth - element.clientWidth;
      setIsLeftButtonActive(element.scrollLeft > 0);
      setIsRightButtonActive(element.scrollLeft < maxScrollLeft);
    };

    const element = scrollRef.current;
    element.addEventListener("scroll", handleScroll);
    
    handleScroll();

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scroll = (direction) => {
    const element = scrollRef.current;
    const scrollAmount = direction === "left" ? -331 : 331;
    element.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section id="projects" className="relative">
      <div className="flex items-center justify-between px-5 md:mx-auto md:w-[1000px] my-14">
        <p className="text-[1.68rem] font-helvetica tracking-wide z-10 text-start text-yellow-300">
          PROJECTS
        </p>
        <div className="flex items-center space-x-2">
          <motion.button
            onClick={() => scroll("left")}
            className={`transition-all ${isLeftButtonActive ? 'text-white' : 'opacity-30'}`}
            disabled={!isLeftButtonActive}
            whileTap={isLeftButtonActive ? { scale: 0.5 } : {}}
          >
            <IoIosArrowBack size={20} />
          </motion.button>
          <motion.button
            onClick={() => scroll("right")}
            className={`transition-all pl-3 ${isRightButtonActive ? 'text-white' : 'opacity-30'}`}
            disabled={!isRightButtonActive}
            whileTap={isRightButtonActive ? { scale: 0.5 } : {}}
          >
            <IoIosArrowForward size={20} />
          </motion.button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex h-full overflow-x-auto overflow-y-hidden px-5 md:px-[calc(50vw-480px)] no-scrollbar"
        style={{ scrollbarWidth: "none", "-ms-overflow-style": "none" }}
      >
        {cards.map((card, index) => (
          <a href={card.link} target="_blank" rel="noopener noreferrer" key={card.id}>
            <motion.div
              className={`group relative flex-shrink-0 w-[331px] h-[277px] xs:w-[430px] xs:h-[360px] rounded-md ${index !== 0 ? 'ml-[0.9rem]' : ''}`}
              style={{
                backgroundImage: `url(${card.url})`,
                backgroundSize: "100% auto",
                backgroundPosition: "center",
              }}
              whileHover={{ backgroundSize: "103% auto" }}
            >
              <div className="absolute inset-0 z-10 flex flex-col justify-between p-5">
                <div>
                  <p className={`font-helvetica tracking-wide text-sm ${card.color}`}>{card.title}</p>
                </div>
                <div className="absolute bottom-5 left-5 text-left">
                  <p className={`font-helvetica tracking-wide text-[.99rem] ${card.color} ${card.shadow === 'yes' ? '[text-shadow:_0_0_23px_rgb(0_0_0_/_100%)]' : ''} mr-2`}>{card.description}</p>
                  <p className={`font-helvetica tracking-wide text-[.85rem] opacity-75 ${card.color}  ${card.shadow === 'yes' ? '[text-shadow:_0_0_16px_rgb(0_0_0_/_100%)]' : ''} mt-2`} dangerouslySetInnerHTML={{ __html: card.tools.replace(/\s/g, '&nbsp;') }}></p>
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
