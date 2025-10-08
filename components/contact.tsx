"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { fadeIn } from "@/lib/variants";
import { contactData } from "@/lib/data";

export const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="flex flex-col xl:flex-row gap-y-16">
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1"
          >
            <h2 className="h2">Get in touch with me:</h2>
            <ul className="flex flex-col xl:flex-row gap-x-5 gap-y-8 xl:gap-y-0">
              {contactData.map(
                (
                  {
                    title,
                    subtitle,
                    address: { icon: IconAdress, name },
                    phone: { icon: IconPhone, number },
                    email: { icon: IconEmail, address },
                    link,
                  },
                  index
                ) => (
                  <li key={index}>
                    <p className="font-primary uppercase font-medium text-xl mb-3">
                      {title}
                    </p>
                    <p className="mb-6 text-sm text-[#333333] leading-[187%] tracking-[0.02em]">
                      {subtitle}
                    </p>
                    <ul className="flex flex-col gap-y-3 mb-8 text-sm">
                      <li>
                        <address className="flex items-center gap-2.5 font-medium not-italic">
                          <IconAdress />
                          {name}
                        </address>
                      </li>
                      <li>
                        <Link
                          href={`tel:${number}`}
                          rel="noopener noreferrer"
                          target="_blank"
                          aria-label={`${number} link`}
                          className="flex items-center gap-2.5 font-medium hover:text-red-500 transition-colors duration-300"
                        >
                          <IconPhone />
                          {number}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`mailto:${address}`}
                          rel="noopener noreferrer"
                          target="_blank"
                          aria-label={`${address} link`}
                          className="flex items-center gap-2.5 font-medium hover:text-red-500 transition-colors duration-300"
                        >
                          <IconEmail />
                          {address}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className="pb-1 font-medium border-b border-dark hover:text-red-500 transition-colors duration-300"
                        >
                          {link}
                        </Link>
                      </li>
                    </ul>
                  </li>
                )
              )}
            </ul>
          </motion.div>
          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 flex justify-center items-center xl:pl-10"
          >
            <form className="flex flex-col gap-y-10 w-full">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Write your name here"
                className="input"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Write your email address"
                className="input"
              />
              <textarea
                name="message"
                id="message"
                className="textarea"
                placeholder="Write your messages here"
              />
              <button type="button" className="btn btn-sm btn-dark self-start">
                Send it
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
