import React from "react";
import SectionHeader from "../ui/SectionHeader";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section id="contact" className="mx-12 md:mx-16 lg:mx-28">
      <SectionHeader>Contact</SectionHeader>
      <ContactForm />
    </section>
  );
}

export default Contact;
