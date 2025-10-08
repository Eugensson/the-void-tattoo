import { IconType } from "react-icons";

export type NavItem = {
  name: string;
  path: string;
  offset: number;
};

export type Social = {
  href: string;
  icon: IconType;
};

export type GalleryItem = {
  src: string;
  original: string;
  width: number;
  height: number;
};

export type Skill = {
  label: string;
  target: number;
};
