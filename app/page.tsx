import ScrollUp from "@/components/Common/ScrollUp";
import { FAQ } from "@/components/FAQ";
import Hero from "@/components/Hero";
import Restaurants from "@/components/Restaurants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
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
