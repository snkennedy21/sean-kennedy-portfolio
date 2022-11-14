import React from "react";
import SectionHeader from "../ui/SectionHeader";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section id="contact" className="mx-16 lg:mx-28 pb-80">
      <SectionHeader>Contact</SectionHeader>
      <ContactForm />
    </section>
  );
}

export default Contact;
