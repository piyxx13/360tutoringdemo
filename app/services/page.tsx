import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Services — 360 Tutoring",
  description: "Explore tutoring services offered by 360 Tutoring.",
};

const serviceItems = [
  { icon: "📚", title: "Subject Tutoring", text: "Personalized one-on-one support in math, science, language, and more." },
  { icon: "🧠", title: "Test Prep", text: "Targeted prep for exams, standardized tests, and final assessments." },
  { icon: "📈", title: "Study Skills", text: "Techniques for notes, organization, and long-term academic resilience." },
  { icon: "💬", title: "Language Support", text: "English and French literacy and communication coaching." },
];

export default function ServicesPage() {
  return (
    <div className="bg-white text-[#1E3A5F]">
      <section className="relative overflow-hidden bg-[#F8FAFC] py-20">
        <div className="pointer-events-none absolute -left-20 top-8 h-44 w-44 rounded-full bg-blue-200 opacity-30 blur-2xl" />
        <div className="pointer-events-none absolute right-6 top-0 h-44 w-44 rounded-full bg-yellow-200 opacity-30 blur-2xl" />

        <div className="mx-auto max-w-5xl px-4 text-center">
          <span className="rounded-full bg-[#F5C518]/20 px-4 py-2 text-xs font-bold text-[#F5C518] uppercase tracking-widest">What We Offer</span>
          <h1 className="mt-4 text-4xl font-black md:text-6xl">360° Tutoring Services</h1>
          <p className="mx-auto mt-4 max-w-3xl text-[#64748B]">High-impact tutoring packages focused on measurable outcomes, confidence, and consistent academic growth.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {serviceItems.map((service) => (
            <div key={service.title} className="card-surface rounded-3xl p-8">
              <div className="text-4xl">{service.icon}</div>
              <h2 className="mt-4 text-2xl font-black text-[#1E3A5F]">{service.title}</h2>
              <p className="mt-2 text-[#64748B]">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F5C518] py-20">
        <div className="mx-auto max-w-5xl text-center text-[#1E3A5F]">
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4),transparent_60%)]" />
            <h2 className="relative text-8xl font-black">100%</h2>
          </div>
          <h3 className="mt-6 text-2xl font-black">Commitment to Your Success</h3>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-[#1E3A5F]/80">We invest in every student with personalized planning, onboarding metrics, and regular progress updates to ensure the best outcomes.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact-us" className="btn-pill inline-flex rounded-full bg-[#0F172A] px-8 py-3 font-bold text-[#F5C518]">Get Started</Link>
            <Link href="/about-us" className="btn-pill inline-flex rounded-full border border-[#0F172A] bg-white px-8 py-3 font-bold text-[#1E3A5F]">Learn More</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
