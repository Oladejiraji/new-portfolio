import { useGSAP } from "@gsap/react";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { findTag } from "../../utils/helper";
import SectionHeader from "../atoms/SectionHeader";
import { ExternalLink } from "../atoms";

const experienceData = [
  {
    id: 1,
    letter: "A",
    company: "233 Developers",
    link: "https://233developers.com/",
    role: "Mobile Developer",
    start: "12 May, 2021",
    end: "12 May, 2021",
    tags: [
      findTag("react native"),
      findTag("expo"),
      findTag("node.js"),
      findTag("typescript"),
      findTag("socket"),
    ],
    description:
      "Created responsive screens optimized for various mobile devices and enhanced mobile app performance using seamless animations. Additionally, I developed payment, chat, and location features, built and integrated a chat server spanning client and server, and implemented authentication and premium functionalities. Ensuring app consistency across multiple devices, I also created API endpoints and resolved bugs for improved functionality, contributing to the development of various components within the mobile app.",
  },
  {
    id: 2,
    letter: "B",
    company: "Buzzz Inc",
    link: "https://www.linkedin.com/company/buzzz-inc/",
    role: "Frontend Developer",
    start: "12 May, 2021",
    end: "12 May, 2021",
    tags: [
      findTag("react"),
      findTag("next.js"),
      findTag("three.js"),
      findTag("react query"),
      findTag("typescript"),
    ],
    description:
      "I translated app designs into dynamic web pages using Next.js, ensuring functionality and responsiveness. Additionally, I developed reusable UI components to establish consistency and streamline development, and designed and implemented engaging animations to enhance the overall user experience. Further, I implemented payment systems, authentication, and SEO optimization to ensure comprehensive app functionality. Moreover, I integrated immersive 3D elements using three.js to enrich the visual aspects of the app and seamlessly integrated APIs to ensure smooth app flow and intuitive user interaction.",
  },
  {
    id: 3,
    letter: "C",
    company: "Oato Media",
    link: "https://www.linkedin.com/company/oatomedia/?originalSubdomain=ng",
    role: "Frontend Developer",
    start: "12 May, 2021",
    end: "12 May, 2021",
    tags: [findTag("react"), findTag("typescript")],
    description:
      "I transformed design concepts into fully responsive and dynamic web pages, ensuring an intuitive user experience. Additionally, I developed and implemented a chat feature within the app using socket.io to facilitate seamless real-time communication. Moreover, I contributed significantly to app authentication protocols and overall user flow enhancements for a more streamlined experience. Furthermore, I architected and built a robust CMS (Content Management System) specifically tailored to efficiently manage content across the web application.",
  },
  {
    id: 4,
    letter: "D",
    company: "Ivbaze Tech Development",
    link: "https://www.linkedin.com/company/ivbazetechdev/",
    role: "Fullstck Developer",
    start: "12 May, 2021",
    end: "12 May, 2021",
    tags: [findTag("react"), findTag("node.js"), findTag("postgresql")],
    description:
      "I enhanced an existing API by optimizing performance and adding multiple new endpoints to enable expanded functionalities. Additionally, I documented API endpoints comprehensively using Postman, ensuring clear and accessible references. Furthermore, I successfully integrated Docusign for documentation, Stripe payment system, and authentication mechanisms into the API. Moreover, I added several reusable components to existing apps, enhancing modularity and functionality.",
  },
];

const Experience = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cards = gsap.utils.toArray(".experience_card");

    cards.forEach((card: any, i) => {
      const isLast = i + 1 === cards.length;
      gsap.to(card, {
        ease: "none",
        scale: isLast ? 1 : 0.5,
        opacity: isLast ? 1 : 0,
        scrollTrigger: {
          trigger: card,
          start: "top top",
          end: `+=${card.offsetHeight}`,
          scrub: 1,
        },
      });
    });
  }, []);
  return (
    <section className="max-w-[1200px] mx-auto px-[1rem] sm:px-[2rem] lg:px-[3rem] py-[5rem] md:py-[10rem] ">
      <div className="max-w-[300px] sm:max-w-[1000px] mx-auto ">
        <SectionHeader padLeft={0} text="EXPERIENCE" />
      </div>
      <div className="flex flex-col items-center justify-center gap-8 ">
        {experienceData.map((experience, i) => (
          <a
            key={i}
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="sticky top-[10%] "
          >
            <div className="mouse_comp min-h-[400px] max-w-[300px] sm:max-w-[1000px] bg-[#333] experience_card  border-[2px] border-[white] px-[1rem] sm:px-[2rem] py-[2rem] bg-opacity-[0.8] ">
              <h1 className="font-sedan text-[2rem] md:text-[3rem] pb-[2rem] ">
                ({experience.letter})
              </h1>
              <h2 className="text-[1.4rem] md:text-[2rem] font-font1">
                {experience.role}
              </h2>
              <h2 className="text-[1.4rem] md:text-[2rem] font-font1 leading-[2rem] md:leading-[1rem]">
                {experience.company}
              </h2>
              <p className="font-roboto text-[0.7rem] sm:text-[1rem] pt-[1rem] font-medium ">
                {experience.description}
              </p>
              <div className="pt-[2rem] flex gap-2 flex-wrap  ">
                {experience.tags.map((tag, i) => {
                  return (
                    tag && (
                      <ExternalLink
                        key={i}
                        href={tag.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="font-roboto text-[0.6rem] border-[1px] border-white px-[0.6rem] py-[0.3rem] rounded-[20px] text-nowrap ">
                          {tag.name}
                        </p>
                      </ExternalLink>
                    )
                  );
                })}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Experience;
