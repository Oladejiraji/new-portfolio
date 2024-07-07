import { Dispatch, SetStateAction, useEffect } from "react";
import { useInterval } from "../../hooks/useInterval";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const content = [
  "I am an Engineer",
  "I am a Developer",
  "I am a Problem Solver",
];

interface IProps {
  setCountDown: Dispatch<SetStateAction<number>>;
  countdown: number;
}

const Loading = ({ countdown, setCountDown }: IProps) => {
  const { width } = useWindowDimensions();
  useInterval(
    () => {
      setCountDown((prev) => prev + 1);
    },
    countdown < 10 ? 500 : null
  );

  useEffect(() => {
    const sentences = document.querySelectorAll(".sentence");
    let currentIndex = 0;

    function rotateSentences() {
      const currentSentence = sentences[currentIndex];
      const nextIndex = (currentIndex + 1) % sentences.length;
      const nextSentence = sentences[nextIndex];

      currentSentence.classList.add("exit");
      currentSentence.classList.remove("active");

      nextSentence.classList.add("active");
      nextSentence.classList.remove("exit");

      currentIndex = nextIndex;
    }

    sentences[currentIndex].classList.add("active");

    setInterval(rotateSentences, 1500);
  }, []);

  return (
    <div className="">
      <div className="relative flex flex-col h-screen justify-center pt-[20px] pb-[100px] md:pb-[40px] ">
        <div className="px-6 py-6 ">
          <h1 className="font-headerFont text-[2rem] ">RO</h1>
        </div>
        <div className="h-screen flex items-center justify-center">
          <div className="overflow-hidden sentence-container">
            {content.map((sentence, i) => (
              <h3
                className="font-bold text-[2rem] md:text-[5rem] font-font2 sentence text-center "
                key={i}
              >
                {sentence}
              </h3>
            ))}
          </div>
        </div>
        <div className=" w-full">
          <div className="flex justify-center items-center">
            <div>
              <p className=" font-bold font-roboto pb-3">
                Loading
                <sup className="pl-1">({countdown * 10}%)</sup>
              </p>
            </div>
          </div>
          <div
            className=" h-[6px] bg-[white] transition-all"
            style={{ width: (countdown / 10) * width }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
