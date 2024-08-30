"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: ["Home", "Updates", "Services"],
    },
    {
      title: "About",
      links: ["About Us", "Blog", "Careers"],
    },
    {
      title: "Support",
      links: ["Contact", "Whatsapp", "Telegram"],
    },
    {
      title: "Try Now",
      links: ["Why PodA?", "Support"],
    },
  ];

  return (
    <footer className="w-full bg-[#f5f1ee] py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col items-start">
            <Link href="/" aria-label="Go to PodA homepage">
              <Image
                alt="PodA Logo"
                src="/assets/header-logo.svg"
                width={100}
                height={40}
                className="object-contain"
              />
            </Link>
            <p className="text-sm mt-4 text-gray-600">
              All rights reserved © PodA {currentYear}
            </p>
            <div className="flex items-center gap-4 mt-6">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Twitter, label: "Twitter" },
              ].map(({ Icon, label }) => (
                <Link
                  key={label}
                  href={`https://${label.toLowerCase()}.com`}
                  aria-label={`Visit our ${label} page`}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
                >
                  <Icon fill="white" strokeWidth={0} size={20} />
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="font-bold text-lg mb-3">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;