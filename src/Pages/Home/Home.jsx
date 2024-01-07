//Utils
import React, { useRef } from "react";
import Hero from "./Hero";
import Partnership from "./Partnership";
import Content from "./Content";
import FAQ from "./FAQ";
import Contact from "./Contact";

export default function Home() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Hero />
      <Partnership />
      <Content scrollToContact={scrollToContact} />
      <div ref={contactRef}>
        <Contact />
      </div>
      <FAQ />
    </div>
  );
}
