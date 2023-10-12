"use client";
import { useEffect } from "react";

export default function CssWindowVariables() {
  useEffect(() => {
    function setScroll() {
      let scrollPct =
        window.scrollY / (document.body.clientHeight - window.innerHeight);
      scrollPct = 100 * Math.min(scrollPct, 1);

      document.documentElement.style.setProperty(
        "--scrollPct",
        `${scrollPct}%`
      );
      document.documentElement.style.setProperty(
        "--scrollVh",
        `${scrollPct}vh`
      );
    }

    function setViewport() {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight}px`
      );
      document.documentElement.style.setProperty(
        "--vw",
        `${window.innerWidth}px`
      );
    }

    window.addEventListener("scroll", setScroll);

    return () => {
      window.removeEventListener("scroll", setScroll);
    };
  }, []);

  return <></>;
}
