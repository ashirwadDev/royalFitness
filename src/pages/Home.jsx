import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Trainers from "../components/Trainers";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Trainers />
      <Pricing />
      <Contact />
    </>
  );
}
