"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <div className="bg-[#f5f1ee] min-h-[250px] flex flex-col  items-center w-full">
        <div className="max-md:flex max-md:flex-col pt-10 flex justify-between px-4 md:px-16 w-full">
          <div>
            <Link href="/">
              <Image
                alt="PodaLogo"
                src="/assets/header-logo.svg"
                width={100}
                height={40}
                className="object-cover"
              />
            </Link>
            <p className="text-[13px] my-2">
              All rights reserved @ PodA {date}{" "}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-black text-white">
                <FacebookIcon />
              </div>
              <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-black text-white">
                <LinkedinIcon />
              </div>
              <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-black text-white">
                <TwitterIcon />
              </div>
            </div>
          </div>
          <div className="flex w-[calc(90vw-350px)] max-md:w-[95%] max-md:flex-col justify-between">
            <div className="max-md:my-3">
              <div className="font-bold">Product</div>
              <div className="mt-1">Home</div>
              <div className="mt-1">Updates</div>
              <div className="mt-1">Services</div>
            </div>
            <div className="max-md:my-3">
              <div className="font-bold">About</div>
              <div className="mt-1">About Us</div>
              <div className="mt-1">Blog</div>
              <div className="mt-1">Careers</div>
            </div>
            <div className="max-md:my-3">
              <div className="font-bold">Support</div>
              <div className="mt-1">Contact</div>
              <div className="mt-1">Whatsapp</div>
              <div className="mt-1">Telegram</div>
            </div>
            <div className="max-md:my-3">
              <div className="font-bold">Try Now</div>
              <div className="mt-1">Why PodA?</div>
              <div className="mt-1">Support</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
