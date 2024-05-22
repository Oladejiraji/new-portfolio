import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "../atoms/SectionHeader";
import useDimensions from "../../hooks/useWindowDimensions";

const servicesData = [
  { id: 1, text: "Interactive Websites" },
  { id: 2, text: "Functional Web Applications" },
  { id: 3, text: "Robust and Scalable Apis" },
  { id: 4, text: "High performing mobile apps " },
  { id: 5, text: "Immersive 3d Worlds" },
];

const Services = () => {
  const { width: windowWidth } = useDimensions();
  const padLeft = windowWidth < 768 ? 0 : 200;
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const imgSlider = document.querySelector(".slider-container");
    const imgSliderMain = document.querySelector(".main-slider-container");

    const calculateSliderX =
      (imgSlider!.children.length + 1) * imgSlider!.children[0].offsetWidth -
      windowWidth +
      padLeft * 3;

    gsap.to(imgSlider, {
      ease: "none",
      x: -calculateSliderX,
      scrollTrigger: {
        trigger: imgSliderMain,
        start: "center center",
        end: "+=1000",
        scrub: 1,
        pin: true,
      },
    });
  }, []);
  return (
    <section className=" py-[14rem]   ">
      <div className=" overflow-x-hidden main-slider-container ">
        <div className="px-[1rem] sm:px-0">
          <SectionHeader padLeft={padLeft} text="I BUILD" />
        </div>
        {/* Mobile cards */}
        <div
          className="flex flex-col md:hidden gap-[6rem]  w-full overflow-x-hidden justify-center items-center  "
          style={{ paddingLeft: `${padLeft}px` }}
        >
          {servicesData.map((serv, i) => (
            <div
              key={i}
              className="w-[270px] sm:w-[370px] h-[330px]  border-[1px] border-[white] slider-content p-4 flex flex-col justify-between"
            >
              <h1 className="text-[3rem] font-extrabold font-roboto ">
                .0{serv.id}
              </h1>
              <p className="font-bold font-font2 text-[1.5rem] sm:text-[2rem] leading-[2.3rem] ">
                {serv.text.toLocaleUpperCase()}
              </p>
            </div>
          ))}
        </div>
        {/* Desktop cards */}
        <div
          className="hidden md:flex items-start  gap-[8rem] w-fit overflow-x-hidden slider-container  "
          style={{ paddingLeft: `${padLeft}px` }}
        >
          {servicesData.map((serv, i) => (
            <div
              key={i}
              className="w-[300px] sm:w-[370px] h-[330px]  border-[1px] border-[white] slider-content p-4 flex flex-col justify-between"
            >
              <h1 className="text-[3rem] font-extrabold font-roboto ">
                .0{serv.id}
              </h1>
              <p className="font-bold font-font2 text-[2rem] leading-[2.3rem] ">
                {serv.text.toLocaleUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
