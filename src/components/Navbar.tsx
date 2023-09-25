"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto w-full h-20 md:h-28 backdrop-blur-sm bg-background-transparent sticky top-0 z-20 border-b-2 ">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between md:justify-start items-center h-full">
            <Logo />
            <ul className="hidden md:flex text-foreground text-xl">
              <Links />
            </ul>
            <FoldedMenu />
          </div>
        </div>
      </div>
    </>
  );
};

const Links = () => {
  return (
    <>
      <li>
        <NavItem route="/about">About us</NavItem>
      </li>
      <li>
        <NavItem route="/projects">Projects</NavItem>
      </li>
      <li>
        <NavItem route="/contact">Contact</NavItem>
      </li>
    </>
  );
};

const NavItem = (props: { children: React.ReactNode; route: string }) => {
  const pathname = usePathname();
  const isActive = pathname === props.route;

  return (
    <Link href={props.route}>
      <button
        className={`transition  p-4 pl-6    ${
          isActive ? " text-primary" : " text-secondary"
        } hover:text-primary`}
      >
        <span className="font-semibold ">{props.children}</span>
      </button>
    </Link>
  );
};

const FoldedMenu = () => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (show) {
      ref.current.style.gridTemplateRows = ref.current.scrollHeight + "px";
    } else {
      ref.current.style.gridTemplateRows = "0px";
    }

    function closePopup(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) {
        setShow(false);
      }
    }

    document.addEventListener("click", closePopup);
    return () => document.removeEventListener("click", closePopup);
  }, [ref, show]);

  return (
    <div className="relative ">
      <Button
        className={`bg-secondary p-1  ${show ? "" : "md:hidden"}`}
        onClick={() => setShow(!show)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path fill="#fff" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
        </svg>
      </Button>
      <div
        ref={ref}
        onClick={() => setShow(false)}
        className={`grid grid-rows-[0px] transition-all fixed right-4 bg-background overflow-hidden `}
      >
        <div className="rounded w-full h-full border-4 border-secondary py-2">
          <ul className="flex flex-col">
            <Links />
          </ul>
          <div className="h-2" />
        </div>
      </div>
    </div>
  );
};

const Logo = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-x-3 h-16 md:h-20 w-16 md:w-20 mr-4">
      <Link href="/">
        <img src="/images/logo_small.png" alt="logo" className="p-2" />
      </Link>
    </div>
  );
};

export default Navbar;
