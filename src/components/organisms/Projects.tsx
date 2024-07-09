import SectionHeader from "../atoms/SectionHeader";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { findTag } from "../../utils/helper";

const projectData = [
  {
    id: 1,
    name: "Buzzz",
    description: "Merch Gateway for the internet",
    tags: [
      findTag("react"),
      findTag("next.js"),
      findTag("three.js"),
      findTag("react query"),
      findTag("typescript"),
    ],
    img: "/project_1.png",
    link: "https://yourbuzzz.com",
  },
  {
    id: 2,
    name: "Habari",
    description: "Make meaningful connections with habari ",
    tags: [
      findTag("Expo"),
      findTag("React Native"),
      findTag("socket.io"),
      findTag("redux"),
      findTag("typescript"),
    ],
    img: "/project_3.png",
    link: "https://apps.apple.com/ng/app/habari-connect-chat/id6448764507",
  },
  {
    id: 10,
    name: "MOJ Dashboard",
    description: "Ministry of Justice Management Dashboard",
    tags: [
      findTag("react"),
      findTag("next.js"),
      findTag("react query"),
      findTag("tailwind"),
      findTag("typescript"),
    ],
    img: "/project_7.png",
    link: "https://moj.lawpavilion.com",
  },
  {
    id: 3,
    name: "Tenaciti",
    description: "All in one property management software",
    tags: [
      findTag("react"),
      findTag("next.js"),
      findTag("node.js"),
      findTag("react query"),
      findTag("typescript"),
    ],
    img: "/project_2.png",
    link: "https://tenaciti.co",
  },
  {
    id: 4,
    name: "My Portfolio 🙈",
    description: "Welcome to Deji's world - I guess this is recursion😅",
    tags: [
      findTag("react"),
      findTag("gsap"),
      findTag("three.js"),
      findTag("typescript"),
    ],
    img: "/project_4.png",
    link: "https://oladeji.app",
    border: true,
  },
  {
    id: 5,
    name: "JS Questionnaire",
    description: "A fun JS questionnaire",
    tags: [findTag("node.js")],
    img: "/project_5.png",
    link: "https://www.npmjs.com/package/js-questionnaire",
  },
  {
    id: 6,
    name: "Video app",
    description: "A video calling application (more features incoming 🙂)",
    tags: [
      findTag("react"),
      findTag("next.js"),
      findTag("socket.io"),
      findTag("tailwind"),
      findTag("typescript"),
    ],
    img: "/project_6.png",
    link: "https://video-app-frontend-vert.vercel.app/",
  },
];

const Projects = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const projects = gsap.utils.toArray(".project_card");

    projects.forEach((project: any, i) => {
      const isEven = (i + 1) % 2 === 0;
      gsap.to(project, {
        ease: "none",
        yPercent: isEven ? -20 : 20,
        scrollTrigger: {
          trigger: project,
          scrub: 1,
        },
      });
    });
  }, []);
  return (
    <section className="max-w-[1200px] mx-auto px-[1rem] sm:px-[2rem] lg:px-[3rem] py-[12rem] ">
      <SectionHeader padLeft={0} text="PROJECTS" />
      {/* Mobile version */}
      <div className="grid md:hidden md:grid-cols-2 grid-cols-1 gap-x-[2rem] gap-y-[5rem]   ">
        {projectData.map((pro, i) => (
          <a key={i} href={pro.link} target="_blank" rel="noopener noreferrer">
            <div className="rounded-[0.5rem] project_card_hover  relative ">
              <div>
                <img
                  src={pro.img}
                  alt=""
                  className="rounded-[0.5rem] h-[350px] w-full object-cover "
                />
              </div>
              <div className="absolute bottom-0 left-0 z-[2] px-[1rem] py-[2rem] project_card_content ">
                <h1 className="font-roboto font-extrabold text-[2.5rem] leading-10 ">
                  {pro.name}
                </h1>
                <p className="font-roboto text-[1rem] mt-[0.3rem] ">
                  {pro.description}
                </p>
                <div className="flex flex-wrap gap-[0.5rem] mt-[0.6rem] ">
                  {pro.tags.map(
                    (tag, j) =>
                      tag && (
                        <a
                          key={j}
                          href={tag.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[grey] rounded-[1rem] px-[0.8rem] py-[0.2rem] "
                        >
                          <h3 className="font-roboto text-[0.6rem] ">
                            {tag.name}
                          </h3>
                        </a>
                      )
                  )}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      {/* Pc version */}
      <div className="hidden md:grid md:grid-cols-2 grid-cols-1 gap-x-[2rem] gap-y-[8rem]  ">
        {projectData.map((pro, i) => (
          <a key={i} href={pro.link} target="_blank" rel="noopener noreferrer">
            <div
              className="rounded-[0.5rem]  project_card project_card_hover relative border-[black] "
              style={{ borderWidth: !pro.border ? 0 : "2px" }}
            >
              <div>
                <img
                  src={pro.img}
                  alt=""
                  className="rounded-[0.5rem] h-[350px] w-full object-cover "
                />
              </div>
              <div className="absolute bottom-0 left-0 z-[2] px-[1rem] py-[2rem] project_card_content ">
                <h1 className="font-roboto font-extrabold text-[2.5rem] leading-10 ">
                  {pro.name}
                </h1>
                <p className="font-roboto text-[1rem] mt-[0.3rem] ">
                  {pro.description}
                </p>
                <div className="flex flex-wrap gap-[0.5rem] mt-[0.6rem] ">
                  {pro.tags.map(
                    (tag, j) =>
                      tag && (
                        <a
                          key={j}
                          href={tag.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[grey] rounded-[1rem] px-[0.8rem] py-[0.2rem] "
                        >
                          <h3 className="font-roboto text-[0.6rem] ">
                            {tag.name}
                          </h3>
                        </a>
                      )
                  )}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
