"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const home = pathName === "/";

  return (
    <>
      {!home && (
        <div className="h-[var(--navbar-height)] md:h-[var(--navbar-height-md)]" />
      )}
      <div
        className={`${
          home ? "" : "fixed"
        } grid transition duration-500 w-full grid-rows-[var(--navbar-height)]  md:grid-rows-[var(--navbar-height-md)]
        overflow-visible  bg-background/95  top-0 z-20 border-b-[calc(0px+var(--navBorder))] border-secondary`}
      >
        <div className="flex justify-between md:justify-start relative items-center h-full px-4">
          <div className="">
            <Logo visible={true} />
          </div>

          <ul
            className={`w-full  mx-auto  hidden md:flex text-foreground text-xl ${
              home ? "" : "max-w-[calc(1200px+96px)]"
            }`}
          >
            <Links />
          </ul>
          <FoldedMenu />
        </div>
      </div>
    </>
  );
};

const Links = () => {
  return (
    <>
      <NavItem route="/about">About us</NavItem>
      <NavItem route="/services">Services</NavItem>
      {/* <NavItem route="/projects">Projects</NavItem> */}
      <NavItem route="/contact">Contact</NavItem>
    </>
  );
};

const NavItem = (props: { children: React.ReactNode; route: string }) => {
  const pathname = usePathname();
  const isActive = pathname === props.route;

  return (
    <Link href={props.route}>
      <button
        className={`transition  p-4 md:px-8    ${
          isActive
            ? " text-primary underline underline-offset-4"
            : " text-secondary"
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
        className={`bg-background hover:bg-secondary focus:bg-secondary p-1 mt-2 w-12 h-12 md:hidden rounded-full fill-secondary hover:fill-background focus:fill-background`}
        onClick={() => {
          setShow(!show);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
        </svg>
      </Button>
      <div
        ref={ref}
        onClick={() => setShow(false)}
        className={`grid grid-rows-[0px] transition-all fixed top-20 right-4 bg-background overflow-hidden`}
      >
        <div className="rounded w-full h-full border border-secondary py-2">
          <ul className="flex flex-col">
            <Links />
          </ul>
          <div className="h-2" />
        </div>
      </div>
    </div>
  );
};

const Logo = ({ visible }: { visible: boolean }) => {
  return (
    <div className="flex items-center gap-x-3 h-16 md:h-20 w-16 md:w-20 mr-4">
      <Link href="/" className={visible ? "opacity-100" : "opacity-0"}>
        <img
          src="/images/logo_small.svg"
          alt="logo"
          className="p-2 h-24 w-24 [&>path]:bg-gray-300"
        />
      </Link>
    </div>
  );
};

export default Navbar;
export { Links };
