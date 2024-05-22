import React from "react";

const SectionHeader = ({
  padLeft = 0,
  text,
}: {
  padLeft: number;
  text: string;
}) => {
  return (
    <div
      style={{ paddingInline: `${padLeft}px` }}
      className="pb-[80px] flex items-center gap-2 "
    >
      <div className="flex gap-1">
        <div className="w-[5px] h-[1px] bg-primary " />
        <div className="w-[5px] h-[1px] bg-primary " />
        <div className="w-[30px] h-[1px] bg-primary " />
      </div>
      <h1 className="font-font1 text-[1rem] font-regular text-primary  ">
        {text}
      </h1>
    </div>
  );
};

export default SectionHeader;
