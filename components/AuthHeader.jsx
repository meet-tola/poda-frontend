import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const AuthHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); 
  };

  return (
    <div className="fixed top-0 z-50 w-full bg-white shadow-sm transition-all duration-300 data-[scrolled=true]:bg-background data-[scrolled=true]:shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/assets/header-logo.svg" alt="Poda" className="h-8 object-contain" />
        </Link>

        <div className="flex gap-2 items-center">
          <div className="md:hidden flex items-center gap-2">
            <Link href="/signin">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Signup</Button>
            </Link>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                onClick={() => handleLinkClick("/")}
                className={`block py-2 px-3 rounded md:bg-transparent md:text-gray-900 md:p-0 dark:text-white md:dark:text-black ${
                  activeLink === "/" ? "bg-black text-white" : "text-gray-900"
                }`}
                aria-current={activeLink === "/" ? "page" : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#features"
                onClick={() => handleLinkClick("#features")}
                className={`block py-2 px-3 rounded md:bg-transparent md:text-gray-900 md:p-0 dark:text-white md:dark:text-black ${
                  activeLink === "#features"
                    ? "bg-black text-white"
                    : "text-gray-900"
                }`}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#about_us"
                onClick={() => handleLinkClick("#about_us")}
                className={`block py-2 px-3 rounded md:bg-transparent md:text-gray-900 md:p-0 dark:text-white md:dark:text-black ${
                  activeLink === "#about_us"
                    ? "bg-black text-white"
                    : "text-gray-900"
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#how_it_works"
                onClick={() => handleLinkClick("#how_it_works")}
                className={`block py-2 px-3 rounded md:bg-transparent md:text-gray-900 md:p-0 dark:text-white md:dark:text-black ${
                  activeLink === "#how_it_works"
                    ? "bg-black text-white"
                    : "text-gray-900"
                }`}
              >
                How it Works
              </Link>
            </li>
            <li>
              <Link
                href="#contact_us"
                onClick={() => handleLinkClick("#contact_us")}
                className={`block py-2 px-3 rounded md:bg-transparent md:text-gray-900 md:p-0 dark:text-white md:dark:text-black ${
                  activeLink === "#contact_us"
                    ? "bg-black text-white"
                    : "text-gray-900"
                }`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Link href="/signin">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/signup">
            <Button>Signup</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthHeader;
