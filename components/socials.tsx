import Link from "next/link";

import { socialData } from "@/lib/data";

export const Socials = () => {
  return (
    <ul className="flex items-center justify-center gap-x-6">
      {socialData.map(({ href, icon: Icon }) => (
        <li key={href}>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${href} link`}
            className="hover:text-red-500 transition-colors duration-300"
          >
            <Icon size={22} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
