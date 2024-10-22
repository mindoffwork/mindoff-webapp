"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const SplashScreen = () => {
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
        <div className={`fixed inset-0 flex flex-col items-center justify-center bg-fawn z-50 transform transition-transform duration-300`} aria-hidden="true">
          <figure className={`transform transition-transform duration-300 ${zoomOut && "scale-0"}`}>
            <Image src="/images/MindOff_Logo_Full.svg" alt="Mind Off Logo" className="w-48 h-auto animate-heartbeat" width={192.1} height={73.1} />
            <figcaption className="sr-only">Mind Off Logo</figcaption>
          </figure>
          <noscript>
            <div className="mx-auto text-center font-serif text-xl mt-6">
            Oops! JavaScript is disabled. <br/>Enable it to get Mindoff working! 😊
            </div>
          </noscript>
        </div>
      )}
    </>
  );
};

export default SplashScreen;
