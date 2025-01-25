"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import logo from "../images/Logos.png";
import { RxCross2 } from "react-icons/rx";
import SearchBar from "./search";
import CartPageIcon from "./cartpageicon";
import { UserButton } from "@clerk/nextjs";
import WishIcon from "./wishIcon";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [attr, setAttr] = useState("hidden");
  const [attr2, setAttr2] = useState("block");

  const handleToggle = () => {
    setAttr(isOpen ? "hidden" : "block");
    setAttr2(isOpen ? "block" : "hidden");
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="relative flex justify-around md:justify-around items-center px-3 py-4">
        <div className="flex items-center">
          <IoMenu
            onClick={handleToggle}
            className={`${attr2} lg:hidden text-3xl mr-3`}
          />
          <RxCross2
            onClick={handleToggle}
            className={`${attr} lg:hidden text-3xl mr-3}`}
          />

          <Link href="/">
            <h1 className="w-32 sm:flex   gap-3 text-2xl font-bold items-center sm:w-32">
              <Image src={logo} alt="Logo" className="w-7 md:w-12" />
              Funiro
            </h1>
          </Link>
        </div>
        <div>
          <ul
            className={`${attr} w-[100vw]  lg:hidden left-0 top-20 absolute bg-white z-20  text-center space-x-6 space-y-3 text-xl  py-4 font-medium }`}
          >
            <li>
              <Link
                href="/"
                className="hover:text-yellow-500 block  font-bold py-2 sm:py-0"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="hover:text-yellow-500 font-bold block py-2 sm:py-0"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/orders"
                className="hover:text-yellow-500 font-bold block py-2 sm:py-0"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-yellow-500 block font-bold py-2 sm:py-0"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-yellow-500 font-bold block py-2 sm:py-0"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <ul className="hidden space-x-14  text-sm font-medium lg:flex">
          <li>
            <Link
              href="/"
              className="hover:text-yellow-500  font-bold block py-2 sm:py-0"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="hover:text-yellow-500 font-bold block py-2 sm:py-0"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/orders"
              className="hover:text-yellow-500 font-bold block py-2 sm:py-0"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-yellow-500 font-bold block py-2 sm:py-0"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="hover:text-yellow-500 font-bold block py-2 sm:py-0"
            >
              Blog
            </Link>
          </li>
        </ul>

        <div className="flex items-center sm:space-x-9  space-x-3">
          <Link href="" className=" sm:block hidden hover:text-[#b8905f]">
            <SearchBar />
          </Link>

          <Link href="" className="hover:text-yellow-500">
            <WishIcon id={0} />
          </Link>
          <Link href="/cart" className="hover:text-yellow-500">
            <CartPageIcon />
          </Link>
          <Link href="/contact" className="hover:text-yellow-500">
            <UserButton />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
