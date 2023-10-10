"use client";

import { useEffect, useRef } from "react";
import Logo from "@/svg/skyline.svg";

interface Props {
  children: React.ReactNode;
}

export default function Background({ children }: Props) {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const skylineRef = useRef<HTMLDivElement>(null);
  const tracesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll(e: any) {
      if (!skylineRef.current || !backgroundRef.current || !tracesRef.current)
        return;

      const pctScroll =
        window.scrollY / (document.body.clientHeight - window.innerHeight);

      const bcr = skylineRef.current.getBoundingClientRect();

      const height = skylineRef.current.clientHeight - 2000;
      const maxShift = window.innerHeight - (height + bcr.top);
      const shift = Math.min(1, pctScroll) * maxShift;

      const darken = Math.min(100, 120 * (pctScroll - 0.2));
      //containerRef.current.style.background = `hsl(0, 0%, ${100 - darken}%)`;
      skylineRef.current.style.transform = `translateY(${shift}px) `;
      tracesRef.current.style.transform = `translateY(-${
        Math.max(0, pctScroll - 0.8) * 50
      }%) translateX(${Math.max(0, pctScroll - 0.8) * 10}%)`;
      tracesRef.current.style.opacity = String(Math.max(0, pctScroll * 2 - 1));
      backgroundRef.current.style.background = `linear-gradient(to bottom, hsl(0, 
        0%, ${100 - Math.max(0, darken * 3 - 200)}%), hsl(0, 10%, ${
        100 - Math.max(0, darken * 2 - 100)
      }%)`;
    }

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [backgroundRef, skylineRef, tracesRef]);

  return (
    <div className="relative h-full flex flex-col w-full z-0">
      <div ref={backgroundRef} className="fixed inset-0"></div>
      <div className="fixed left-0 right-0 flex flex-col overflow-visible z-50">
        <div
          ref={skylineRef}
          className="relative flex w-[120%] flex-col bg-gradient-to-t from-slate-400 to-transparent"
        >
          <div className="relative w-full max-w-[800px] ml-auto ">
            <Logo className="relative fill-secondary w-full translate-y-[20px] z-40" />
            <div
              ref={tracesRef}
              className="absolute w-full top-0 left-0 -z-10 opacity-0"
            >
              <Logo className="w-full h-full fill-primary translate-y-[2] " />
              <div className="relative h-40 z-0 bg-primary" />
            </div>
          </div>
          <div className="bg-secondary h-[2000px]" />
        </div>
      </div>
      <div className="relative pt-[0vh]">
        <div className="relative z-50">{children} </div>
        <div className="relative z-10 pb-[60vh] lg:pb-[50vh] pt-[40vh] text-white p-5 text-center font-bold text-3xl lg:text-4xl text-balance ">
          <h2>Uncover the digital traces of society</h2>
        </div>
      </div>
    </div>
  );
}
