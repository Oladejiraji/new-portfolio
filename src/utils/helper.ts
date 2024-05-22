import { tagsData } from "../constants/static";

export const findTag = (
  tag: string
): { id: number; name: string; link: string } | undefined => {
  const returnTag = tagsData.find(
    (el) => el.name.toLowerCase() === tag.toLowerCase()
  );
  return returnTag;
};
