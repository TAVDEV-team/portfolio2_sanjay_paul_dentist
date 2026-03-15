"use client";
import Image from "next/image";
import clinicImg from "../public/interior.jpg"; // save this image locally

export default function AboutUs() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <Image
            src={clinicImg}
            alt="Dental Clinic Interior"
            className="rounded-3xl shadow-lg w-full"
            width={600}
            height={200}
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Committed to Excellence in Patient Care
          </h2>
          <p className="text-slate-600 mb-6 text-lg leading-relaxed">
            At SmileBright, we understand that visiting the dentist can be stressful. That's why we've designed our clinic in the heart of Dhaka to be a serene sanctuary for our patients.
          </p>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Our team of highly qualified specialists, led by Dr. Ahmed, utilizes advanced technology from Germany and Japan to provide treatments that are precise, painless, and tailored to the unique needs of the Bangladeshi community.
          </p>
          <div className="grid grid-cols-2 gap-6 border-t border-slate-100 pt-8">
            <div>
              <h4 className="text-3xl font-bold text-sky-600 mb-1">15+</h4>
              <p className="text-slate-500 font-medium">Years of Experience</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-emerald-600 mb-1">5000+</h4>
              <p className="text-slate-500 font-medium">Happy Patients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}