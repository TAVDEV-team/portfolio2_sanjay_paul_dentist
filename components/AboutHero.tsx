
"use client";
import Image from "next/image";
import heroImg from "../public/sanjoy2.jpg";

export default function AboutHero() {
  return (
    <section className="relative bg-sky-900 text-white overflow-hidden">

      <div className="absolute inset-0 opacity-20">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDpYDLf7Q1AKnAWiHx7UK691IIt_8FFmN0RzHodjdY3BYXwtRLFlgE_3Hc4Lk-oKPrB7Peix8ngMHCTRNqKE-Q5_4s0RVxqtT3D_bFe42ScH9mNi_7leVRM8hEa1QKwo3hde6jLgJY8RkIkHm_sBWFX_ap4kysjgRyJFM8vagLGIjXnfcke_DyNLOs3aRDo1QrTgWq5zG3kw5QEc14tjrsZyU1_WfOuLRcowB-ozX0Dzfwy15h4_tiKBhgQe6Y2S9z9jWKEwjGFMo"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative px-4 pt-12 pb-16 max-w-md mx-auto text-center">

        <div className="mb-6 inline-block p-1 bg-gradient-to-tr from-amber-400 to-sky-100 rounded-full shadow-xl">
          {/* <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM2BpwPeG46woDc3GF3mMZ70ha8RQV2Bjzh4-gnerBXXHSkQbK9ltAGx5s7dAUprVa9bUKeOPMd50-hvP7S35qXdQTmY1fzHM1UFC7SPEuPCXtuNykXFRiy5IQDnLedtLUJ93agJkzDtpvZKhgVt8q8JpX5hb8iWTK_H_wjP9zmTvMg3ohdo22ZK_5qsHj7FkUVZFiEtYadh6VD64a90j0ZePXZX4Oqn_6AI7IrLt_KPAVcwwX5OSA6t_QquoecqXRSHAigDzeq8U"
            className="w-48 h-48 rounded-full object-cover border-4 border-white"
          /> */}
          <Image
                      className="w-48 h-48 rounded-full object-cover border-4 border-white"
                      src={heroImg}
                      alt="Smiling Patient"
                    />
        </div>

        <h1 className="text-3xl font-bold mb-4">
          Meet Dentist Sanjoy Paul <br/>
          <span className="text-amber-400">Your Trusted Dentist</span>
        </h1>

        <p className="text-sky-100 text-lg font-medium">
          With 10+ Years of Clinical Experience in Bangladesh
        </p>

      </div>

    </section>
  )
}