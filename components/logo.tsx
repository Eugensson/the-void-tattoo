"use client";

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

export const Logo = () => {
  return (
    <ScrollLink
      smooth
      to="home"
      duration={500}
      delay={50}
      offset={-150}
      className="cursor-pointer"
    >
      <Image
        src="/assets/header/logo.svg"
        alt="Company's logo"
        width={188}
        height={90}
      />
    </ScrollLink>
  );
};
