import { ParticleComp } from "../molecules";
import { Explore, ExternalLink, HoverButton } from "../atoms";

const Showcase = () => {
  return (
    <section className="pt-[110px] md:pt-[200px] relative h-screen max-w-[1200px] mx-auto px-[1rem] sm:px-[2rem] lg:px-[3rem] ">
      <ParticleComp />
      <h1 className="font-font1 text-[2rem] md:text-[4rem] pb-[1rem] leading-[3rem] ">
        Hi, I'm Raji Oladeji
      </h1>
      <div className="w-full md:max-w-[75%]">
        <p className="text-[grey] text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] font-roboto ">
          I’m a versatile software engineer with a passion for crafting seamless
          digital experiences across frontend, backend, and mobile platforms
          using JavaScript and its frameworks. With a keen eye for detail and a
          dedication to staying updated with the latest technologies, I strive
          to deliver high-quality solutions that exceed expectations.
        </p>
      </div>
      <div className="mt-[2rem] md:mt-[3rem] ">
        <ExternalLink href="/oladeji.pdf">
          <HoverButton>
            <p className="text-[0.9rem] font-roboto font-bold ">RESUME</p>
          </HoverButton>
        </ExternalLink>
      </div>
      <Explore />
    </section>
  );
};

export default Showcase;
