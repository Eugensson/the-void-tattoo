import {
  RiFacebookLine,
  RiTwitterXLine,
  RiInstagramLine,
  RiYoutubeLine,
  RiPinterestLine,
} from "react-icons/ri";

import { NavItem, Social } from "@/types";

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
