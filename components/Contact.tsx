"use client";

export default function Contact() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="bg-sky-950 rounded-[2rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          {/* Contact Info */}
          <div className="lg:w-2/5 p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <p className="text-slate-400 mb-10">
              We're located in the heart of Banani. Drop by or call us to schedule your visit.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-sky-400">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Our Location</p>
                  <p className="text-slate-400 text-sm">
                    House #12, Road #4, Block B,<br/>Banani, Dhaka-1213, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-sky-400">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Phone Number</p>
                  <p className="text-slate-400 text-sm">+880 1711-223344</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-sky-400">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Working Hours</p>
                  <p className="text-slate-400 text-sm">
                    Sat - Thu: 9:00 AM - 9:00 PM<br/>Friday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Map */}
          <div className="lg:w-3/5 h-[400px] lg:h-auto bg-slate-800">
            <iframe
              allowFullScreen
              className="filter grayscale contrast-125 opacity-70 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14605.378943144577!2d90.4011495!3d23.7885375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70bd043d93b%3A0x67399589d8137358!2sBanani%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1690000000000!5m2!1sen!2sbd"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}