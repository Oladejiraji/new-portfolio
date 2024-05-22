const footerLinks = [
  {
    id: 1,
    acc: "Linkedin link",
    img: "/linkedin.png",
    link: "https://www.linkedin.com/in/oladeji-raji-7851551b9/",
  },
  {
    id: 2,
    acc: "Twitter link",
    img: "/twitter.png",
    link: "https://www.linkedin.com/in/oladeji-raji-7851551b9/",
  },
  {
    id: 3,
    acc: "Instagram link",
    img: "/instagram.png",
    link: "https://www.linkedin.com/in/oladeji-raji-7851551b9/",
  },
];

const Footer = () => {
  return (
    <footer className="  py-[2rem] bg-[#333] ">
      <div className="flex items-center justify-between max-w-[1200px] mx-auto px-[1rem] sm:px-[2rem] lg:px-[3rem]">
        <div className="flex items-center gap-10">
          {footerLinks.map((link, i) => (
            <a
              key={i}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <img src={link.img} alt={link.acc} className="w-[20px] h-auto" />
            </a>
          ))}
        </div>
        <div>
          <a
            href="mailto:rajioladeji2@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <p className="font-roboto">rajioladeji2@gmail.com</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
