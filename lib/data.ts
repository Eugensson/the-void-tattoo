import {
  RiFacebookLine,
  RiTwitterXLine,
  RiInstagramLine,
  RiYoutubeLine,
  RiPinterestLine,
} from "react-icons/ri";
import { BiSolidQuoteLeft } from "react-icons/bi";

import { GalleryItem, NavItem, Skill, Social, Testimonial } from "@/types";

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

export const skillsData: Skill[] = [
  { label: "Full Body Tattoo", target: 90 },
  { label: "Safely Piercing", target: 80 },
  { label: "Full Color Tattoo", target: 75 },
  { label: "Temporary Tattoo", target: 95 },
];

export const testimonialData: Testimonial[] = [
  {
    id: "1",
    message:
      "The entire team is incredibly professional and welcoming. They listened carefully to my ideas and turned them into an amazing tattoo. The studio feels clean, safe, and inspiring—definitely a place where creativity meets perfection.",
    name: "Jack Geoffrey",
    occupation: "Tattoo Artist",
    icon: BiSolidQuoteLeft,
  },
  {
    id: "2",
    message:
      "I was nervous about getting my first tattoo, but the artists here made me feel completely at ease. They explained every step, kept everything spotless, and the final result was even better than I imagined. Highly recommended!",
    name: "Douglas Hane",
    occupation: "Tattoo Artist",
    icon: BiSolidQuoteLeft,
  },
  {
    id: "3",
    message:
      "From the first consultation to the final touch, everything was flawless. The artists take time to understand your vision and execute it with precision. The attention to detail and atmosphere here are truly unmatched.",
    name: "Megan Lowe",
    occupation: "Model & Influencer",
    icon: BiSolidQuoteLeft,
  },
  {
    id: "4",
    message:
      "Absolutely love my tattoo! The design came out better than expected, and the artist was so patient and talented. You can tell they really care about their clients and the quality of their work. I’ll definitely come back.",
    name: "Chris Nolan",
    occupation: "Musician",
    icon: BiSolidQuoteLeft,
  },
  {
    id: "5",
    message:
      "A great experience from start to finish. The staff were friendly, the studio spotless, and the artistry outstanding. They perfectly captured what I wanted and made me feel comfortable the entire time. True professionals!",
    name: "Sophie Turner",
    occupation: "Creative Director",
    icon: BiSolidQuoteLeft,
  },
  {
    id: "6",
    message:
      "Professional, creative, and highly skilled—this place is a gem! The artists helped refine my concept into something truly personal and beautiful. I’m thrilled with the result and proud to wear their art on my skin.",
    name: "Michael Davis",
    occupation: "Photographer",
    icon: BiSolidQuoteLeft,
  },
];
