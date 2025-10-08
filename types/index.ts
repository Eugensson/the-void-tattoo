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
