import {
  RiFacebookLine,
  RiTwitterXLine,
  RiInstagramLine,
  RiYoutubeLine,
  RiPinterestLine,
} from "react-icons/ri";

import { GalleryItem, NavItem, Social } from "@/types";

export const navData: NavItem[] = [
  { name: "Home", path: "home", offset: -150 },
  { name: "About", path: "about", offset: 0 },
  { name: "Gallery", path: "gallery", offset: 0 },
  { name: "Interview", path: "interview", offset: 0 },
  { name: "Articles", path: "articles", offset: 0 },
  { name: "Contact", path: "contact", offset: 0 },
];

export const socialData: Social[] = [
  { href: "https://www.x.com", icon: RiTwitterXLine },
  { href: "https://www.youtube.com/", icon: RiYoutubeLine },
  { href: "https://www.facebook.com", icon: RiFacebookLine },
  { href: "https://www.instagram.com/", icon: RiInstagramLine },
  { href: "https://www.pinterest.com/", icon: RiPinterestLine },
];

export const galleryData: GalleryItem[] = [
  {
    src: "/assets/gallery/1.png",
    original: "/assets/gallery/1.png",
    width: 465,
    height: 412,
  },
  {
    src: "/assets/gallery/2.png",
    original: "/assets/gallery/2.png",
    width: 465,
    height: 540,
  },
  {
    src: "/assets/gallery/3.png",
    original: "/assets/gallery/3.png",
    width: 465,
    height: 412,
  },
  {
    src: "/assets/gallery/4.png",
    original: "/assets/gallery/4.png",
    width: 465,
    height: 540,
  },
  {
    src: "/assets/gallery/5.png",
    original: "/assets/gallery/5.png",
    width: 465,
    height: 540,
  },
  {
    src: "/assets/gallery/6.png",
    original: "/assets/gallery/6.png",
    width: 464,
    height: 412,
  },
  {
    src: "/assets/gallery/7.png",
    original: "/assets/gallery/7.png",
    width: 465,
    height: 540,
  },
  {
    src: "/assets/gallery/8.png",
    original: "/assets/gallery/8.png",
    width: 465,
    height: 412,
  },
];
