"use client";
import { useEffect } from "react";
import Image from "next/image";
import ButtonLink from "@/components/buttons/ButtonLink";
import ButtonClick from "@/components/buttons/ButtonClick";

export default function Error({ error, reset }) {
  useEffect(() => {
    // 1. Log the error
    console.error(error);
  }, [error]);
  return (
    <>
      <main className="flex-grow flex flex-col px-10 items-center justify-center text-center">
        <h1 className="font-sans font-extrabold pb-4 text-5xl tracking-tight">Uh Oh!</h1>
        <p className="font-serif font-light text-xl tracking-wide mb-6">Our web app is having a technical tantrum 😵, <br />
        but it’ll settle down shortly!</p>
        <ButtonClick onClick={() => reset()} content={"Refesh"} />
      </main>
    </>
  );
}
