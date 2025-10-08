"use client";

import { Link as ScrollLink } from "react-scroll";

import { navData } from "@/lib/data";

interface NavProps {
  containerStyles?: string;
  listStyles?: string;
  linkStyles?: string;
  setMobileNav?: () => void;
}

export const Nav = ({
  containerStyles,
  listStyles,
  linkStyles,
  setMobileNav,
}: NavProps) => {
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
    </nav>
  );
};
