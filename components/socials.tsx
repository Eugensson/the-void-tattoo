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
            className="hover:text-red transition-colors duration-300"
          >
            <Icon size={24} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
