"use client"; // Enable client-side rendering

import React, { useEffect, useState } from "react";
import Image from "next/image";

const SplashScreen = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);
  const [zoomOut, setZoomOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setZoomOut(true);
      const hideTimer = setTimeout(() => {
        setShowSplash(false);
      }, 300);

      return () => clearTimeout(hideTimer);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && (
        <section
          className={`fixed inset-0 flex items-center justify-center bg-fawn z-50 transform transition-transform duration-300 ${
            zoomOut ? "scale-0" : "scale-100"
          }`}
        >
          <figure>
            <Image
              src="/images/MindOff_Logo_Full.svg"
              alt="Mind Off Logo"
              className="w-48 h-auto"
              width={1921}
              height={731}
            />
            <figcaption className="sr-only">Mind Off Logo</figcaption>
          </figure>
        </section>
      )}
      {!showSplash && children}
    </>
  );
};

export default SplashScreen;
