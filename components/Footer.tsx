import clsx from "clsx";
import React from "react";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import { Github, Twitter, Linkedin } from "lucide-react";

export default async function Footer() {
  const settings = {
    data: {
      name: "Aayan Khan",
      nav_item: [
        { label: "Home", link: "/" },
        { label: "About", link: "/about" },
        { label: "Projects", link: "/projects" },
      ],
      github_link: "https://github.com/aayank13",
      twitter_link: "https://x.com/aayan_k14",
      linkedin_link: "https://www.linkedin.com/in/aayank13/",
    },
  };

  return (
    <Bounded as="footer" className="text-slate-600">
      <div className="container mx-auto mt-20 flex flex-col items-center justify-between gap-6 py-8 sm:flex-row ">
        <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tighter text-slate-600 transition-colors duration-150 hover:text-yellow-400"
          >
            {settings.data.name}
          </Link>
          <span
            className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
            aria-hidden={true}
          >
            /
          </span>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {settings.data.name}
          </p>
        </div>

        <nav className="navigation" aria-label="Footer Navigation">
          <ul className="flex items-center gap-1">
            {settings.data.nav_item.map(({ link, label }, index) => (
              <React.Fragment key={label}>
                <li>
                  <Link
                    href={link}
                    className={clsx(
                      "group relative block overflow-hidden  rounded px-3 py-1 text-base font-bold text-slate-400 transition-colors duration-150 hover:text-yellow-400",
                    )}
                  >
                    {label}
                  </Link>
                </li>
                {index < settings.data.nav_item.length - 1 && (
                  <span
                    className="text-4xl font-thin leading-[0] text-slate-400"
                    aria-hidden="true"
                  >
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>

        <div className="socials inline-flex justify-center sm:justify-end">
          {settings.data.github_link && (
            <Link
              href={settings.data.github_link}
              className="p-2 text-2xl text-slate-500 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label={`${settings.data.name} on GitHub`}
            >
              <Github />
            </Link>
          )}
          {settings.data.twitter_link && (
            <Link
              href={settings.data.twitter_link}
              className="p-2 text-2xl text-slate-500 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label={`${settings.data.name} on Twitter`}
            >
              <Twitter />
            </Link>
          )}
          {settings.data.linkedin_link && (
            <Link
              href={settings.data.linkedin_link}
              className="p-2 text-2xl text-slate-500 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label={`${settings.data.name} on LinkedIn`}
            >
              <Linkedin />
            </Link>
          )}
        </div>
      </div>
    </Bounded>
  );
}