import ScrollUp from "@/components/Common/ScrollUp";
import { FAQ } from "@/components/FAQ";
import Hero from "@/components/Hero";
import { Pictures } from "@/components/Pictures";
import Restaurants from "@/components/Restaurants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restuache | Main Page",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Restaurants />
      <FAQ />
    </>
  );
}
