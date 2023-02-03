import React from "react";

function ContactForm() {
  return (
    <React.Fragment>
      <div className="flex flex-col justify-center items-center py-24 ">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-accentPrimary">
          Send Me a Message
        </h2>
        <form
          className="px-0 md:px-10 py-7 w-full max-w-4xl"
          name="contact"
          action="https://formsubmit.co/7ceef148df559d1e3430a624174100fd"
          method="POST"
        >
          <div className="mb-3 flex flex-col md:flex-row md:justify-between md:gap-2">
            <div className="mb-3 md:mb-0 flex flex-col w-full">
              <input
                className="w-full p-2 bg-darkColorTint text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-lightGrey rounded-md border-darkColor border-2 focus:border-accentPrimary outline-none transition duration-300"
                type="text"
                placeholder="Name"
                name="Name"
                required
              ></input>
            </div>

            <div className="flex flex-col w-full">
              <input
                className="w-full p-2 bg-darkColorTint text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-lightGrey rounded-md border-darkColor border-2 focus:border-accentPrimary outline-none transition duration-300"
                type="email"
                placeholder="Email"
                name="Email"
                required
              ></input>
            </div>
          </div>
          <div className="flex flex-col mb-3">
            <input
              className="w-full p-2 bg-darkColorTint text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-lightGrey rounded-md border-darkColor border-2 focus:border-accentPrimary outline-none transition duration-300"
              type="text"
              placeholder="Subject"
              name="Subject"
            ></input>
          </div>

          <div className="flex flex-col mb-3">
            <textarea
              className="w-full p-2 bg-darkColorTint text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-lightGrey rounded-md border-darkColor border-2 focus:border-accentPrimary outline-none transition duration-300"
              rows="5"
              placeholder="Message"
              name="Message"
              required
            ></textarea>
          </div>
          <input
            type="hidden"
            name="_next"
            value="https://seankennedy.netlify.app/thankyou"
          />
          <div className="flex justify-end">
            <button className="flex items-center justify-center gap-2 border-accentPrimary border rounded-lg px-4 py-2 2xl:px-6 2xl:py-3 2xl:text-3xl text-accentPrimary hover:border-darkColor hover:text-white hover:bg-accentPrimary transition duration-300 cursor-pointer">
              Submit
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default ContactForm;
