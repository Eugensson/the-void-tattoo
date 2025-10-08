"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { footerData } from "@/lib/data";
import { fadeIn, staggerContainer } from "@/lib/variants";

export const Footer = () => {
  const {
    about: {
      title,
      subtitle,
      address: { icon: IconAddress, name },
      phone: { icon: IconPhone, label, number },
      email: { icon: IconEmail, address },
    },
    links: { title: linksTitle, items: linksItems },
    program: { title: programTitle, items: programItems },
    newsletter: {
      title: newsletterTitle,
      subtitle: newsletterSubtitle,
      form: { placeholder, icon: Icon },
    },
  } = footerData;

  return (
    <footer className="section bg-dark">
      <div className="container mx-auto">
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14 text-white"
        >
          <motion.li
            variants={fadeIn("up")}
            className="flex-1 flex flex-col gap-y-6"
          >
            <p className="text-xl font-primary uppercase tracking-[0.08em]">
              {title}
            </p>
            <p className="text-sm leading-relaxed text-[#dbdbdb]">{subtitle}</p>
            <ul className="flex flex-col gap-y-4 font-semibold text-white/50">
              <li>
                <address className="flex items-center gap-x-3 not-italic">
                  <IconAddress />
                  {name}
                </address>
              </li>
              <li>
                <Link
                  href={`tel:${number}`}
                  rel="noreferrer noopener"
                  aria-label="Call to phone"
                  className="flex items-center gap-x-3 hover:text-white transition"
                >
                  <IconPhone />
                  {label}
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:${address}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Send email"
                  className="flex items-center gap-x-3 hover:text-white transition"
                >
                  <IconEmail />
                  {address}
                </Link>
              </li>
            </ul>
          </motion.li>
          <motion.li
            variants={fadeIn("up")}
            className="flex-1 flex flex-col xl:items-center"
          >
            <div>
              <p className="text-xl font-primary uppercase tracking-[0.08em] mb-6">
                {linksTitle}
              </p>
              <ul className="flex flex-col gap-y-4 text-white/50">
                {linksItems.map(({ href, name }, index) => (
                  <li key={index}>
                    <Link
                      href={href}
                      className="text-inherit hover:text-white transition"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
          <motion.li variants={fadeIn("up")} className="flex-1">
            <p className="font-primary text-xl uppercase tracking-[0.08em] mb-6">
              {programTitle}
            </p>
            <ul className="flex flex-col gap-y-4 text-white/50">
              {programItems.map(({ name }, index) => (
                <li key={index}>
                  <p>{name}</p>
                </li>
              ))}
            </ul>
          </motion.li>
          <motion.li variants={fadeIn("up")} className="flex-1">
            <p className="font-primary text-xl uppercase tracking-[0.08em] mb-6">
              {newsletterTitle}
            </p>
            <p className="text-sm leading-relaxed mb-9 text-white/50">
              {newsletterSubtitle}
            </p>
            <form className="flex justify-between items-start border-b border-[#b6b6b6]">
              <input
                type="text"
                placeholder={placeholder}
                className="outline-none placeholder:text-base italic placeholder:capitalize bg-transparent pb-2"
              />
              <button type="submit">
                <Icon size={24} />
              </button>
            </form>
          </motion.li>
        </motion.ul>
      </div>
    </footer>
  );
};
