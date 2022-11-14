import React from "react";
import ButtonPrimary from "../ui/ButtonPrimary";

function ContactForm() {
  return (
    <React.Fragment>
      <div className="flex justify-center items-center">
        <form className="px-10 py-7 w-full max-w-3xl">
          <div className="mb-3 flex flex-col md:flex-row md:justify-between md:gap-2">
            <div className="mb-3 md:mb-0 flex flex-col w-full">
              <input
                className="w-full p-2 bg-darkColorTint text-2xl text-lightGrey rounded-md border-darkColor border-2 focus:border-accentPrimary outline-none transition duration-300"
                type="text"
                placeholder="Name"
              ></input>
            </div>

            <div className="flex flex-col w-full">
              <input
                className="w-full p-2 bg-darkColorTint text-2xl text-lightGrey rounded-md border-darkColor border-2 focus:border-accentPrimary outline-none transition duration-300"
                type="email"
                placeholder="Email"
              ></input>
            </div>
          </div>
          <div className="flex flex-col mb-3">
            <input
              className="w-full p-2 bg-darkColorTint text-2xl text-lightGrey rounded-md border-darkColor border-2 focus:border-accentPrimary outline-none transition duration-300"
              type="text"
              placeholder="Subject"
            ></input>
          </div>

          <div className="flex flex-col mb-3">
            <textarea
              className="w-full p-2 bg-darkColorTint text-2xl text-lightGrey rounded-md border-darkColor border-2 focus:border-accentPrimary outline-none transition duration-300"
              rows="5"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <ButtonPrimary>Send Message</ButtonPrimary>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default ContactForm;
