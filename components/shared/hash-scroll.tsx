"use client";

import { useEffect } from "react";

export function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) return;

    const element = document.getElementById(hash.substring(1));

    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, []);

  return null;
}