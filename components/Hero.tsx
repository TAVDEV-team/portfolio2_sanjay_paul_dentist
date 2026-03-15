"use client";
import Image from "next/image";
import heroImg from "../public/sanjoy2.jpg"; // save the hero image locally

export default function Hero() {
  return (
    <section className="relative bg-sky-900 overflow-hidden py-12 md:py-24" id="hero">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="z-10 text-center md:text-left">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-emerald-700 bg-emerald-100 rounded-full">
            Trusted Dental Care in MiaBazar
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Your Smile, <br />
            <span className="text-white">Our Priority</span>
          </h1>
          <p className="text-lg text-white mb-8 max-w-lg mx-auto md:mx-0">
            Experience world-class dental treatments with the latest technology and a compassionate team dedicated to your oral health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a className="px-8 py-4 bg-sky-600 text-white font-bold rounded-xl shadow-lg hover:bg-sky-700 transition-all text-center" href="#appointment">
              Book Appointment
            </a>
            <a className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all text-center" href="#services">
              View Services
            </a>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="absolute inset-0 bg-sky-100 rounded-full blur-3xl opacity-50 -z-10"></div>
          <Image
            className="rounded-3xl shadow-2xl w-full max-w-md border-8 border-white"
            src={heroImg}
            alt="Smiling Patient"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}