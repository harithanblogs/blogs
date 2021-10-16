import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-gray-100 shadow-md ">
        <div className="max-w-8xl mx-auto px-10 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center justify-end">
              <div className="flex-shrink-0 items-center">
                <a  href="">
                  <img
                  className="h-20 pt-2 pr-8 "
                  src="img/title.png"
                  alt="logo"
                  />
                </a>
              </div>
              <div className="hidden md:block ">
                <div className="ml-10 flex items-baseline space-x-4">
                 
                  <a
                    href="blog"
                    className="text-black-300 hover:bg-gray-700  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Blog
                  </a>

                  <a
                    href="archive"
                    className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Archive of Hate
                  </a>

                  <a
                    href="materials"
                    className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Materials
                  </a>
                   <a
                    href="books"
                    className="text-black-300 hover:bg-gray-700  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Books
                  </a>

                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-white hover:bg-gray-500 focus:outline-none "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

                <a
                  href="blog"
                  className="text-black-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Blog
                </a>

                <a
                  href="archive"
                  className="text-black-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Archive of Hate
                </a>

                <a
                  href="materials"
                  className="text-black-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Materials
                </a>
                <a
                  href="books"
                  className="text-black-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Books
                </a>

             
              </div>
            </div>
          )}
        </Transition>
      </nav>

    </div>
  );
}

export default Header;