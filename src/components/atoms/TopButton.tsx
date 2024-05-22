import React, { useRef, useEffect } from "react";

const TopButton = () => {
  // Set useRef
  const topRef = useRef<HTMLDivElement | null>(null);

  // Scroll Function
  const topScroll = () => {
    const duration = 1000;
    const start = window.pageYOffset;
    const distance = -start;
    let startTime: null | number = null;

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, start, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t * t + b;
      t -= 2;
      return (-c / 2) * (t * t * t * t - 2) + b;
    }

    requestAnimationFrame(animation);
  };

  // Event listener function
  const handleScroll = () => {
    if (!topRef.current) return null;
    if (window.scrollY > 500) {
      topRef.current.style.display = "flex";
    } else if (window.scrollY <= 500) {
      topRef.current.style.display = "none";
    }
  };

  // Set scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      onClick={topScroll}
      ref={topRef}
      className="fixed right-[50px] bottom-[50px] bg-[#333] cursor-pointer p-[0.9rem] rounded-full hidden shadow-sm "
    >
      <img src="/up.png" className="w-[40px] h-[40px] " alt="top button" />
    </div>
  );
};

export default TopButton;
