"use client";

import { TiThMenuOutline } from "react-icons/ti";
import { useCallback, useEffect, useState } from "react";

import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { Socials } from "@/components/socials";
import { MobileNav } from "@/components/mobile-nav";

import { cn } from "@/lib/utils";

export const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [navMobile, setNavMobile] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    setIsActive(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-10 max-w-480 w-full mx-auto transition-all duration-100 bg-white",
        isActive ? "h-25 lg:h-27.5 shadow-lg" : "h-30 lg:h-37.5"
      )}
    >
      <div className="pl-12.5 pr-15 flex justify-between items-center h-full">
        <Logo />
        <Nav
          containerStyles="hidden xl:flex"
          listStyles="flex items-center gap-x-12"
          linkStyles="link hover:border-b-2 hover:border-dark"
        />
        <button
          type="button"
          onClick={() => setNavMobile(!navMobile)}
          className="xl:hidden absolute right-[5%] bg-dark text-white p-2 rounded-md cursor-pointer"
        >
          <TiThMenuOutline size={30} />
        </button>
        <MobileNav
          containerStyles={cn(
            navMobile
              ? "max-h-full pointer-events-auto"
              : "max-h-0 overflow-hidden pointer-events-none",
            isActive ? "top-25 lg:top-27.5" : "top-30 lg:top-37.5",
            "fixed left-0 -z-10 w-full h-full transition-all duration-300 bg-white"
          )}
          listStyles={cn(
            "my-30 py-6 flex flex-col justify-center items-center gap-y-6",
            navMobile
              ? "opacity-100 transition-opacity duration-700"
              : "opacity-0"
          )}
          linkStyles="text-2xl font-primary uppercase"
          socialsStyles={cn(
            navMobile
              ? "opacity-100 transition-opacity duration-700"
              : "opacity-0"
          )}
          setMobileNav={() => setNavMobile(false)}
        />
        <div className="hidden xl:flex">
          <Socials />
        </div>
      </div>
    </header>
  );
};
