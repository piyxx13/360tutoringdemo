"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-white text-[#1E3A5F]">
      <section className="relative overflow-hidden bg-[#F8FAFC] py-20">
        <div className="pointer-events-none absolute -left-20 top-8 h-44 w-44 rounded-full bg-blue-200 opacity-30 blur-2xl" />
        <div className="pointer-events-none absolute right-6 top-0 h-44 w-44 rounded-full bg-yellow-200 opacity-30 blur-2xl" />

        <div className="mx-auto max-w-5xl px-4 text-center">
          <span className="rounded-full bg-[#F5C518]/20 px-4 py-2 text-xs font-bold text-[#F5C518] uppercase tracking-widest">Get in Touch</span>
          <h1 className="mt-4 text-4xl font-black md:text-6xl">Road to Success Starts Here</h1>
          <p className="mx-auto mt-4 max-w-3xl text-[#64748B]">Reach out and we’ll match you with the right tutor for your learning goals.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 md:grid md:grid-cols-2 md:gap-6">
        <div className="card-surface rounded-3xl p-8">
          <h2 className="text-2xl font-black text-[#1E3A5F]">Contact Info</h2>
          <ul className="mt-4 space-y-3 text-[#64748B]">
            <li>📧 <a href="mailto:360tutoring.mtl@gmail.com" className="text-[#F5C518]">360tutoring.mtl@gmail.com</a></li>
            <li>📞 <a href="tel:4385305252" className="text-[#F5C518]">438-530-5252</a></li>
            <li>📸 <a href="https://www.instagram.com/360_tutoring_mtl" target="_blank" rel="noreferrer" className="text-[#F5C518]">@360_tutoring_mtl</a></li>
            <li>👍 <a href="https://www.facebook.com/360-Tutoring-61563202827532" target="_blank" rel="noreferrer" className="text-[#F5C518]">360 Tutoring</a></li>
          </ul>
        </div>

        <div className="card-surface rounded-3xl p-8">
          <h2 className="text-2xl font-black text-[#1E3A5F]">Send a Message</h2>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
            className="mt-4 flex flex-col gap-3"
          >
            <input
              className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-[#1E3A5F] outline-none focus:ring-2 focus:ring-[#F5C518] focus:border-[#F5C518] placeholder:text-gray-400"
              placeholder="Your name"
              required
            />
            <input
              className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-[#1E3A5F] outline-none focus:ring-2 focus:ring-[#F5C518] focus:border-[#F5C518] placeholder:text-gray-400"
              type="email"
              placeholder="Your email"
              required
            />
            <textarea
              className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-[#1E3A5F] outline-none focus:ring-2 focus:ring-[#F5C518] focus:border-[#F5C518] placeholder:text-gray-400"
              placeholder="How can we help you?"
              rows={4}
              required
            />
            <button
              type="submit"
              className="rounded-full bg-[#F5C518] px-6 py-2 font-bold text-[#1E3A5F]"
            >
              Send Message
            </button>
          </form>

          {submitted && (
            <p className="mt-3 rounded-lg bg-[#F5C518]/20 p-3 text-sm text-[#1E3A5F]">
              Thanks for your message! We'll reach out within 24-48 hours.
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="card-surface rounded-3xl border border-gray-200 p-8">
          <p className="text-2xl font-semibold text-[#1E3A5F] italic">“I loved how 360 Tutoring matched me instantly with a tutor who helped my daughter ace her exams.”</p>
          <p className="mt-3 font-bold text-[#F5C518]">— Rachelle B.</p>
        </div>
      </section>
    </div>
  );
}
