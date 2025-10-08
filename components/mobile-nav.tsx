"use client";

import { Link as ScrollLink } from "react-scroll";

import { Socials } from "@/components/socials";

import { navData } from "@/lib/data";

interface MobileNavProps {
  containerStyles?: string;
  listStyles?: string;
  linkStyles?: string;
  socialsStyles?: string;
  setMobileNav?: () => void;
}

export const MobileNav = ({
  containerStyles,
  listStyles,
  linkStyles,
  socialsStyles,
  setMobileNav,
}: MobileNavProps) => {
  return (
    <nav className={containerStyles}>
      <ul className={listStyles}>
        {navData.map(({ name, path, offset }) => (
          <li key={name}>
            <ScrollLink
              spy
              smooth
              to={path}
              duration={500}
              delay={50}
              offset={offset}
              className={linkStyles}
              activeClass="active"
              onClick={setMobileNav}
            >
              {name}
            </ScrollLink>
          </li>
        ))}
      </ul>
      <div className={socialsStyles}>
        <Socials />
      </div>
    </nav>
  );
};
