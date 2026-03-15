"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaTooth } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center">
          <FaTooth className="h-6 w-6 text-white" />
        </div>
          <Link href="/" className="font-bold text-xl tracking-tight text-sky-900 uppercase">
            Sanjoy Dental Care
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>

        {/* Desktop menu */}
        <div className={`md:flex items-center gap-8 font-medium text-slate-600 text-sm ${isOpen ? "block" : "hidden"}`}>
          <Link href="/services" className="hover:text-sky-600 transition-colors">Services</Link>
          <Link className="hover:text-sky-600 transition-colors" href="/About">About</Link>
          <Link className="hover:text-sky-600 transition-colors" href="/Contact">Contact</Link>
          <Link className="bg-sky-600 text-white px-5 py-2.5 rounded-full hover:bg-sky-700 transition-all shadow-md" href="#appointment">Book Now</Link>
        </div>
      </div>
    </nav>
  );
}