import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";

const routes = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Stories",
    href: "/stories",
  },
  // {
  //   title: "Journal",
  //   href: "#",
  // },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Drawer = ({ isOpen, setOpen }) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      {/* <button
                        type="button"
                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button> */}
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                        Panel title
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <div className="relative flex-1 px-4 sm:px-6 overflow-hidden">
                        <ul className="grid gap-2">
                          {routes.map((route, idx) => (
                            <motion.li
                              key={route.title}
                              initial={{ x: "100%", opacity: 0 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: 0.1 + idx / 10,
                              }}
                              className="w-full p-[0.08rem] rounded-xl"
                            >
                              <a
                                onClick={() => setOpen((prev) => !prev)}
                                className="flex items-center justify-between w-full p-5 rounded-xl"
                                href={route.href}
                              >
                                <span className="flex gap-1 text-4xl">
                                  {route.title}
                                </span>
                              </a>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Drawer;
