import React from "react";

const ContactForm = () => {
  return (
    <section className="body-font relative bg-gray-300 text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-2xl font-medium sm:text-3xl">
            Contact Us
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Feel free to reach out to us! Whether you have a question, feedback,
            or a collaboration proposal, we love to hear from you.
          </p>
        </div>

        <div className="mx-auto md:w-2/3 lg:w-1/2">
          <div className="-m-2 flex flex-wrap">
            <div className="w-1/2 p-2">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="peer w-full rounded border border-gray-700 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-700 placeholder-transparent outline-none transition-colors duration-200 ease-in-out"
                  placeholder="Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-gray-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-500"
                >
                  Name
                </label>
              </div>
            </div>
            <div className="w-1/2 p-2">
              {/* <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="peer w-full rounded border border-gray-700 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-700 placeholder-transparent outline-none transition-colors duration-200 ease-in-out"
                  placeholder="Email"
                />
                <label
                  htmlFor="NUMB"
                  className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-gray-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-500"
                >
                  Email
                </label>
              </div> */}
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="peer w-full rounded border border-gray-700 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-700 placeholder-transparent outline-none transition-colors duration-200 ease-in-out"
                  placeholder="Phone Number"
                />
                <label
                  htmlFor="phone"
                  className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-gray-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-500"
                >
                  Phone Number
                </label>
              </div>
            </div>
            <div className="mt-4 w-full p-2">
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  className="peer h-32 w-full rounded border border-gray-700 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-700 placeholder-transparent outline-none transition-colors duration-200 ease-in-out"
                  placeholder="Message"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-gray-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-500"
                >
                  Message
                </label>
              </div>
            </div>
            <div className="w-full p-2">
              <button className="mx-auto flex rounded border-0 bg-gray-500 py-2 px-8 text-lg text-white hover:bg-gray-700 focus:outline-none">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
