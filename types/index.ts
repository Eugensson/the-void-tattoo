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

export type Testimonial = {
  id: string;
  message: string;
  name: string;
  occupation: string;
  icon: IconType;
};

export type ContactItem = {
  title: string;
  subtitle: string;
  address: {
    icon: IconType;
    name: string;
  };
  phone: {
    icon: IconType;
    label: string;
    number: string;
  };
  email: {
    icon: IconType;
    address: string;
  };
  link: string;
};
