"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaTooth } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center">
              <FaTooth className="h-6 w-6 text-white" />
            </div>
            <Link
              href="/"
              className="font-bold text-xl tracking-tight text-sky-900 uppercase"
            >
              Sanjoy Dental Care
            </Link>
          </div>

          {/* Hamburger for mobile */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(true)}
            aria-label="Menu"
          >
            <HiMenu className="h-6 w-6" />
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600 text-sm">
            <Link href="/services" className="hover:text-sky-600 transition-colors">
              Services
            </Link>
            <Link href="/About" className="hover:text-sky-600 transition-colors">
              About
            </Link>
            <Link href="/Contact" className="hover:text-sky-600 transition-colors">
              Contact
            </Link>
            <Link
              href="#appointment"
              className="bg-sky-600 text-white px-5 py-2.5 rounded-full hover:bg-sky-700 transition-all shadow-md"
            >
              Book Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-40 transition ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Sidebar panel */}
        <div
          className={`absolute top-0 left-0 h-full w-64 bg-sky-900 shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header with close button */}
          <div className="flex items-center justify-between p-4 border-b">
            <span className="font-bold text-white">Menu</span>
            <button onClick={() => setIsOpen(false)}>
              <HiX className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Menu links */}
          <div className="flex flex-col p-6 gap-6 text-white font-medium">
            <Link href="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="/About" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/Contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link
              href="#appointment"
              className="bg-sky-600 text-white px-5 py-2 rounded-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}