import React from "react";
import SectionHeader from "../ui/SectionHeader";
import ContactForm from "./ContactForm";
import { useState, useEffect, useRef } from "react";

function Contact() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.2 }
    );
    observer.observe(sectionRef.current);

    return () => {
      observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="mx-12 md:mx-16 lg:mx-28">
      <div
        className={`${
          isVisible ? "translate-y-0 opacity-1" : "translate-y-20 opacity-0"
        } transition duration-700`}
      >
        <SectionHeader>Contact</SectionHeader>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
