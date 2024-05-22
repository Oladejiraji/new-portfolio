import React, { useRef, useEffect } from "react";

const Mouse = () => {
  const curRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    document.addEventListener("mousemove", moveMouse);
    document.addEventListener("mouseover", mouseOver);
    return () => {
      document.removeEventListener("mousemove", moveMouse);
      document.removeEventListener("mouseover", mouseOver);
    };
  }, []);
  const moveMouse = (e: MouseEvent) => {
    if (!curRef.current) return;
    curRef.current.style.left = e.pageX + "px";
    curRef.current.style.top = e.pageY + "px";
    curRef.current.style.display = "block";
  };
  const mouseOver = () => {
    const activeClassList = curRef.current?.classList;
    console.log(activeClassList);
    if (activeClassList && activeClassList.contains("mouse_comp")) {
      curRef.current?.classList.add("custom_mouse_active");
    } else {
      curRef.current?.classList.remove("custom_mouse_active");
    }
  };
  return <div ref={curRef} className="custom_mouse"></div>;
};

export default Mouse;
