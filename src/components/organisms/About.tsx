import React, { useEffect, useState } from "react";
import { HoverButton } from "../atoms";
import { useLenis } from "lenis/react";

const About = () => {
  const lenis = useLenis();
  const [whyWidth, setWhyWidth] = useState(0);
  useEffect(() => {
    const contentCon = document.querySelector(".about_sticky");
    const contentWidth = contentCon?.scrollWidth;
    setWhyWidth(contentWidth || 0);
  }, []);
  return (
    <section className="py-[6rem] section_about max-w-[1200px] mx-auto px-[1rem] sm:px-[2rem] lg:px-[3rem]">
      <div className="block md:flex gap-8 ">
        <div className="w-full  md:w-[50%] ">
          <div className="max-w-[400px] about_sticky ">
            <h3 className="text-[3rem] sm:text-[4rem] font-extrabold leading-[4rem] font-font2 mb-[30px] md:mb-[0px] ">
              Why Work With Me?
            </h3>
          </div>
        </div>
        <div className="w-full md:w-[50%] flex flex-col gap-[5rem] md:gap-[25rem]  ">
          <div
            // style={{ marginTop: `${whyWidth}px` }}
            className={`mt-[40px] md:mt-[${whyWidth}px] `}
          >
            <h3 className="font-font2 font-bold text-[2rem] pb-4 text-primary ">
              Expertise Across Platforms
            </h3>
            <p className="font-roboto text-[1.2rem]">
              I specialize in crafting robust applications that shine across
              multiple platforms, from responsive frontend interfaces to
              scalable backend systems and engaging mobile experiences.
            </p>
          </div>
          <div>
            <h3 className="font-font2 font-bold text-[2rem] pb-4 text-primary ">
              Driven by Collaboration
            </h3>
            <p className="font-roboto text-[1.2rem]">
              I thrive in collaborative environments, bringing excellent
              communication skills and a collaborative mindset to
              cross-functional teams to transform concepts into reality.
            </p>
          </div>
          <div>
            <h3 className="font-font2 font-bold text-[2rem] pb-4 text-primary ">
              Commitment to Excellence
            </h3>
            <p className="font-roboto text-[1.2rem]">
              I’m committed to delivering excellence in everything I do,
              prioritizing craftsmanship and attention to detail to create
              solutions that exceed expectations.
            </p>
          </div>
          <div>
            <h3 className="font-font2 font-bold text-[2rem] pb-4 text-primary ">
              Let's Collaborate
            </h3>
            <p className="font-roboto text-[1.2rem]">
              If you’re seeking a dedicated software engineer who can bring your
              ideas to life with precision and passion, let’s collaborate to
              create exceptional digital experiences.
            </p>
            <div className="mt-[2rem] md:mt-[3rem] ">
              <HoverButton
                onClick={() =>
                  lenis?.scrollTo("#contact_target", { offset: 100 })
                }
              >
                <p className="text-[0.8rem] font-roboto font-bold ">
                  GET IN TOUCH
                </p>
              </HoverButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
